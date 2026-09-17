interface Logo {
  name: string;
  /** wide logo (wordmark) */
  src: string;
  /** keep the brand's own colours instead of forcing white */
  color?: boolean;
  /** rendered height in px, so odd aspect ratios sit level */
  h?: number;
}

/* Firms and agencies we have delivered leads for. */
const firms: Logo[] = [
  { name: "DK Law Group", src: "/logos/dk-law-wordmark.png", h: 26 },
  { name: "Kass & Moses", src: "/logos/kass-moses.svg", h: 30 },
  { name: "Walker Advertising", src: "/logos/walker-advertising.svg", h: 40 },
];

/* CRMs we deliver into. */
const crms: Logo[] = [
  { name: "Litify", src: "/logos/litify-wordmark.png", h: 20 },
  { name: "Salesforce", src: "/logos/salesforce-wordmark.svg", h: 30, color: true },
  { name: "Filevine", src: "/logos/filevine-wordmark.png", h: 28 },
  { name: "Clio", src: "/logos/clio-wordmark.png", h: 22 },
  { name: "HubSpot", src: "/logos/hubspot-wordmark.svg", h: 22 },
  { name: "HighLevel", src: "/logos/highlevel-wordmark.svg", h: 22, color: true },
];

function Row({ items, className = "" }: { items: Logo[]; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-6 ${className}`}>
      {items.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={logo.name}
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          style={{ height: logo.h ?? 26 }}
          className={`w-auto opacity-70 hover:opacity-100 transition-opacity ${logo.color ? "" : "[filter:brightness(0)_invert(1)]"}`}
        />
      ))}
    </div>
  );
}

/** "Firms we have delivered for" strip. Used on /leads only. */
export function FirmsStrip() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[10px] font-semibold text-text-muted/60 tracking-[0.2em] uppercase mb-6">
          Firms we have delivered for
        </p>
        <Row items={firms} />
      </div>
    </section>
  );
}

/** CRM wordmarks, shown under the CRM answer in the /leads FAQ. */
export function CrmLogos() {
  return <Row items={crms} className="justify-start pt-4" />;
}
