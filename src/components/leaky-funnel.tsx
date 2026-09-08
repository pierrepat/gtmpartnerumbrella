"use client";

import { useEffect, useRef, useState } from "react";

type Stage = {
  label: string;
  leak?: string;
  agent?: string;
  leakyWidth: number;
  sealedWidth: number;
};

const STAGES: Stage[] = [
  { label: "Lead comes in", leakyWidth: 100, sealedWidth: 100 },
  {
    label: "Someone answers",
    leak: "Nobody answers fast enough",
    agent: "Respond",
    leakyWidth: 78,
    sealedWidth: 95,
  },
  {
    label: "The inquiry is complete",
    leak: "Form dropped or call missed",
    agent: "Catch",
    leakyWidth: 60,
    sealedWidth: 88,
  },
  {
    label: "They stay in the conversation",
    leak: "Goes quiet after the first call",
    agent: "Respond",
    leakyWidth: 44,
    sealedWidth: 80,
  },
  {
    label: "They book a consult",
    leak: "Marked dead, sits in the CRM",
    agent: "Revive",
    leakyWidth: 30,
    sealedWidth: 72,
  },
];

export function LeakyFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const [sealed, setSealed] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setStarted(true);
      setSealed(true);
      return;
    }

    let seal: ReturnType<typeof setTimeout>;
    const begin = () => {
      setStarted(true);
      seal = setTimeout(() => setSealed(true), 2200);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          begin();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    const fallback = setTimeout(begin, 1800); // never leave it un-started

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
      clearTimeout(seal);
    };
  }, []);

  const btn = (on: boolean) =>
    `px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
      on
        ? "bg-brand/15 border border-brand/40 text-brand"
        : "border border-border-default text-text-muted hover:text-text-secondary"
    }`;

  return (
    <div ref={ref} className="max-w-3xl">
      {/* toggle */}
      <div className="flex gap-2 mb-8">
        <button onClick={() => setSealed(false)} className={btn(!sealed)}>
          Without GTM Partner
        </button>
        <button onClick={() => setSealed(true)} className={btn(sealed)}>
          With GTM Partner
        </button>
      </div>

      {/* sources */}
      <div className="flex flex-wrap gap-2 mb-4" aria-hidden="true">
        <span className="px-3 py-1.5 rounded-lg bg-surface-raised border border-border-default text-[11px] sm:text-xs text-text-secondary">
          Your marketing
        </span>
        <span className="px-3 py-1.5 rounded-lg bg-surface-raised border border-border-default text-[11px] sm:text-xs text-text-secondary">
          Leads we send you
        </span>
      </div>

      <ol className="space-y-1">
        {STAGES.map((s, i) => {
          const w = sealed ? s.sealedWidth : s.leakyWidth;
          return (
            <li key={s.label}>
              {/* leak row */}
              {s.leak && (
                <div className="flex items-center gap-3 h-9 sm:h-10">
                  <span
                    className="relative block shrink-0"
                    style={{ width: "18px" }}
                    aria-hidden="true"
                  >
                    {started &&
                      !sealed &&
                      [0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="absolute left-1/2 top-0 w-1 h-1 rounded-full bg-red-400/70"
                          style={{
                            animation: "leak-drip 1.1s linear infinite",
                            animationDelay: `${d * 0.36}s`,
                          }}
                        />
                      ))}
                  </span>
                  <span
                    className={`text-[11px] sm:text-xs transition-colors duration-500 ${
                      sealed
                        ? "text-text-muted line-through decoration-brand/50"
                        : "text-red-400/90"
                    }`}
                  >
                    {s.leak}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-brand/30 bg-brand/10 text-[10px] font-semibold text-brand transition-all duration-500"
                    style={{
                      opacity: sealed ? 1 : 0,
                      transform: sealed ? "translateX(0)" : "translateX(-6px)",
                      transitionDelay: sealed ? `${i * 180}ms` : "0ms",
                    }}
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {s.agent}
                  </span>
                </div>
              )}

              {/* stage bar */}
              <div className="flex items-center gap-3">
                <span className="w-[18px] shrink-0" aria-hidden="true" />
                <div
                  className="h-9 sm:h-10 rounded-lg bg-gradient-to-r from-brand/30 to-brand/10 border border-brand/20 flex items-center px-3 overflow-hidden transition-[width] duration-700 ease-out"
                  style={{ width: `${w}%` }}
                >
                  <span className="text-[11px] sm:text-xs text-text-secondary whitespace-nowrap">
                    {s.label}
                  </span>
                </div>
              </div>
            </li>
          );
        })}

        {/* signed case */}
        <li className="flex items-center gap-3 pt-1">
          <span className="w-[18px] shrink-0" aria-hidden="true" />
          <div
            className="h-10 sm:h-11 rounded-lg bg-gradient-to-r from-brand to-brand-light flex items-center px-3 transition-[width] duration-700 ease-out"
            style={{ width: `${sealed ? 72 : 30}%` }}
          >
            <span className="text-[11px] sm:text-xs font-semibold text-surface whitespace-nowrap">
              Signed case
            </span>
          </div>
        </li>
      </ol>

      <p className="mt-8 text-sm text-text-muted leading-relaxed">
        Every leak is a case you already paid for. We seal them in order,
        starting with the cheapest one to fix.
      </p>
    </div>
  );
}
