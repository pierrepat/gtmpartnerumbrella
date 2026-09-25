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
              className="absolute inset-0 w-full h-full object-cover scale-105 opacity-45 blur-[2px]"
              fetchPriority="high"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,162,78,0.12),transparent_60%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/70 to-surface/50" />

          {/* Light travelling across the frame */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-y-0 -left-1/4 w-1/4 bg-gradient-to-r from-transparent via-brand/15 to-transparent animate-sheen-sweep" />
          </div>

          {/* Tape along the top and bottom edges */}
          <div className="absolute inset-x-0 top-0 h-[3px] hazard-rule opacity-60" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-[3px] hazard-rule opacity-60" aria-hidden="true" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/40 bg-brand/10 text-[11px] sm:text-xs font-medium text-brand">
              <span className="relative flex w-1.5 h-1.5" aria-hidden="true">
                <span className="absolute inline-flex w-full h-full rounded-full bg-brand opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-brand" />
              </span>
              Under construction
            </span>

            <p className="text-sm sm:text-base font-semibold text-text-primary">
              This video is being updated
            </p>
            <p className="text-xs text-text-muted">Back in a few days</p>

            <div
              className="mt-1 h-[2px] w-32 sm:w-40 overflow-hidden rounded-full bg-border-default"
              aria-hidden="true"
            >
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-brand to-transparent animate-progress-slide" />
            </div>
          </div>
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
