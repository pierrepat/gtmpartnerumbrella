export function Vsl() {
  return (
    <div className="w-full">
      {/*
        VSL_EMBED_PLACEHOLDER
        TODO(Pierre): replace the inner <div> below with the real embed.
        Drop in an <iframe> for YouTube, Vimeo or Loom with
        className="absolute inset-0 w-full h-full" and it will fill this box
        with no layout shift, because the 16:9 ratio is reserved by the parent.
      */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border-default bg-surface-raised">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span className="w-16 h-16 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-brand ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-text-muted">
            Video coming soon
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm text-text-muted">
        Watch: how firms sign more cases without spending more on ads (3 min)
      </p>
    </div>
  );
}
