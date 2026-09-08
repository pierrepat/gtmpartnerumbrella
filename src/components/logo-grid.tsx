"use client";

interface Logo {
  name: string;
  favicon?: string;
}

/* TODO(Pierre): add more law firm logos here as they are cleared to be named.
   Entries without a name render nothing, so the row stays clean. */
const lawFirms: Logo[] = [
  { name: "DK Law Group", favicon: "/logos/dk-law.svg" },
];

const b2bTeams: Logo[] = [
  { name: "Worldpay", favicon: "/logos/worldpay.png" },
  { name: "CloudZero", favicon: "/logos/cloudzero.png" },
  { name: "Cerby", favicon: "/logos/cerby.png" },
  { name: "Electric Era", favicon: "/logos/electric-era.png" },
  { name: "Cloud Capital", favicon: "/logos/cloud-capital.jpg" },
  { name: "MultiPasss", favicon: "/logos/multipasss.png" },
  { name: "CustomLab", favicon: "/logos/customlab.png" },
  { name: "VerifyTx", favicon: "/logos/verifytx.png" },
  { name: "Kelley Austin", favicon: "/logos/kelley-austin.png" },
  { name: "CEO Coaching Intl", favicon: "/logos/ceo-coaching.png" },
  { name: "7Eagle", favicon: "/logos/7eagle.png" },
];

const crms: Logo[] = [
  { name: "Litify", favicon: "/logos/litify.png" },
  { name: "Clio", favicon: "/logos/clio.png" },
  { name: "Filevine", favicon: "/logos/filevine.png" },
  { name: "Salesforce", favicon: "/logos/salesforce.png" },
  { name: "HubSpot", favicon: "/logos/hubspot.png" },
  { name: "GoHighLevel", favicon: "/logos/gohighlevel.png" },
];

function Chip({ logo }: { logo: Logo }) {
  if (!logo.name) return null;
  return (
    <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border-subtle bg-surface-raised/50 hover:border-border-hover transition-colors">
      {logo.favicon && (
        <img src={logo.favicon} alt="" className="w-4 h-4 rounded-sm object-contain" />
      )}
      <span className="text-[11px] font-medium text-text-secondary">{logo.name}</span>
    </div>
  );
}

function Row({ label, items }: { label: string; items: Logo[] }) {
  const shown = items.filter((i) => i.name);
  if (!shown.length) return null;
  return (
    <div className="mb-9 last:mb-0">
      <p className="text-center text-[10px] font-semibold text-text-muted/60 tracking-[0.2em] uppercase mb-4">
        {label}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {shown.map((l) => (
          <Chip key={l.name} logo={l} />
        ))}
      </div>
    </div>
  );
}

/* Outbound & RevOps page keeps the full B2B set, including the tools. */
const b2bTools: Logo[] = [
  ...b2bTeams,
  { name: "Clay", favicon: "/logos/clay.png" },
  { name: "Instantly", favicon: "/logos/instantly.png" },
  { name: "HubSpot", favicon: "/logos/hubspot.png" },
  { name: "Salesforce", favicon: "/logos/salesforce.png" },
];

function Marquee({ items, speed = 55 }: { items: Logo[]; speed?: number }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
      <div
        className="flex items-center w-max hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {tripled.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="shrink-0 flex items-center gap-2 px-5 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {logo.favicon && <img src={logo.favicon} alt="" className="w-5 h-5 rounded-sm object-contain" />}
            <span className="text-xs font-medium text-text-secondary whitespace-nowrap">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Pass `title` for the B2B marquee (Outbound page). Omit it for the
 *  three labelled rows used on the homepage. */
export function LogoGrid({ title }: { title?: string }) {
  if (title) {
    return (
      <section className="py-10 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 mb-4">
          <p className="text-center text-[10px] font-semibold text-text-muted/60 tracking-[0.2em] uppercase">
            {title}
          </p>
        </div>
        <Marquee items={b2bTools} />
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        <Row label="Law firms we work with" items={lawFirms} />
        <Row label="Teams we have built AI and outbound systems for" items={b2bTeams} />
        <Row label="Works with your CRM" items={crms} />
      </div>
    </section>
  );
}
