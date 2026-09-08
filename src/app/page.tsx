import { LogoGrid } from "@/components/logo-grid";
import { PilotForm } from "@/components/pilot-form";
import { FAQ } from "@/components/faq";
import { Funnel } from "@/components/funnel";
import { SmsDemo } from "@/components/sms-demo";
import { LeakyFunnel } from "@/components/leaky-funnel";

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
  { value: "Pay per signed case", label: "Recover pricing" },
  { value: "Under 60 seconds", label: "Response to every new lead" },
  { value: "$5M+ a month", label: "Ad spend run with our media buying partners" },
  { value: "$15M+", label: "Pipeline generated for 50+ B2B companies" },
];

const pillars = [
  {
    num: "01",
    name: "Recover",
    agent: "the Revive agent",
    glyph: icons.recover,
    badge: "Where most firms start",
    desc: "Revive works every old lead in your CRM, newest first. It texts and calls in your firm's name, in a voice you approve, and books the consult when someone is ready. Your team gets the conversation and signs the case.",
    note: "Pay per signed case. No setup fee. No new ad budget.",
  },
  {
    num: "02",
    name: "Capture",
    agent: "the Catch agent",
    glyph: icons.capture,
    desc: "Catch recovers the people who reached out and slipped away: dropped forms, missed calls, visitors who left without calling. It does not touch your SEO or your ad vendors.",
  },
  {
    num: "03",
    name: "Convert",
    agent: "the Respond agent",
    glyph: icons.convert,
    desc: "Respond answers every new lead in under a minute, day or night, and follows up for five days if they go quiet. The first firm to respond usually signs the case. That firm is now you.",
  },
  {
    num: "04",
    name: "Scale",
    agent: "the Fuel system",
    glyph: icons.scale,
    badge: "Includes Revive",
    desc: "Once the leaks are sealed, we add new demand. Meta and Google campaigns run through our own bilingual, phone-verified funnel. Leads are exclusive to your firm. Revive is included, and Respond works every lead we send, so you never pay for one that gets ignored.",
  },
];

const comparisonRows = [
  { feature: "Your intake team", them: "Left to chase alone", us: "Backed by agents that never stop" },
  { feature: "Scope", them: "Leads only", us: "Your whole case system" },
  { feature: "Your old leads", them: "Not their problem", us: "Revive works them again" },
  { feature: "Speed to lead", them: "You handle it", us: "Respond answers in seconds" },
  { feature: "Visibility", them: "Lead counts", us: "Click to signed case" },
  { feature: "Ad spend", them: "You fund it", us: "We fund it" },
  { feature: "You pay for", them: "Leads", us: "Signed cases" },
  { feature: "Relationship", them: "Vendor", us: "Partner on every source" },
];

