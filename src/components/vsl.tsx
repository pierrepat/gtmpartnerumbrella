"use client";

import { useState } from "react";

type Aspect = "9/16" | "16/9";

/*
  VSL_EMBED_PLACEHOLDER
  TODO(Pierre): set `src` to the embed URL once the video exists.
  Works with YouTube (youtube.com/embed/ID), Vimeo (player.vimeo.com/video/ID),
  Loom (loom.com/embed/ID) and Tella (tella.tv/video/ID/embed).
  Set `aspect` to "9/16" for a vertical video or "16/9" for a Tella recording.
  Optional `poster` is shown until the visitor presses play.
*/
export function Vsl({
  src = "",
  aspect = "9/16",
  poster = "",
  title = "GTM Partner video",
}: {
  src?: string;
  aspect?: Aspect;
  poster?: string;
  title?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const vertical = aspect === "9/16";

  // Width is derived from the aspect so a 9:16 video never exceeds 80vh
  // and a 16:9 video fills the column. The ratio is reserved up front, so
  // swapping in the real embed causes no layout shift.
  // --vsl-h is 80vh on phones and shrinks on desktop so the CTA under the
  // player stays above the fold on a 900px tall screen.
  const style = vertical
    ? { aspectRatio: "9 / 16", width: "min(100%, calc(var(--vsl-h) * 9 / 16))" }
    : { aspectRatio: "16 / 9", width: "100%" };

  const embedSrc = src
    ? `${src}${src.includes("?") ? "&" : "?"}autoplay=1&cc_load_policy=1`
    : "";

  return (
    <div
      className="[--vsl-h:80vh] lg:[--vsl-h:50vh] relative mx-auto rounded-2xl overflow-hidden border border-border-default bg-surface-raised shadow-[0_0_80px_rgba(200,162,78,0.10)]"
      style={style}
    >
      {src && playing ? (
        <iframe
          src={embedSrc}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => src && setPlaying(true)}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 group"
          aria-label={src ? "Play video" : "Video coming soon"}
        >
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,162,78,0.12),transparent_60%)]" />
          )}
          <span className="relative w-20 h-14 rounded-xl bg-brand text-surface flex items-center justify-center shadow-[0_0_40px_rgba(200,162,78,0.45)] group-hover:scale-105 transition-transform">
            <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </span>
          {!src && (
            <span className="relative text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Video coming soon
            </span>
          )}
        </button>
      )}
    </div>
  );
}
