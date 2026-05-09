"use client";

interface Logo {
  name: string;
  favicon?: string;
}

const clients: Logo[] = [
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
  { name: "DK Law Group", favicon: "/logos/dk-law.svg" },
  { name: "7Eagle", favicon: "/logos/7eagle.png" },
];

const partners: Logo[] = [
  { name: "Clay", favicon: "/logos/clay.png" },
  { name: "HubSpot", favicon: "/logos/hubspot.png" },
  { name: "Salesforce", favicon: "/logos/salesforce.png" },
  { name: "Litify", favicon: "/logos/litify.png" },
  { name: "Clio", favicon: "/logos/clio.png" },
  { name: "Filevine", favicon: "/logos/filevine.png" },
  { name: "Instantly", favicon: "/logos/instantly.png" },
  { name: "GoHighLevel", favicon: "/logos/gohighlevel.png" },
  { name: "Meta Ads", favicon: "/logos/meta.png" },
  { name: "Google Ads", favicon: "/logos/google.png" },
];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="shrink-0 flex items-center gap-2 px-5 opacity-60 hover:opacity-100 transition-opacity duration-300">
      {logo.favicon && (
        <img src={logo.favicon} alt="" className="w-5 h-5 rounded-sm object-contain" />
      )}
      <span className="text-xs font-medium text-text-secondary whitespace-nowrap">{logo.name}</span>
    </div>
  );
}

function Marquee({ items, speed = 50, reverse = false }: { items: Logo[]; speed?: number; reverse?: boolean }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
      <div
        className="flex items-center w-max hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {tripled.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export function LogoGrid({ title }: { title?: string }) {
  return (
    <section className="py-10 overflow-hidden">
      {/* Partner badges — static grid */}
      <div className="mx-auto max-w-5xl px-6 mb-10">
        <p className="text-center text-[10px] font-semibold text-text-muted/60 tracking-[0.2em] uppercase mb-5">
          Partners &amp; Integrations
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border-subtle bg-surface-raised/50 hover:border-border-hover transition-colors"
            >
              {p.favicon && (
                <img src={p.favicon} alt="" className="w-4 h-4 rounded-sm object-contain" />
              )}
              <span className="text-[11px] font-medium text-text-secondary">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Client logos — scrolling marquee */}
      {title && (
        <div className="mx-auto max-w-6xl px-6 mb-4">
          <p className="text-center text-[10px] font-semibold text-text-muted/60 tracking-[0.2em] uppercase">
            {title}
          </p>
        </div>
      )}
      <Marquee items={clients} speed={55} />
    </section>
  );
}