const steps = [
  {
    num: "01",
    title: "We map where cases leak",
    desc: "We look at your traffic, your old leads, how fast intake answers, and what happens after a consult is booked. You see where cases are being lost.",
  },
  {
    num: "02",
    title: "We start with Revive",
    desc: "Revive works the leads already in your CRM. It screens them against your rules and books consults. No new ad budget. You pay when a case signs.",
  },
  {
    num: "03",
    title: "We seal the next leak",
    desc: "Then Catch, then Respond, then new demand. We work in the order of what is costing you the most.",
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
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-6">
                AI Growth Partner for Personal Injury Firms
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-text-primary">
                We turn the leads you already have into{" "}
                <span className="text-gradient">signed cases.</span>
              </h1>
              <p className="mt-5 text-xl text-text-secondary font-medium">
                Then we go get you more.
              </p>
              <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-xl">
                AI agents that work your old leads, answer new ones in seconds,
                and follow up until the case is signed. You pay per signed case.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#pilot-form" className="btn-primary">
                  See what is in your database &rarr;
                </a>
                <a href="#how-it-works" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                  See how it works
                </a>
              </div>
            </div>

            <SmsDemo />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 lg:mt-20 pt-10 border-t border-border-subtle">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-lg sm:text-xl font-bold text-brand leading-snug">{s.value}</div>
                <div className="mt-2 text-[11px] text-text-muted leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <LogoGrid />

      {/* ═══ THE PROBLEM ═══ */}
      <section className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="reveal text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            The problem
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Your intake team is human.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-6">
            Call your own intake line one afternoon and listen. Some days they
            are sharp. Some days they are tired. Every day there are more leads
            than hours. A lead that does not answer twice gets a note and drops
            to the bottom of the pile. A lead that comes in at 9pm waits until
            morning. A lead from four months ago is not called at all. You
            already paid for every one of them.
          </p>
          <p className="text-text-primary font-medium leading-relaxed max-w-2xl mb-14">
            We do not replace your intake team. We give them teammates that
            never get tired.
          </p>

          <LeakyFunnel />
        </div>
      </section>

      {/* ═══ THE SYSTEM ═══ */}
      <section id="the-system" className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            The system
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Four parts. One system.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            Each part is an agent with one job. Most firms start with Revive.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.name} className="card">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                      {p.glyph}
                    </span>
                    <span className="text-2xl font-bold stat-value">{p.num}</span>
                  </div>
                  {p.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-brand/10 border border-brand/25 text-[10px] font-semibold uppercase tracking-wider text-brand">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {p.name}, <span className="text-brand font-medium">{p.agent}</span>
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-3">{p.desc}</p>
                {p.note && (
                  <div className="mt-4 pt-4 border-t border-border-subtle">
                    <p className="text-xs text-text-muted leading-relaxed">{p.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-text-secondary leading-relaxed max-w-3xl mt-12">
            Start with Revive. Add Respond when you are ready. Scale when the
            leaks are sealed. Or take the full suite and have one partner for
            all of it.
          </p>

        </div>
      </section>

      {/* ═══ PROOF: REAL PERFORMANCE DATA ═══ */}
      <section className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Campaigns we run with our media buying partners
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Real campaigns. Real signed cases.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            These are Scale engagements. Screenshots are from live accounts,
            shared with permission.
          </p>

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


      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="py-14 lg:py-20">
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
      <section className="py-14 lg:py-20">
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
                  "Firms with old leads sitting in a CRM",
                  "Firms with an intake team that is already busy",
                  "Firms that want one partner, not five vendors",
                  "Firms that want to know what a signed case costs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">&#10003;</span>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#pilot-form" className="btn-primary w-full justify-center mt-8">
                See what is in your database &rarr;
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
                  "Firms that cannot call a booked consult",
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
      <section id="how-it-works" className="py-14 lg:py-20 bg-surface-raised">
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

      {/* ═══ REPORTING / VISIBILITY ═══ */}
      <section id="reporting" className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Reporting
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            See every lead become a signed case.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            You get a live view of every stage, from traffic to signed case. No
            black box. You always know what a signed case really cost.
          </p>

          <Funnel />
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Pricing</p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            You pay for outcomes.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            Start where it costs you the least to find out if this works. Most
            firms start with Revive.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card !border-brand/25 flex flex-col">
              <span className="inline-block self-start px-2.5 py-1 rounded-full bg-brand/10 border border-brand/25 text-[10px] font-semibold uppercase tracking-wider text-brand mb-5">
                Where most firms start
              </span>
              <h3 className="text-xl font-bold text-text-primary mb-1">Revive</h3>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Recover</p>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                Pay per signed case. No setup fee. No software fee. No retainer.
                No new ad budget. You confirm every case before we invoice.
              </p>
              <a href="#pilot-form" className="btn-primary w-full justify-center mt-6">
                See what is in your database
              </a>
            </div>

            <div className="card flex flex-col">
              <h3 className="text-xl font-bold text-text-primary mb-1 mt-[38px]">Respond + Catch</h3>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Convert and Capture</p>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                Flat monthly fee once Revive has proven itself. Cancel any time.
              </p>
              <a href="/contact" className="btn-secondary w-full justify-center mt-6">
                Talk to us
              </a>
            </div>

            <div className="card flex flex-col">
              <h3 className="text-xl font-bold text-text-primary mb-1 mt-[38px]">Fuel</h3>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Scale</p>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                Pay per qualified lead. Exclusive to your firm in your market.
                Revive included. Every lead worked by Respond.
              </p>
              <a href="/contact" className="btn-secondary w-full justify-center mt-6">
                Talk to us
              </a>
            </div>
          </div>

          <details className="mt-8 rounded-xl border border-border-subtle bg-surface overflow-hidden group">
            <summary className="cursor-pointer list-none px-6 py-4 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between">
              <span>Fuel terms and disqualifiers</span>
              <span className="text-text-muted text-lg group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-6 pt-2 border-t border-border-subtle grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Terms</p>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  {["CPL varies by state and case type", "Pilot cap on first engagement", "50% prepayment per batch", "7-day dispute window", "20% replacement cap", "Month to month"].map((t) => (
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
          </details>

          <p className="text-sm text-text-muted mt-10">
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

      {/* ═══ FOR FIRMS READY TO SCALE ═══ */}
      <div className="pt-20 lg:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            For firms ready to Scale
          </p>
        </div>
      </div>
      {/* ═══ VERTICAL INTEGRATION ═══ */}
      <section className="py-14 lg:py-20">
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
                $5M+ a month in ad spend run with our media buying partners.
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


      {/* ═══ FAQ ═══ */}
      <FAQ />

      {/* ═══ PILOT FORM ═══ */}
      <section id="pilot-form" className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Get started</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                See what is in your database
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Tell us about your firm. We will show you how many leads are
                sitting in your CRM, how many are still reachable, and what
                Revive would do with them.
              </p>

              <div className="space-y-4">
                {[
                  "We review your firm within 24 hours",
                  "We tell you how many old leads are still reachable",
                  "You see what Revive would do with them",
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
            Ready to sign the cases you already paid for?
          </h2>
          <p className="text-text-secondary mb-8">
            Start with Revive. No new ad budget.
          </p>
          <a href="#pilot-form" className="btn-primary">
            See what is in your database &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
