"use client";

interface Logo {
  name: string;
  /** wide logo (wordmark); shown alone, no caption */
  wordmark?: string;
  /** small square mark; shown with the name beside it */
  favicon?: string;
  /** keep the brand's own colours instead of forcing white */
  color?: boolean;
  /** rendered height in px for wordmarks, so odd aspect ratios sit level */
  h?: number;
}

/* Firms and agencies we work with, plus the CRMs we plug into.
   Wordmarks carry the name, so no caption. */
const partners: Logo[] = [
  { name: "DK Law Group", wordmark: "/logos/dk-law-wordmark.png", h: 26 },
  { name: "Walker Advertising", wordmark: "/logos/walker-advertising.svg", h: 40 },
  { name: "Litify", wordmark: "/logos/litify-wordmark.png", h: 22 },
  { name: "Clio", wordmark: "/logos/clio-wordmark.png", h: 26 },
  { name: "Filevine", wordmark: "/logos/filevine-wordmark.png", h: 32 },
  { name: "Salesforce", wordmark: "/logos/salesforce-wordmark.svg", h: 34, color: true },
  { name: "HubSpot", wordmark: "/logos/hubspot-wordmark.svg", h: 26 },
  { name: "HighLevel", wordmark: "/logos/highlevel-wordmark.svg", h: 26, color: true },
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

/* Outbound & RevOps page keeps the full B2B set, including the tools. */
const b2bTools: Logo[] = [
  ...b2bTeams,
  { name: "Clay", favicon: "/logos/clay.png" },
  { name: "Instantly", favicon: "/logos/instantly.png" },
  { name: "HubSpot", favicon: "/logos/hubspot.png" },
  { name: "Salesforce", favicon: "/logos/salesforce.png" },
];

function Item({ logo }: { logo: Logo }) {
  if (logo.wordmark) {
    return (
      <div className="shrink-0 flex items-center px-8 sm:px-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <img
          src={logo.wordmark}
          alt={logo.name}
          style={{ height: logo.h ?? 26 }}
          className={`w-auto ${logo.color ? "" : "[filter:brightness(0)_invert(1)]"}`}
        />
      </div>
    );
  }
  return (
    <div className="shrink-0 flex items-center gap-2 px-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
      {logo.favicon && <img src={logo.favicon} alt="" className="w-5 h-5 rounded-sm object-contain" />}
      <span className="text-xs font-medium text-text-secondary whitespace-nowrap">{logo.name}</span>
    </div>
  );
}

function Marquee({ items, speed = 55, reverse = false }: { items: Logo[]; speed?: number; reverse?: boolean }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
      <div
        className="flex items-center w-max hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${speed}s linear infinite`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {tripled.map((logo, i) => (
          <Item key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[10px] font-semibold text-text-muted/60 tracking-[0.2em] uppercase mb-5">
      {children}
    </p>
  );
}

/** Pass `title` for the single B2B marquee (Outbound page). Omit it for the
 *  two-row partner strip used on the homepage. */
export function LogoGrid({ title }: { title?: string }) {
  if (title) {
    return (
      <section className="py-10 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6"><Label>{title}</Label></div>
        <Marquee items={b2bTools} />
      </section>
    );
  }
  return (
    <section className="py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6"><Label>Partners</Label></div>
      <Marquee items={partners} speed={45} />
      <div className="mx-auto max-w-6xl px-6 mt-10"><Label>Teams we have built AI and outbound systems for</Label></div>
      <Marquee items={b2bTeams} speed={60} reverse />
    </section>
  );
}
