/*
  The two subsidiaries of GTM Partner LLC. PlaintiffPilot is the AI intake
  engine, MVA Compensation is the organic lead flow engine. Everything here
  reuses facts already on the site; no new numbers.
*/
const PP_URL = "https://plaintiffpilot.com";
const MVA_URL = "https://mvacompensation.com";

function ExternalIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function MvaMark() {
  // Same mark the property itself uses: shield in a navy square, two tone wordmark.
  return (
    <span className="flex items-center gap-2.5">
      <span className="w-9 h-9 rounded-lg bg-[#0f1f3d] border border-white/10 flex items-center justify-center shrink-0">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3z" />
        </svg>
      </span>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-text-primary">MVA</span>
        <span className="text-brand">Compensation</span>
      </span>
    </span>
  );
}

const subsidiaries = [
  {
    key: "pp",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/logos/plaintiffpilot-wordmark.png" alt="PlaintiffPilot" width={434} height={88} loading="lazy" className="h-9 w-auto" />
    ),
    role: "AI intake engine",
    desc: "The tech and workflows behind every lead we touch. It answers a new lead in under a minute, chases it for 30 days, texts every old lead in your CRM in your firm's name, and hands your intake team a booked consult with the full conversation.",
    points: [
      "Recovers revenue from poor intake and dead leads",
      "Trained on personal injury, tuned to your scripts, states and case types",
      "Plugs into Litify, Salesforce, Filevine, Clio, HubSpot and GoHighLevel",
    ],
    href: PP_URL,
    label: "plaintiffpilot.com",
  },
  {
    key: "mva",
    logo: <MvaMark />,
    role: "Organic lead flow engine",
    desc: "Our bilingual consumer property for accident victims. People land there researching what their claim is worth, use the settlement estimator, and get matched with a firm that fits their case. It is the organic source behind our exclusive leads.",
    points: [
      "State guides, injury breakdowns and city pages in English and Spanish",
      "Quiz-based intake, OTP phone verification, TrustedForm certification",
      "Matches each injured person with one firm. Not a list we buy, a property we run",
    ],
    href: MVA_URL,
    label: "mvacompensation.com",
  },
];

export function Subsidiaries() {
  return (
    <section id="tech" className="py-14 lg:py-20 bg-surface-raised scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
          Our own tech
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Two subsidiaries. Built by us, run by us.
        </h2>
        <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
          GTM Partner LLC does not rent a stack. The AI that works your leads
          and the property that generates them are both ours.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {subsidiaries.map((s) => (
            <div key={s.key} className="card flex flex-col !border-brand/20">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                {s.logo}
                <span className="px-2 py-1 rounded text-[10px] font-semibold tracking-[0.12em] uppercase bg-brand/10 border border-brand/30 text-brand">
                  {s.role}
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="text-brand mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-sm text-text-secondary">{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
              >
                {s.label}
                <ExternalIcon />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-text-muted">
          PlaintiffPilot and MVA Compensation are subsidiaries of GTM Partner LLC.
        </p>
      </div>
    </section>
  );
}
