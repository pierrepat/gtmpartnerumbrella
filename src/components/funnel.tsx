"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { label: "Traffic", width: "100%" },
  { label: "Inquiry", width: "76%" },
  { label: "Qualified", width: "54%" },
  { label: "Consult", width: "34%" },
  { label: "Signed", width: "20%", highlight: true },
];

export function Funnel() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    // Fallback: never leave the bars collapsed if the observer doesn't fire.
    const fallback = setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className="space-y-2.5 max-w-3xl">
      {stages.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3 sm:gap-4">
          <span className="w-16 sm:w-24 shrink-0 text-[10px] sm:text-xs uppercase tracking-wider text-text-muted text-right">
            {s.label}
          </span>
          <div className="flex-1 h-8 sm:h-10 rounded-lg bg-surface-raised border border-border-subtle overflow-hidden">
            <div
              className={`h-full rounded-lg origin-left transition-transform duration-700 ease-out ${
                s.highlight
                  ? "bg-gradient-to-r from-brand to-brand-light"
                  : "bg-gradient-to-r from-brand/25 to-brand/10"
              }`}
              style={{
                width: s.width,
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transitionDelay: `${i * 110}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
