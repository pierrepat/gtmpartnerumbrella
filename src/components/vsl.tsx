"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Aspect = "9/16" | "16/9";

// Minimal surface of the YouTube IFrame API we touch.
type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (s: number, allowSeekAhead: boolean) => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  getCurrentTime: () => number;
  getDuration: () => number;
  destroy: () => void;
};
type YTNamespace = {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      playerVars: Record<string, string | number>;
      events: { onReady: (e: { target: YTPlayer }) => void; onStateChange: (e: { data: number }) => void };
    },
  ) => YTPlayer;
  PlayerState: { ENDED: number; PLAYING: number; PAUSED: number; BUFFERING: number };
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const API_SRC = "https://www.youtube.com/iframe_api";

function loadApi(): Promise<YTNamespace> {
  return new Promise((resolve) => {
    if (window.YT?.Player) return resolve(window.YT);
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      if (window.YT) resolve(window.YT);
    };
    if (!document.querySelector(`script[src="${API_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = API_SRC;
      s.async = true;
      document.head.appendChild(s);
    }
  });
}

const fmt = (s: number) => {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
};

type Phase = "idle" | "playing" | "paused" | "ended";

/*
  YouTube's own chrome is switched off (controls=0) and every pointer event
  is caught by our overlay, so the viewer only ever sees our controls, our
  pause screen and our end card. The player is created behind the poster on
  page load so the first tap calls playVideo() inside the user gesture,
  which is what makes it start with sound on iPhones.
*/
export function Vsl({
  videoId,
  aspect = "16/9",
  poster = "",
  duration = "",
  title = "GTM Partner video",
  ctaHref = "/apply",
  ctaLabel = "Book a Free Case Growth Call",
}: {
  videoId: string;
  aspect?: Aspect;
  poster?: string;
  duration?: string;
  title?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [total, setTotal] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const [curtain, setCurtain] = useState(false);
  const curtainTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const mount = useRef<HTMLDivElement>(null);
  const player = useRef<YTPlayer | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const vertical = aspect === "9/16";

  useEffect(() => {
    if (!videoId || !mount.current) return;
    let cancelled = false;
    let instance: YTPlayer | null = null;
    const host = document.createElement("div");
    mount.current.appendChild(host);

    loadApi().then((YT) => {
      if (cancelled) return;
      instance = new YT.Player(host, {
        videoId,
        playerVars: {
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          playsinline: 1,
          iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            player.current = e.target;
            setTotal(e.target.getDuration());
            setReady(true);
          },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) {
              setPhase("playing");
              // YouTube paints its title bar and badges for ~3s after every
              // play start even with controls=0. Cover them until it fades.
              setCurtain(true);
              if (curtainTimer.current) clearTimeout(curtainTimer.current);
              curtainTimer.current = setTimeout(() => setCurtain(false), 3800);
              window.gtag?.("event", "vsl_play", { video_id: videoId });
            } else if (e.data === YT.PlayerState.PAUSED) {
              setPhase("paused");
            } else if (e.data === YT.PlayerState.ENDED) {
              setPhase("ended");
              window.gtag?.("event", "vsl_complete", { video_id: videoId });
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      instance?.destroy();
      player.current = null;
      host.remove();
    };
  }, [videoId]);

  // Progress polling while playing.
  useEffect(() => {
    if (phase !== "playing") return;
    const id = setInterval(() => {
      const p = player.current;
      if (!p) return;
      setTime(p.getCurrentTime());
      if (!total) setTotal(p.getDuration());
    }, 250);
    return () => clearInterval(id);
  }, [phase, total]);

  const play = useCallback(() => {
    if (!player.current) return;
    if (phase === "ended") player.current.seekTo(0, true);
    player.current.playVideo();
  }, [phase]);

  const pause = () => player.current?.pauseVideo();

  const toggle = () => (phase === "playing" ? pause() : play());

  const poke = () => {
    setShowBar(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowBar(false), 2500);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const p = player.current;
    if (!p || !total) return;
    const r = e.currentTarget.getBoundingClientRect();
    const t = ((e.clientX - r.left) / r.width) * total;
    p.seekTo(t, true);
    setTime(t);
    e.stopPropagation();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const p = player.current;
    if (!p) return;
    if (p.isMuted()) {
      p.unMute();
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };

  const fullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = box.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  // --vsl-h caps the player height: generous on phones, tighter on desktop
  // so the CTA under it stays above the fold on a 900px tall screen.
  const style = vertical
    ? { aspectRatio: "9 / 16", width: "min(100%, calc(var(--vsl-h) * 9 / 16))" }
    : { aspectRatio: "16 / 9", width: "min(100%, calc(var(--vsl-h) * 16 / 9))" };

  const pct = total ? Math.min(100, (time / total) * 100) : 0;
  const canFullscreen = typeof document !== "undefined" && !!document.fullscreenEnabled;
  const barVisible = phase === "paused" || (phase === "playing" && showBar);

  return (
    <div
      ref={box}
      className="[--vsl-h:80vh] lg:[--vsl-h:46vh] relative mx-auto rounded-2xl overflow-hidden border border-border-default bg-black shadow-[0_0_80px_rgba(200,162,78,0.12)] select-none fullscreen:rounded-none"
      style={style}
      onMouseMove={phase === "playing" ? poke : undefined}
      onMouseLeave={() => setShowBar(false)}
    >
      {/* YouTube mounts its iframe here. [&_iframe] sizes it to the box. */}
      <div
        ref={mount}
        className="absolute inset-0 pointer-events-none [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:w-full [&_iframe]:h-full"
        aria-label={title}
      />

      {/* Poster */}
      {phase === "idle" && (
        <button
          type="button"
          onClick={play}
          disabled={!!videoId && !ready}
          className="absolute inset-0 w-full h-full group cursor-pointer disabled:cursor-wait z-20"
          aria-label={videoId ? "Play video" : "Video coming soon"}
        >
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,162,78,0.12),transparent_60%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/10 to-surface/20 group-hover:from-surface/70 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-20 h-14 sm:w-24 sm:h-16 rounded-xl bg-brand text-surface flex items-center justify-center shadow-[0_0_50px_rgba(200,162,78,0.55)] group-hover:scale-105 transition-transform">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3 text-left">
            <span className="text-[11px] sm:text-xs font-medium text-text-primary/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
              {videoId ? "Tap to play with sound" : "Video coming soon"}
            </span>
            {duration && (
              <span className="px-2 py-1 rounded-md bg-surface/80 text-[11px] font-semibold text-text-primary tabular-nums">
                {duration}
              </span>
            )}
          </span>
        </button>
      )}

      {/* Click layer: catches every pointer event so YouTube's own UI never wakes up. */}
      {phase !== "idle" && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={() => {
            if (phase === "playing" && !showBar && window.matchMedia("(hover: none)").matches) {
              poke();
              return;
            }
            toggle();
          }}
          role="button"
          aria-label={phase === "playing" ? "Pause" : "Play"}
        />
      )}

      {/* Curtain over YouTube's start-of-play chrome */}
      <div
        className={`absolute inset-0 z-[15] pointer-events-none transition-opacity duration-500 ${
          phase === "playing" && curtain ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-[52px] sm:h-[72px] bg-surface" />
        <div className="absolute inset-x-0 top-[52px] sm:top-[72px] h-6 sm:h-8 bg-gradient-to-b from-surface to-transparent" />
        <div className="absolute left-0 bottom-0 w-20 h-14 sm:w-24 sm:h-16 bg-gradient-to-r from-surface via-surface/90 to-transparent" />
        <div className="absolute right-0 bottom-0 w-36 h-12 sm:w-44 sm:h-14 bg-gradient-to-l from-surface via-surface/90 to-transparent" />
      </div>

      {/* Pause screen */}
      {phase === "paused" && (
        <div className="absolute inset-0 z-10 pointer-events-none bg-surface/55 flex items-center justify-center">
          <span className="w-20 h-14 sm:w-24 sm:h-16 rounded-xl bg-brand text-surface flex items-center justify-center shadow-[0_0_50px_rgba(200,162,78,0.55)]">
            <svg className="w-8 h-8 sm:w-9 sm:h-9 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </span>
        </div>
      )}

      {/* End card */}
      {phase === "ended" && (
        <div className="absolute inset-0 z-20 bg-surface flex flex-col items-center justify-center gap-4 px-6 text-center">
          {poster && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          )}
          <p className="relative text-lg sm:text-2xl font-bold text-text-primary">Think this fits your firm?</p>
          <a href={ctaHref} className="relative btn-primary !px-7 !py-3.5">
            {ctaLabel}
          </a>
          <button
            type="button"
            onClick={play}
            className="relative text-xs text-text-muted hover:text-text-primary transition-colors mt-1"
          >
            Watch again
          </button>
        </div>
      )}

      {/* Our controls */}
      {phase !== "idle" && phase !== "ended" && (
        <div
          className={`absolute left-0 right-0 bottom-0 z-30 px-3 pb-2.5 pt-8 bg-gradient-to-t from-surface/90 to-transparent transition-opacity duration-200 ${
            barVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 rounded-full bg-white/20 cursor-pointer group/bar" onClick={seek} role="slider" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label="Progress">
            <div className="h-full rounded-full bg-brand relative" style={{ width: `${pct}%` }}>
              <span className="absolute -right-1.5 -top-[3px] w-3 h-3 rounded-full bg-brand-light opacity-0 group-hover/bar:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-3 text-text-primary">
            <button type="button" onClick={toggle} className="p-1 hover:text-brand transition-colors" aria-label={phase === "playing" ? "Pause" : "Play"}>
              {phase === "playing" ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v14l11-7-11-7z" /></svg>
              )}
            </button>
            <span className="text-[11px] tabular-nums text-text-secondary">
              {fmt(time)} / {fmt(total)}
            </span>
            <span className="flex-1" />
            <button type="button" onClick={toggleMute} className="p-1 hover:text-brand transition-colors" aria-label={muted ? "Unmute" : "Mute"}>
              {muted ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3l3-3-1.4-1.4-3 3-3-3L10.7 9l3 3-3 3 1.4 1.4 3-3 3 3 1.4-1.4-3-3z" /></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05A4.5 4.5 0 0016.5 12zM14 3.23v2.06a7 7 0 010 13.42v2.06a9 9 0 000-17.54z" /></svg>
              )}
            </button>
            {canFullscreen && (
              <button type="button" onClick={fullscreen} className="p-1 hover:text-brand transition-colors" aria-label="Fullscreen">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
