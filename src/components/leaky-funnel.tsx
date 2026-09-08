"use client";

import { useEffect, useRef, useState } from "react";

type Stage = {
  label: string;
  leak?: string;
  agent?: string;
  leaky: number;
  sealed: number;
};

const STAGES: Stage[] = [
  { label: "Lead comes in", leaky: 100, sealed: 100 },
  { label: "Someone answers", leak: "Nobody answers fast enough", agent: "Respond", leaky: 74, sealed: 92 },
  { label: "The inquiry is complete", leak: "Form dropped or call missed", agent: "Catch", leaky: 55, sealed: 84 },
  { label: "They stay in the conversation", leak: "Goes quiet after the first call", agent: "Respond", leaky: 39, sealed: 76 },
  { label: "They book a consult", leak: "Marked dead, sits in the CRM", agent: "Revive", leaky: 26, sealed: 68 },
];

export function LeakyFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const [sealed, setSealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return setSealed(true);

    let seal: ReturnType<typeof setTimeout>;
    const begin = () => { seal = setTimeout(() => setSealed(true), 2000); };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { begin(); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    const fallback = setTimeout(begin, 1500);
    return () => { io.disconnect(); clearTimeout(fallback); clearTimeout(seal); };
  }, []);

  const tab = (on: boolean) =>
    `px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
      on ? "bg-brand/15 border border-brand/40 text-brand"
         : "border border-border-subtle text-text-muted hover:text-text-secondary"
    }`;

  return (
    <div ref={ref} className="max-w-2xl">
      <div className="flex gap-2 mb-10">
        <button onClick={() => setSealed(false)} className={tab(!sealed)}>Without GTM Partner</button>
        <button onClick={() => setSealed(true)} className={tab(sealed)}>With GTM Partner</button>
      </div>

      <div className="relative">
        {/* centre spine */}
        <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-border-subtle" aria-hidden="true" />

        <ol className="relative space-y-0">
          {STAGES.map((s, i) => (
            <li key={s.label}>
              {s.leak && (
                <div className="h-11 flex items-center justify-center">
                  <span
                    className="inline-flex items-center gap-2 text-[11px] transition-all duration-500"
                    style={{
                      opacity: sealed ? 0 : 1,
                      transform: sealed ? "scale(.96)" : "none",
                      position: sealed ? "absolute" : "relative",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                    <span className="text-red-400/80">{s.leak}</span>
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-semibold text-brand transition-all duration-500"
                    style={{
                      opacity: sealed ? 1 : 0,
                      transform: sealed ? "none" : "scale(.94)",
                      transitionDelay: sealed ? `${i * 140}ms` : "0ms",
                      position: sealed ? "relative" : "absolute",
                    }}
                  >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" strokeWidth={3.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {s.agent}
                  </span>
                </div>
              )}

              <div
                className="mx-auto h-11 rounded-lg border flex items-center justify-center transition-[width] duration-700 ease-out bg-surface border-border-default"
                style={{ width: `${sealed ? s.sealed : s.leaky}%` }}
              >
                <span className="text-[11px] sm:text-xs text-text-secondary whitespace-nowrap px-3 truncate">
                  {s.label}
                </span>
              </div>
            </li>
          ))}

          <li className="pt-4">
            <div
              className="mx-auto h-12 rounded-lg flex items-center justify-center transition-[width] duration-700 ease-out bg-gradient-to-r from-brand to-brand-light shadow-[0_8px_30px_rgba(200,162,78,0.18)]"
              style={{ width: `${sealed ? 68 : 26}%` }}
            >
              <span className="text-xs font-semibold text-surface whitespace-nowrap px-3">
                Signed case
              </span>
            </div>
          </li>
        </ol>
      </div>

      <p className="mt-10 text-sm text-text-muted leading-relaxed">
        Every leak is a case you already paid for. We seal them in order,
        starting with the cheapest one to fix.
      </p>
    </div>
  );
}
