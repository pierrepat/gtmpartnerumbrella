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
  A band of tape across the frame, in the manner of scene tape. The run of
  words is rendered twice and the track slides by half its width, so the
  loop closes on itself with no visible seam. Wider than the frame and
  rotated, so both ends run off the edge.
*/
function Tape({ className = "", reverse = false }: { className?: string; reverse?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute left-1/2 top-1/2 w-[170%] -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      <div className="overflow-hidden border-y-2 border-brand-dark/70 bg-brand shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
        <div className={`flex w-max py-1.5 ${reverse ? "animate-tape-reverse" : "animate-tape"}`}>
          {[0, 1].map((run) => (
            <div key={run} className="flex shrink-0 items-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="flex items-center whitespace-nowrap text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-surface"
                >
                  Under construction
                  <span className="mx-5 inline-block w-1.5 h-1.5 rotate-45 bg-surface/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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

      {/*
        No videoId means the video is deliberately held back. Show the poster
        behind a construction treatment instead of a play button, so the page
        still reads as having a video without offering anything to click.
      */}
      {!videoId && (
        <div
          role="img"
          aria-label="Video under construction, back in a few days"
          className="absolute inset-0 select-none"
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
          {/* Light scrim only: the video should still read clearly through it */}
          <div className="absolute inset-0 bg-surface/25" />

          {/* Tape stretched across the frame, scrolling in opposite directions */}
          <Tape className="rotate-[-8deg] -mt-14 sm:-mt-20" />
          <Tape className="rotate-[7deg] mt-10 sm:mt-14" reverse />

          <span className="absolute left-4 right-4 bottom-4 flex items-center gap-2 text-[11px] sm:text-xs font-medium text-text-primary/90">
            <span className="relative flex w-1.5 h-1.5" aria-hidden="true">
              <span className="absolute inline-flex w-full h-full rounded-full bg-brand opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-brand" />
            </span>
            Back in a few days
          </span>
        </div>
      )}

      {videoId && !playing && (
        <button
          type="button"
          onClick={play}
          disabled={!ready}
          className="absolute inset-0 w-full h-full group cursor-pointer disabled:cursor-wait"
          aria-label="Play video"
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
              Tap to play with sound
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
