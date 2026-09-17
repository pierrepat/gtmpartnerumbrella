/*
  Track record from the B2B years. Every name, description and figure here
  was already in the repo (the former /outbound page). No services copy: this
  is history, not an offer.
*/
const teams = [
  { name: "Worldpay", icon: "/logos/worldpay.png" },
  { name: "CloudZero", icon: "/logos/cloudzero.png" },
  { name: "Cerby", icon: "/logos/cerby.png" },
  { name: "Electric Era", icon: "/logos/electric-era.png" },
  { name: "Cloud Capital", icon: "/logos/cloud-capital.jpg" },
  { name: "MultiPasss", icon: "/logos/multipasss.png" },
  { name: "CustomLab", icon: "/logos/customlab.png" },
  { name: "VerifyTx", icon: "/logos/verifytx.png" },
  { name: "Kelley Austin", icon: "/logos/kelley-austin.png" },
  { name: "CEO Coaching Intl", icon: "/logos/ceo-coaching.png" },
  { name: "7Eagle", icon: "/logos/7eagle.png" },
];

const cases = [
  {
    company: "Worldpay",
    note: "Fortune 500, B2B payments",
    icon: "/logos/worldpay.png",
    did: "Cleaned and enriched 110,000+ CRM records across multiple HubSpot instances with a 35% duplication rate.",
    value: "110K+",
    metric: "Records cleaned",
  },
  {
    company: "Electric Era",
    note: "EV charging infrastructure",
    icon: "/logos/electric-era.png",
    did: "Built a signal-based outbound engine for enterprise EV charging buyers: multi-domain email, LinkedIn and real-time intent alerts.",
    value: "$53.5M",
    metric: "Pipeline created",
  },
  {
    company: "Cloud Capital",
    note: "B2B SaaS",
    icon: "/logos/cloud-capital.jpg",
    did: "Three Clay automation workflows for funding triggers, new-role targeting and CRM enrichment, replacing 80% of SDR workload.",
    value: "$105K",
    metric: "Monthly savings",
  },
  {
    company: "CustomLab by Outway",
    note: "B2B custom merchandise",
    icon: "/logos/customlab.png",
    did: "Targeted procurement decision-makers at 500+ universities with automated portfolio sharing.",
    value: "5x",
    metric: "ROI multiple",
  },
  {
    company: "MultiPasss",
    note: "Product design agency",
    icon: "/logos/multipasss.png",
    did: "Four-month engagement: cold TAM engine, LinkedIn re-engagement and website de-anonymization.",
    value: "56",
    metric: "Qualified leads",
  },
  {
    company: "7Eagle",
    note: "Staffing and recruiting",
    icon: "/logos/7eagle.png",
    did: "Real-time hiring activity tracking across thousands of companies with instant CRM and ATS push.",
    value: "2.5x",
    metric: "Qualified leads",
  },
];

export function TrackRecord() {
  return (
    <section id="track-record" className="py-14 lg:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
          Track record
        </p>
        <p className="text-text-secondary leading-relaxed max-w-3xl mb-10">
          Before plaintiff law, GTM Partner LLC ran revenue and outbound
          programs for 50 plus companies, from seed stage to Fortune 500.
        </p>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-4 mb-12">
          {teams.map((t) => (
            <div key={t.name} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.icon} alt="" loading="lazy" width={20} height={20} className="w-5 h-5 rounded-sm object-contain" />
              <span className="text-xs font-medium text-text-secondary whitespace-nowrap">{t.name}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div key={c.company} className="card !p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-1">
                <span className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center p-1 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" loading="lazy" width={20} height={20} className="w-full h-full object-contain" />
                </span>
                <h3 className="text-base font-semibold text-text-primary">{c.company}</h3>
              </div>
              <p className="text-xs text-text-muted mb-4">{c.note}</p>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">{c.did}</p>
              <div className="mt-5 pt-4 border-t border-border-subtle">
                <div className="text-xl font-bold stat-value">{c.value}</div>
                <div className="text-xs text-text-muted">{c.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
