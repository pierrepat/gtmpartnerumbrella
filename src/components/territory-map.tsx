"use client";

import { useMemo, useState } from "react";
import {
  TERRITORIES,
  TIERS,
  TIER_COLOR,
  GRID_COLS,
  GRID_ROWS,
  type Territory,
} from "@/lib/territories";

const money = (n: number) => "$" + n.toLocaleString("en-US");

/* dark ink on the light steps, light ink on the dark one */
const inkFor = (cpl: number) => (cpl >= 275 ? "#0a0a12" : "#f0e7d2");

export function TerritoryMap() {
  const [selected, setSelected] = useState<Territory | null>(null);
  const [hovered, setHovered] = useState<Territory | null>(null);

  const open = useMemo(() => TERRITORIES.filter((t) => t.open), []);
  const closed = useMemo(() => TERRITORIES.filter((t) => !t.open), []);
  const shown = hovered ?? selected;

  return (
    <div>
      {/* legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6">
        <span className="text-[10px] uppercase tracking-[0.18em] text-text-muted">
          Cost per lead
        </span>
        {TIERS.map((t) => (
          <span key={t} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-[3px]"
              style={{ background: TIER_COLOR[t] }}
            />
            <span className="text-xs text-text-secondary">{money(t)}</span>
          </span>
        ))}
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-[3px] border border-border-default bg-surface-raised" />
          <span className="text-xs text-text-muted">Not available</span>
        </span>
      </div>

      <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
        {/* tile grid */}
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
                    ? `${t.name}, ${money(t.cpl)} per lead`
                    : `${t.name}, not available`
                }
                aria-pressed={isSel}
                style={{
                  gridColumnStart: t.c + 1,
                  gridRowStart: t.r + 1,
                  background: t.open ? TIER_COLOR[t.cpl] : "transparent",
                  color: t.open ? inkFor(t.cpl) : undefined,
                }}
                className={`aspect-square rounded-[4px] sm:rounded-md flex items-center justify-center
                  text-[8px] sm:text-[11px] font-semibold tracking-tight transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-brand
                  ${
                    t.open
                      ? "hover:brightness-110"
                      : "border border-border-default bg-surface-raised text-text-muted/50 hover:border-border-hover"
                  }
                  ${isSel ? "ring-2 ring-white/80 z-10" : ""}`}
              >
                {t.ab}
              </button>
            );
          })}
        </div>

        {/* detail */}
        <div className="card !p-5 min-h-[168px] flex flex-col justify-center lg:sticky lg:top-28">
          {shown ? (
            <>
              <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-2">
                {shown.open ? "Available" : "Not available"}
              </p>
              <p className="text-xl font-bold text-text-primary mb-4">
                {shown.name}
              </p>
              {shown.open ? (
                <>
                  <p className="text-3xl font-bold stat-value leading-none">
                    {money(shown.cpl)}
                  </p>
                  <p className="text-xs text-text-muted mt-1.5">
                    per exclusive lead
                  </p>
                  <p className="text-xs text-text-secondary mt-4 pt-4 border-t border-border-subtle leading-relaxed">
                    About {money(shown.retainer)} per signed case if you sign
                    one in ten. Your rate decides the real number.
                  </p>
                </>
              ) : (
                <p className="text-sm text-text-secondary leading-relaxed">
                  We have an exclusivity deal with a firm here, so we are not
                  taking new partners in this state. Recover is still open to
                  you.
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-text-muted leading-relaxed">
              Tap your state to see the cost per lead.
              <span className="block mt-3 text-text-secondary">
                {open.length} states open. {closed.length} spoken for.
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
        <div className="px-5 pb-5 pt-1 border-t border-border-subtle overflow-x-auto">
          <table className="w-full text-sm mt-3">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="text-left py-2 pr-4 text-xs uppercase tracking-wider text-text-muted font-medium">
                  State
                </th>
                <th className="text-left py-2 pr-4 text-xs uppercase tracking-wider text-text-muted font-medium">
                  Cost per lead
                </th>
                <th className="text-left py-2 text-xs uppercase tracking-wider text-text-muted font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[...TERRITORIES]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((t) => (
                  <tr key={t.ab} className="border-b border-border-subtle/60">
                    <td className="py-2 pr-4 text-text-secondary">{t.name}</td>
                    <td className="py-2 pr-4 text-text-primary font-medium">
                      {t.open ? money(t.cpl) : "Not sold"}
                    </td>
                    <td className="py-2 text-text-muted">
                      {t.open ? "Open" : "Exclusive to another firm"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
