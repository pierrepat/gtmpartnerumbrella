import type { Metadata } from "next";
import { LogoGrid } from "@/components/logo-grid";

export const metadata: Metadata = {
  title: "Outbound & RevOps Systems for B2B SaaS",
  description:
    "AI-driven outbound and RevOps systems. 50+ B2B companies. $15M+ in attributed revenue. Signal-based prospecting, email infrastructure, and CRM integration.",
};

const caseStudies = [
  {
    company: "Worldpay (Fortune 500)",
    industry: "B2B Payments & Financial Services",
    logo: "/logos/worldpay.png",
    challenge: "110,000+ CRM records across multiple HubSpot instances with outdated data. 35% duplication rate.",
    solution: '"The GTM Data Engine" — custom CRM enrichment and data hygiene bridging Clay and HubSpot with enterprise compliance.',
    results: [
      { metric: "Records Cleaned", value: "110K+" },
      { metric: "Duplicates Removed", value: "35%" },
      { metric: "Weekly Time Saved", value: "10+ hrs/SDR" },
    ],
  },
  {
    company: "Electric Era",
    industry: "EV Charging Infrastructure",
    logo: "/logos/electric-era.png",
    challenge: "Needed a scalable outbound system to reach enterprise buyers in the EV charging space. High-ticket sales required precise targeting at scale.",
    solution: "Built a complete signal-based outbound engine: multi-domain email, LinkedIn, Clay-powered enrichment, and real-time Slack alerts for buying intent.",
    results: [
      { metric: "Pipeline Created", value: "$53.5M" },
      { metric: "Qualified Opps", value: "107" },
      { metric: "Reply Rate", value: "11.9%" },
      { metric: "Positive Replies", value: "66.5%" },
      { metric: "Average ACV", value: "$500K" },
    ],
    screenshot: "/electricera-analytics.png",
  },
  {
    company: "Cloud Capital",
    industry: "B2B SaaS",
    logo: "/logos/cloud-capital.jpg",
    challenge: "Needed to reach high-value decision makers at scale without hiring additional SDRs.",
    solution: "Built three intelligent Clay automation workflows: funding triggers, new-role targeting, and complete CRM enrichment — replacing 80% of SDR workload.",
    results: [
      { metric: "SDR Workload Automated", value: "80%" },
      { metric: "Monthly Savings", value: "$105K" },
      { metric: "CRM Enrichment", value: "100%" },
    ],
  },
  {
    company: "CustomLab by Outway",
    industry: "B2B Custom Merchandise",
    logo: "/logos/customlab.png",
    challenge: "Needed to break into the competitive university partnership market.",
    solution: "Targeted outbound system for procurement decision-makers at 500+ universities with automated portfolio sharing.",
    results: [
      { metric: "Pipeline Generated", value: "$90K+" },
      { metric: "Long-Term Clients", value: "5" },
      { metric: "ROI Multiple", value: "5x" },
    ],
  },
  {
    company: "MultiPasss",
    industry: "Product Design Agency",
    logo: "/logos/multipasss.png",
    challenge: "Strong reputation but lacked a repeatable outbound growth engine.",
    solution: "4-month engagement: cold TAM engine, LinkedIn re-engagement via Trigify, and website de-anonymization via LeadPipe.",
    results: [
      { metric: "Qualified Leads", value: "56" },
      { metric: "Cold Reply Rate", value: "5.8%" },
      { metric: "Enterprise Deal", value: "1" },
    ],
  },
  {
    company: "7Eagle",
    industry: "Staffing & Recruiting",
    logo: "/logos/7eagle.png",
    challenge: "Manual prospecting prevented the team from reaching decision-makers when hiring signals appeared.",
    solution: "Real-time hiring activity tracking across thousands of companies with instant CRM/ATS push and automated notifications.",
    results: [
      { metric: "Qualified Leads", value: "2.5x" },
      { metric: "Placement Growth", value: "120%" },
      { metric: "Response Time", value: "-70%" },
    ],
  },
];

const capabilities = [
  { title: "Signal-Based Prospecting", desc: "Clay-powered enrichment with custom buying signals" },
  { title: "Email Infrastructure", desc: "Multi-domain warmup, SPF/DKIM/DMARC, deliverability monitoring" },
  { title: "Outbound Execution", desc: "Instantly, HeyReach, LinkedIn — multi-channel at scale" },
  { title: "RevOps Automation", desc: "n8n, Supabase, GHL, Claude Code — custom workflows" },
  { title: "CRM Integration", desc: "Pipeline from first touch to closed deal, full attribution" },
  { title: "Ownership Transfer", desc: "SOPs, training, and documentation — you own everything" },
];

