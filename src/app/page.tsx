import { LogoGrid } from "@/components/logo-grid";
import { PilotForm } from "@/components/pilot-form";
import { FAQ } from "@/components/faq";
import { Funnel } from "@/components/funnel";
import { SmsDemo } from "@/components/sms-demo";

const icon = (path: string) => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const icons = {
  recover: icon("M16.023 9.348h4.992V4.356M2.985 19.644v-4.992h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"),
  capture: icon("M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"),
  convert: icon("M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"),
  scale: icon("M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"),
};

const heroStats = [
  { value: "$5M+", label: "Monthly ad spend managed" },
  { value: "2,500+", label: "Leads delivered monthly" },
  { value: "15", label: "Partner law firms" },
  { value: "<60s", label: "Avg delivery time" },
];

const painPoints = [
  {
    problem: "Old leads die in your CRM",
    detail: "Every firm has thousands of past inquiries. Called twice, then forgotten. Some of them still have a case.",
    solution: "AI works your old database again. No new ad spend.",
  },
  {
    problem: "Most visitors never call",
    detail: "You pay for the click. They read two pages and leave. That traffic is already paid for.",
    solution: "AI recovers the visitors, dropped forms, and missed calls.",
  },
  {
    problem: "Slow follow-up loses cases",
    detail: "The first firm to answer usually signs the case. Nights and weekends are when they get away.",
    solution: "AI answers in seconds, day or night, and books the consult.",
  },
  {
    problem: "You can't see what a case costs",
    detail: "Vendors report leads. Your CRM reports retainers. Nobody connects the two.",
    solution: "One view, from first click to signed retainer.",
  },
];

const pillars = [
  {
    num: "01",
    name: "Recover",
    glyph: icons.recover,
    tagline: "Win back the cases already in your system.",
    desc: "Every firm has thousands of old leads that never signed. People who called once, no-showed a consult, or got chased for two days and written off. Most were not bad cases. Intake got busy and nobody followed up again. AI wakes that database up by email and SMS, screens against your criteria, and hands the live ones back to your intake. No new ad spend. You pay when a case signs.",
    note: "We check accident dates against your state's statute of limitations, so we only chase cases you can still sign.",
  },
  {
    num: "02",
    name: "Capture",
    glyph: icons.capture,
    tagline: "Stop leaking the demand you already pay for.",
    desc: "You already pay for traffic. SEO, referrals, LSAs, TV, your current ads. Most of those people never become a case. They leave without filling the form, they call after hours, or they start an intake and quit halfway. AI sits over that traffic. It recovers abandoned forms, texts back missed calls, and follows up on half-finished inquiries.",
    note: "It does not touch your SEO or your ad vendors. It makes what they already produce convert.",
  },
  {
    num: "03",
    name: "Convert",
    glyph: icons.convert,
    tagline: "Turn more inquiries into signed retainers.",
    desc: "This is where most firms lose the most cases. A good case comes in at 9pm on a Saturday, nobody calls until Monday, and it is gone to the firm that answered first. Studies put the loss at 40 to 60% in the first half hour. AI answers in seconds, from any source, asks your two questions, books the consult, and chases no-shows so people actually turn up.",
    note: "Your team still does the legal judgment and signs the client. The conversation just starts instantly and arrives warm.",
  },
  {
    num: "04",
    name: "Scale",
    glyph: icons.scale,
    tagline: "Add new demand once the leaks are sealed.",
    desc: "We only turn on new demand after the first three are working, so you are not pouring new leads into a leaky bucket. Meta and Google ads, retargeting your site visitors, and campaigns aimed at the case types you actually want. Not just the cheapest ones. Because intake and follow-up are already tight, each new lead converts better and your cost per signed case stays low.",
    note: "Pay-per-lead lives here too, if you want it. One option inside the system, not the whole relationship.",
  },
];

