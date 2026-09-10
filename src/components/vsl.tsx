"use client";

import { useEffect, useRef, useState } from "react";

type Aspect = "9/16" | "16/9";

// Minimal surface of the YouTube IFrame API we touch.
type YTPlayer = { playVideo: () => void; destroy: () => void };
type YTNamespace = {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      playerVars: Record<string, string | number>;
      events: { onReady: (e: { target: YTPlayer }) => void; onStateChange: (e: { data: number }) => void };
    },
  ) => YTPlayer;
  PlayerState: { PLAYING: number };
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

/*
  The player is created behind the poster as soon as the page loads, so the
  tap on the poster calls playVideo() inside the user gesture. That is what
  makes it start with sound on iPhones, where an iframe added after the tap
  is treated as autoplay and stays muted or does not start at all.
*/
export function Vsl({
  videoId,
  aspect = "16/9",
  poster = "",
  duration = "",
  title = "GTM Partner video",
}: {
  videoId: string;
  aspect?: Aspect;
  poster?: string;
  duration?: string;
  title?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const mount = useRef<HTMLDivElement>(null);
  const player = useRef<YTPlayer | null>(null);
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
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          cc_load_policy: 1,
          iv_load_policy: 3,
          controls: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            player.current = e.target;
            setReady(true);
          },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) {
              setPlaying(true);
              window.gtag?.("event", "vsl_play", { video_id: videoId });
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

  const play = () => {
    if (player.current) {
      player.current.playVideo();
      setPlaying(true);
    }
  };

  // --vsl-h caps the player height: generous on phones, tighter on desktop
  // so the CTA under it stays above the fold on a 900px tall screen.
  const style = vertical
    ? { aspectRatio: "9 / 16", width: "min(100%, calc(var(--vsl-h) * 9 / 16))" }
    : { aspectRatio: "16 / 9", width: "min(100%, calc(var(--vsl-h) * 16 / 9))" };

  return (
    <div
      className="[--vsl-h:80vh] lg:[--vsl-h:46vh] relative mx-auto rounded-2xl overflow-hidden border border-border-default bg-surface-raised shadow-[0_0_80px_rgba(200,162,78,0.12)]"
      style={style}
    >
      {/* YouTube mounts its iframe here. [&_iframe] sizes it to the box. */}
      <div
        ref={mount}
        className="absolute inset-0 [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:w-full [&_iframe]:h-full"
        aria-label={title}
      />

      {!playing && (
        <button
          type="button"
          onClick={play}
          disabled={!!videoId && !ready}
          className="absolute inset-0 w-full h-full group cursor-pointer disabled:cursor-wait"
          aria-label={videoId ? "Play video" : "Video coming soon"}
        >
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
            />
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
    </div>
  );
}