export default function OutboundPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-6">
              Outbound & RevOps for B2B SaaS
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-text-primary">
              We build systems that turn interest into{" "}
              <span className="text-gradient">pipeline</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              AI-driven outbound infrastructure, signal-based prospecting, and
              RevOps automation. 50+ B2B companies. $15M+ in directly attributed
              revenue. You own everything we build.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://cal.com/gtmpartner/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book a strategy call &rarr;
              </a>
              <a href="#case-studies" className="btn-secondary">
                See case studies
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border-subtle">
            {[
              { value: "50+", label: "B2B companies" },
              { value: "$15M+", label: "Attributed revenue" },
              { value: "50M+", label: "AI-personalized emails" },
              { value: "12 mo", label: "Avg retention" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl stat-value">{s.value}</div>
                <div className="mt-1.5 text-xs text-text-muted tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoGrid title="Trusted by 50+ B2B companies" />

      {/* Capabilities */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">What we build</p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">Full-stack outbound infrastructure</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{cap.title}</h3>
                <p className="text-sm text-text-secondary">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="card mt-8 !border-brand/20">
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">You own everything we build.</span>{" "}
              The domains, the sequences, the data, the automations. We&rsquo;re not a SaaS tool you rent — we build infrastructure you control.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Case Studies</p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">Real results from real companies</h2>

          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="card">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {cs.logo && (
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center p-1.5">
                          <img src={cs.logo} alt="" className="w-full h-full object-contain" />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-text-primary">{cs.company}</h3>
                    </div>
                    <p className="text-xs text-text-muted">{cs.industry}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Challenge</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Solution</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  {cs.results.map((r) => (
                    <div key={r.metric}>
                      <div className="text-xl font-bold stat-value">{r.value}</div>
                      <div className="text-xs text-text-muted">{r.metric}</div>
                    </div>
                  ))}
                </div>

                {cs.screenshot && (
                  <div className="mt-8">
                    <img src={cs.screenshot} alt={`${cs.company} results`} className="rounded-lg border border-border-subtle w-full max-w-xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clay Social Proof */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center mb-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                Trusted Clay Partner
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                320M+ automations. 5M+ credits managed.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                This credential was sent directly from Clay to our CEO as a
                recognized platform partner. We&rsquo;re one of the most active
                Clay users globally — building prospecting, enrichment, and
                automation systems at scale.
              </p>
              <div className="flex items-center gap-4">
                <img src="/clay-creator-badge.png" alt="Clay Creator" className="h-14 w-auto" />
                <img src="/clay-expert-badge.png" alt="Clay Expert" className="h-14 w-auto" />
              </div>
            </div>
            <div>
              <img src="/clay-social-proof.png" alt="Clay platform partner — 316M+ GTM tasks automated" className="w-full rounded-xl" />
            </div>
          </div>

          {/* YouTube */}
          <div className="divider-glow mb-12" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                YouTube
              </p>
              <h2 className="reveal text-2xl font-bold text-text-primary mb-4">
                Watch us break down GTM workflows
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our CEO publishes go-to-market workflows, Clay tutorials, and
                outbound system breakdowns on YouTube. See the exact systems and
                automations we build for clients.
              </p>
              <a
                href="https://www.youtube.com/@gtmpartner"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Watch on YouTube &rarr;
              </a>
            </div>
            <a
              href="https://www.youtube.com/@gtmpartner"
              target="_blank"
              rel="noopener noreferrer"
              className="card !border-brand/15 hover:!border-brand/30 group block text-center"
            >
              <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold text-text-primary group-hover:text-brand transition-colors mb-1">
                @gtmpartner
              </p>
              <p className="text-sm text-text-muted">
                Go-to-market workflows &amp; Clay tutorials
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">How we work</p>
            <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">Direct, transparent, scoped</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Scoped engagements, no long-term retainers required. Direct
              relationship with the CEO. 4-month initial agreement — month one is
              setup, three months of execution. After that, month-to-month.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Full transparency — live dashboards with deliverability, engagement,
              pipeline, and infrastructure health metrics.
            </p>
            <a href="https://cal.com/gtmpartner/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a scoping call &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