const comparisonRows = [
  { feature: "Scope", them: "Leads only", us: "Your whole case system" },
  { feature: "Your old leads", them: "Not their problem", us: "AI works them again" },
  { feature: "Speed to lead", them: "You handle it", us: "AI answers in seconds" },
  { feature: "Visibility", them: "Lead counts", us: "Click to signed retainer" },
  { feature: "Ad spend", them: "You fund it", us: "We fund it" },
  { feature: "You pay for", them: "Leads", us: "Results" },
  { feature: "Relationship", them: "Vendor", us: "Partner on every source" },
];

const steps = [
  {
    num: "01",
    title: "We map where cases leak",
    desc: "We look at your traffic, your old leads, how fast intake responds, and what happens after a consult is booked. You see where cases are being lost.",
  },
  {
    num: "02",
    title: "We start with recovery",
    desc: "AI works the leads already in your database. It screens against your criteria and books consults. No new ad budget. You pay when a case signs.",
  },
  {
    num: "03",
    title: "We fix the next bottleneck",
    desc: "Then capture, then intake speed, then new demand. We work in the order of what is costing you the most.",
  },
];

const disqualifiers = [
  "Wrong or disconnected phone number",
  "Already represented by an attorney",
  "No injury occurred",
  "Outside your geographic area",
  "Duplicate lead",
  "Accident 60+ days ago with no treatment",
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-6">
              For Personal Injury Law Firms
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-text-primary">
              AI Growth Partner for{" "}
              <span className="text-gradient">Modern Law Firms</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              We turn the leads you already have into signed cases. Then we go
              get you more.
            </p>
            <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-2xl">
              Lead reactivation, AI intake, paid advertising, and pay-per-lead.
              One system, measured on signed cases.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pilot-form" className="btn-primary">
                Book a Growth Assessment &rarr;
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See how it works
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-20 pt-10 border-t border-border-subtle">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl stat-value">{s.value}</div>
                <div className="mt-1.5 text-xs text-text-muted tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOGO MARQUEE ═══ */}
      <LogoGrid title="The team behind growth systems for 50+ companies, now building AI for law firms" />

      {/* ═══ PAIN POINTS ═══ */}
      <section className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="reveal text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Sound familiar?
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Most firms lose cases they already paid for
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            Getting someone to raise their hand is the expensive part. Most
            firms do that well, then lose the case before the retainer.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.problem} className="card">
                <h3 className="text-base font-semibold text-red-400 mb-2">
                  {p.problem}
                </h3>
                <p className="text-sm text-text-muted mb-4">{p.detail}</p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-sm text-text-primary font-medium">
                    <span className="text-brand mr-2">&#10003;</span>
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE SYSTEM ═══ */}
      <section id="the-system" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            The system
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Four parts. One system.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            We run your case acquisition end to end. The order matters. We
            start with the value already sitting in your firm, then add new
            demand once the leaks are sealed.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.name} className="card">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                    {p.glyph}
                  </span>
                  <span className="text-2xl font-bold stat-value">{p.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">{p.name}</h3>
                <p className="text-sm font-medium text-brand mb-3">{p.tagline}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <p className="text-xs text-text-muted leading-relaxed">{p.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive SMS demo */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mt-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                Recover in action
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                This is what your old leads get
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A short text that reads like a person, not a campaign. Tap the
                replies to see how it handles each one, including someone who
                wants out.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Names and firm are made up. The flow is the real one.
              </p>
            </div>
            <SmsDemo />
          </div>

          <p className="text-text-secondary leading-relaxed max-w-2xl mt-16">
            One system that lifts the cases from every source, not just the
            ones we generate.
          </p>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            The difference
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">
            A lead vendor vs. a growth partner
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl text-sm">
              <thead>
                <tr className="border-b border-border-default">
                  <th className="text-left py-4 pr-8 font-medium text-text-muted text-xs uppercase tracking-wider w-1/3"></th>
                  <th className="text-left py-4 pr-8 font-medium text-red-400/70 text-xs uppercase tracking-wider w-1/3">Lead Vendors</th>
                  <th className="text-left py-4 font-medium text-brand text-xs uppercase tracking-wider w-1/3">GTM Partner</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-border-subtle">
                    <td className="py-4 pr-8 font-medium text-text-primary">{row.feature}</td>
                    <td className="py-4 pr-8 text-text-muted">{row.them}</td>
                    <td className="py-4 font-medium text-text-primary">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ WHO THIS IS FOR ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Fit check
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">
            Is this right for your firm?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card !border-brand/20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                <span className="text-xs font-semibold text-brand uppercase tracking-wider">Built for</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Firms with existing traffic, an old lead database, and an intake team",
                  "Partners who want more signed cases from what they already pay for",
                  "Firms who want one partner across every source",
                  "Firms who want to see cost per signed case, not cost per lead",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">&#10003;</span>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#pilot-form" className="btn-primary w-full justify-center mt-8">
                Book a Growth Assessment &rarr;
              </a>
            </div>

            <div className="card">
              <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Not for</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Firms shopping for the cheapest leads",
                  "Firms with no intake process or CRM",
                  "Firms that can't follow up on a booked consult",
                  "Mass tort or class action campaigns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">&#10005;</span>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#pilot-form" className="btn-secondary w-full justify-center mt-8">
                Not sure? Let&rsquo;s talk &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            How it works
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-16">
            How a partnership starts
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="card group">
                <span className="text-3xl font-bold stat-value mb-4 block">{step.num}</span>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VERTICAL INTEGRATION ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Our infrastructure
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            We build the stack. We don&rsquo;t resell one.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            The AI, the traffic, and the qualification layer are ours. So we
            can fix what is broken in your funnel instead of handing you a
            file.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-5">
                <img src="/logos/meta.png" alt="Meta" className="w-7 h-7 rounded" />
                <img src="/logos/google.png" alt="Google" className="w-7 h-7 rounded" />
                <img src="/logos/youtube.png" alt="YouTube" className="w-7 h-7 rounded" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Paid Traffic</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Meta, Google, and YouTube campaigns, managed and funded by us.
                $5M+ a month in managed ad spend.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Owned Qualification Funnel</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Quiz-based MVA qualification, bilingual, OTP phone-verified,
                TrustedForm certified.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Organic SEO Engine</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                A content engine that brings in leads at no extra cost. State
                pages, injury guides, settlement calculators.
              </p>
            </div>
          </div>

          {/* Owned property: MVACompensation */}
          <div className="reveal rounded-xl border border-brand/20 bg-surface-raised overflow-hidden mb-12">
            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3z" />
                    </svg>
                  </span>
                  <span className="text-lg font-bold tracking-tight">
                    <span className="text-text-primary">MVA</span>
                    <span className="text-brand">Compensation</span>
                  </span>
                  <span className="px-2 py-1 rounded text-[10px] font-semibold tracking-[0.12em] uppercase bg-brand/10 border border-brand/30 text-brand">
                    Owned &amp; operated
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4 leading-snug">
                  We own the property the demand comes from.
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  MVACompensation.com is our own consumer brand. Accident
                  victims land there researching what their claim is worth, get
                  plain answers about their options, and get matched with a firm
                  that fits their case. It is not a list we buy. It is a
                  property we run.
                </p>

                <ul className="space-y-3 text-sm text-text-secondary mb-8">
                  <li className="flex gap-3">
                    <span className="text-brand shrink-0">&#x2022;</span>
                    An organic engine, not rented traffic. State guides, injury
                    breakdowns, and city pages that rank for what accident
                    victims actually search.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand shrink-0">&#x2022;</span>
                    Bilingual end to end. Every section published in English and
                    Spanish, reaching claimants most firms never reach.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand shrink-0">&#x2022;</span>
                    Genuinely useful to the public. A settlement estimator and
                    plain-language guides, so people understand their claim
                    before they ever speak to a lawyer.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand shrink-0">&#x2022;</span>
                    Qualified before it reaches you. Quiz-based intake, OTP
                    phone verification, TrustedForm certification.
                  </li>
                </ul>

                <a
                  href="https://mvacompensation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
                >
                  Visit mvacompensation.com
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-border-subtle bg-surface p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-6">
                  The property today
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                  <div>
                    <p className="text-2xl font-bold text-brand mb-1">190+</p>
                    <p className="text-xs text-text-muted leading-snug">Pages published</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand mb-1">31</p>
                    <p className="text-xs text-text-muted leading-snug">States covered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand mb-1">25</p>
                    <p className="text-xs text-text-muted leading-snug">Cities covered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand mb-1">16</p>
                    <p className="text-xs text-text-muted leading-snug">Injury types</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand mb-1">EN / ES</p>
                    <p className="text-xs text-text-muted leading-snug">Fully bilingual</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand mb-1">Free</p>
                    <p className="text-xs text-text-muted leading-snug">Settlement estimator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
            <span className="px-3 py-2 sm:px-4 sm:py-2.5 bg-surface-raised border border-border-default rounded-lg text-text-secondary">Paid + Organic</span>
            <span className="text-text-muted">&rarr;</span>
            <span className="px-3 py-2 sm:px-4 sm:py-2.5 bg-surface-raised border border-border-default rounded-lg text-text-secondary">Owned Funnel</span>
            <span className="text-text-muted">&rarr;</span>
            <span className="px-3 py-2 sm:px-4 sm:py-2.5 bg-surface-raised border border-border-default rounded-lg text-text-secondary">Verified</span>
            <span className="text-text-muted">&rarr;</span>
            <span className="px-3 py-2 sm:px-4 sm:py-2.5 bg-brand/10 border border-brand/30 rounded-lg text-brand font-semibold">Your CRM</span>
          </div>
        </div>
      </section>

      {/* ═══ EXCLUSIVE VS SHARED ═══ */}
      <section className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                On the demand we generate
              </p>
              <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Exclusive traffic signs more cases
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Sell one lead to five firms and the prospect gets five calls.
                They pick the first one. Four firms paid for nothing. Every
                case we generate goes to one firm only.
              </p>
              <p className="text-text-secondary leading-relaxed">
                That means days to follow up instead of seconds. More trust.
                And a lower cost per signed case.
              </p>
            </div>
            <div className="space-y-6">
              <div className="card !border-brand/20">
                <div className="text-3xl font-bold stat-value mb-1">10-20%</div>
                <p className="text-sm text-text-secondary">Sign rate on exclusive leads</p>
              </div>
              <div className="card">
                <div className="text-3xl font-bold text-text-muted mb-1">1-5%</div>
                <p className="text-sm text-text-muted">Sign rate on shared leads (sold to 5+ firms)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROOF — REAL PERFORMANCE DATA ═══ */}
      <section className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Real data
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">
            Real campaigns. Real signed cases.
          </h2>

          {/* Google Ads Dashboard */}
          <div className="card mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Google Ads, February 2026</p>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              $368K spend. 2,354 conversions.
            </h3>
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
              {[
                { value: "$368K", label: "Monthly ad spend" },
                { value: "2,354", label: "Conversions" },
                { value: "$156", label: "Cost / conversion" },
                { value: "11.8M", label: "Impressions" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold stat-value">{s.value}</div>
                  <div className="text-xs text-text-muted">{s.label}</div>
                </div>
              ))}
            </div>
            <img src="/proof-google-ads.png" alt="Google Ads MVA campaign performance, February 2026" className="rounded-lg border border-border-subtle w-full" />
          </div>

          <div className="card mb-8">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">California PI Firm, Pilot Campaign</p>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  6 signed cases in 44 days
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Launched right after SB37, one of the biggest regulatory
                  changes in PI lead gen. Case quality held up in a tighter
                  market. Now scaling to 150+ leads a month.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {[
                    { value: "6", label: "Signed cases" },
                    { value: "44", label: "Days" },
                    { value: "$186", label: "Avg CPL" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-xl font-bold stat-value">{s.value}</div>
                      <div className="text-xs text-text-muted">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block w-80">
                <img src="/proof-ca-pilot.png" alt="California pilot campaign dashboard" className="rounded-lg border border-border-subtle w-full" />
              </div>
            </div>
          </div>

          <div className="card">
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Weekly Performance Snapshot</p>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              7 signed cases from one week of traffic
            </h3>
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
              {[
                { value: "7", label: "Signed cases" },
                { value: "$2,519", label: "Cost per signed case" },
                { value: "318", label: "Leads (1 week)" },
                { value: "$55", label: "Cost per lead" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold stat-value">{s.value}</div>
                  <div className="text-xs text-text-muted">{s.label}</div>
                </div>
              ))}
            </div>
            <img src="/proof-weekly-analytics.png" alt="Weekly analytics dashboard" className="rounded-lg border border-border-subtle w-full" />
          </div>
        </div>
      </section>

      {/* ═══ REPORTING / VISIBILITY ═══ */}
      <section id="reporting" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Reporting
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            See every dollar become a signed case.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            You get a live view of every stage, from traffic to signed
            retainer. No black box. You always know what a signed case really
            cost.
          </p>

          <Funnel />
        </div>
      </section>

      {/* ═══ WHY FIRMS STAY ═══ */}
      <section className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Partnership
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Why firms stay
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            We are a partner, not a vendor. We improve the leads from all your
            sources, not just ours.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Every source, not just ours</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Your referrals, your SEO, your other vendors. If a lead reaches
                your firm, our system works it.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-2">You keep your accounts</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Ad accounts, CRM, and lead data stay in your name. Nothing is
                held hostage if we part ways.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-2">We fix the next thing</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                When one thing improves, we go fix whatever is limiting you
                next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Pricing</p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            We fund the work. You pay for results.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            Start with a recovery pilot. It needs no new ad budget. We work the
            leads already in your database, and you pay when a case signs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "No New Ad Budget", desc: "Recovery uses the leads you already have." },
              { title: "Paid On Outcomes", desc: "On the recovery pilot, you pay when a case signs." },
              { title: "We Fund The Work", desc: "Our capital goes behind the build and the media." },
              { title: "Your Accounts, Your Data", desc: "Ad accounts, CRM, and lead data stay in your name." },
              { title: "Clear Terms Upfront", desc: "Scope, pricing, and reporting agreed before we launch." },
              { title: "One Partner", desc: "We improve the leads from all your channels, not just ours." },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Disqualifiers inline */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Pay-per-lead option: terms</p>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                {["CPL varies by state and case type", "Pilot cap on first engagement", "50% prepayment per batch", "7-day dispute window", "20% replacement cap", "Month-to-month"].map((t) => (
                  <li key={t} className="flex gap-3"><span className="text-brand">&#x2022;</span> {t}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Disqualifiers (free replacement)</p>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                {disqualifiers.map((d) => (
                  <li key={d} className="flex gap-3"><span className="text-brand">&#x2022;</span> {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CREDIBILITY LINE ═══ */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-text-muted">
            From the team that generated{" "}
            <span className="text-text-secondary font-semibold">$15M+ in pipeline</span>{" "}
            for{" "}
            <span className="text-text-secondary font-semibold">50+ B2B companies</span>.{" "}
            <a href="/outbound" className="text-brand hover:text-brand-light transition-colors">
              See case studies &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ />

      {/* ═══ PILOT FORM ═══ */}
      <section id="pilot-form" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Get started</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Book a Growth Assessment</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Tell us about your firm. We will show you where cases are
                leaking and what a recovery pilot looks like for your database.
              </p>

              <div className="space-y-4">
                {[
                  "We review your firm within 24 hours",
                  "We map your funnel from first click to signed retainer",
                  "You get a recovery plan for the leads you already have",
                  "No new ad budget to start",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <p className="text-sm text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <PilotForm />
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-16 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Ready to turn more leads into signed cases?
          </h2>
          <p className="text-text-secondary mb-8">
            We fund the work. You pay for results.
          </p>
          <a href="#pilot-form" className="btn-primary">
            Book a Growth Assessment &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
