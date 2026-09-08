"use client";

import { useMemo, useState } from "react";
import {
  TERRITORIES,
  GRID_COLS,
  GRID_ROWS,
  type Territory,
} from "@/lib/territories";

export function TerritoryMap() {
  const [selected, setSelected] = useState<Territory | null>(null);
  const [hovered, setHovered] = useState<Territory | null>(null);

  const open = useMemo(() => TERRITORIES.filter((t) => t.open), []);
  const closed = useMemo(() => TERRITORIES.filter((t) => !t.open), []);
  const shown = hovered ?? selected;

  return (
    <div>
      {/* legend */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-[3px] bg-brand" />
          <span className="text-xs text-text-secondary">Open</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-[3px] border border-border-default bg-surface-raised" />
          <span className="text-xs text-text-muted">Taken by another firm</span>
        </span>
      </div>

      <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
        <div
          className="grid gap-[3px] sm:gap-1 w-full max-w-[600px]"
          style={{
            gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
          }}
          onMouseLeave={() => setHovered(null)}
        >
          {TERRITORIES.map((t) => {
            const isSel = selected?.ab === t.ab;
            return (
              <button
                key={t.ab}
                type="button"
                onClick={() => setSelected(isSel ? null : t)}
                onMouseEnter={() => setHovered(t)}
                onFocus={() => setHovered(t)}
                onBlur={() => setHovered(null)}
                aria-label={
                  t.open
                    ? `${t.name}, open`
                    : `${t.name}, taken by another firm`
                }
                aria-pressed={isSel}
                style={{ gridColumnStart: t.c + 1, gridRowStart: t.r + 1 }}
                className={`aspect-square rounded-[4px] sm:rounded-md flex items-center justify-center
                  text-[8px] sm:text-[11px] font-semibold tracking-tight transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-brand
                  ${
                    t.open
                      ? "bg-brand text-surface hover:brightness-110"
                      : "border border-border-default bg-surface-raised text-text-muted/50 hover:border-border-hover"
                  }
                  ${isSel ? "ring-2 ring-white/80 z-10" : ""}`}
              >
                {t.ab}
              </button>
            );
          })}
        </div>

        <div className="card !p-5 min-h-[168px] flex flex-col justify-center lg:sticky lg:top-28">
          {shown ? (
            <>
              <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-2">
                {shown.open ? "Open" : "Taken"}
              </p>
              <p className="text-xl font-bold text-text-primary mb-4">
                {shown.name}
              </p>
              {shown.open ? (
                <>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    We can take one firm here. Every lead is yours alone, and
                    that is written into the agreement.
                  </p>
                  <a
                    href="#pilot-form"
                    className="btn-primary w-full justify-center mt-5 !py-2.5 text-xs"
                  >
                    Claim this state
                  </a>
                </>
              ) : (
                <p className="text-sm text-text-secondary leading-relaxed">
                  We already have an exclusivity deal with a firm here, so we
                  are not taking another. Recover is still open to you.
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-text-muted leading-relaxed">
              Tap your state to check availability.
              <span className="block mt-3 text-text-secondary">
                {open.length} states open. {closed.length} already taken.
              </span>
            </p>
          )}
        </div>
      </div>

      {/* table view */}
      <details className="mt-8 rounded-xl border border-border-subtle bg-surface overflow-hidden group">
        <summary className="cursor-pointer list-none px-5 py-3.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between">
          <span>See every state as a list</span>
          <span className="text-text-muted text-lg group-open:rotate-45 transition-transform">
            +
          </span>
        </summary>
        <div className="px-5 pb-5 pt-1 border-t border-border-subtle">
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1.5 mt-3">
            {[...TERRITORIES]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((t) => (
                <div
                  key={t.ab}
                  className="flex items-center justify-between py-1.5 border-b border-border-subtle/60"
                >
                  <span className="text-sm text-text-secondary">{t.name}</span>
                  <span
                    className={`text-xs font-medium ${
                      t.open ? "text-brand" : "text-text-muted"
                    }`}
                  >
                    {t.open ? "Open" : "Taken"}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </details>
    </div>
  );
}
