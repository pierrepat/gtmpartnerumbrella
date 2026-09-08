import { LogoGrid } from "@/components/logo-grid";
import { FAQ } from "@/components/faq";
import { Funnel } from "@/components/funnel";
import { SmsDemo } from "@/components/sms-demo";
import { LeakyFunnel } from "@/components/leaky-funnel";
import { TerritoryMap } from "@/components/territory-map";
import { TERRITORIES } from "@/lib/territories";

const openStates = TERRITORIES.filter((t) => t.open).length;

const heroStats = [
  { value: "Pay per signed case", label: "How Recover is priced" },
  { value: "One firm per state", label: "Scale leads are never shared" },
  { value: `${openStates} states`, label: "Still open for Scale" },
  { value: "Under 60 seconds", label: "Response to every new lead" },
];

const disqualifiers = [
  "Wrong or disconnected phone number",
  "Already represented by an attorney",
  "No injury occurred",
  "Outside your geographic area",
  "Duplicate lead",
  "Accident 60+ days ago with no treatment",
];

const steps = [
  {
    num: "01",
    title: "We look at what you already have",
    desc: "How many old leads are in your CRM, where your new ones come from, and how fast intake answers. You see where cases are being lost.",
  },
  {
    num: "02",
    title: "We start with Recover",
    desc: "It costs you nothing to find out what is in your database. We work those leads and you pay only when a case signs.",
  },
  {
    num: "03",
    title: "We turn on Scale when you want volume",
    desc: "Exclusive leads in your state, never shared with another firm. Recover keeps running underneath it, included.",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-6">
              AI Growth Partner for Personal Injury Firms
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-text-primary">
              Two ways to get more{" "}
              <span className="text-gradient">signed cases.</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Recover the leads you already paid for. Or take exclusive new
              ones in your state, yours alone. Take Scale and Recover comes
              with it, at no extra cost.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#pilot-form" className="btn-primary">
                Book a call &rarr;
              </a>
              <a href="#scale" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                Check your state
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-14 pt-10 border-t border-border-subtle">
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
          <p className="text-text-primary font-medium leading-relaxed max-w-2xl mb-12">
            We do not replace your intake team. We give them teammates that
            never get tired.
          </p>

          <LeakyFunnel />
        </div>
      </section>

      {/* ═══ THE TWO OFFERS ═══ */}
      <section id="offers" className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            What we do
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">
            Two offers. Pick either one.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Recover */}
            <div className="card !border-brand/25 flex flex-col">
              <span className="self-start px-2.5 py-1 rounded-full bg-brand/10 border border-brand/25 text-[10px] font-semibold uppercase tracking-wider text-brand mb-5">
                Start here
              </span>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Recover</h3>
              <p className="text-sm text-brand font-medium mb-4">
                Turn your dead database into signed cases.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                We work every old lead in your CRM with AI text and calls, in
                your firm&rsquo;s name. The ones still worth having get booked
                straight into your intake team&rsquo;s calendar.
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "You pay when a case signs, and not before",
                  "No setup fee, no software fee, no retainer",
                  "No new ad budget",
                  "Works on any database, any size",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-sm text-text-secondary">{i}</span>
                  </li>
                ))}
              </ul>
              <a href="#recover" className="btn-primary w-full justify-center">
                How Recover works
              </a>
            </div>

            {/* Scale */}
            <div className="card flex flex-col">
              <span className="self-start px-2.5 py-1 rounded-full bg-surface-overlay border border-border-default text-[10px] font-semibold uppercase tracking-wider text-text-secondary mb-5">
                Recover included
              </span>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Scale</h3>
              <p className="text-sm text-brand font-medium mb-4">
                Exclusive new leads in your state, yours alone.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                We run the ads, own the funnel, and qualify every lead before
                it reaches you. We hold one firm per state, and that
                exclusivity is written into the agreement.
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "Never resold or re-routed, in writing",
                  "One firm per state, and we hold the line",
                  "We fund the ad spend",
                  "Recover included at no extra cost",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-sm text-text-secondary">{i}</span>
                  </li>
                ))}
              </ul>
              <a href="#scale" className="btn-secondary w-full justify-center">
                Check your state
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RECOVER ═══ */}
      <section id="recover" className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                Offer one: Recover
              </p>
              <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-5">
                This is what your old leads get
              </h2>
              <p className="text-text-secondary leading-relaxed mb-5">
                A short text that reads like a person, not a campaign. It
                answers questions, checks a couple of details against your
                rules, and books the consult. Anyone who wants out is removed
                for good.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                We check accident dates against your state&rsquo;s statute of
                limitations first, so we only chase cases you can still sign.
                On a four month old database that matters more than it does on
                a fresh lead.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Names and firm are made up. The flow is the real one.
              </p>
            </div>
            <SmsDemo />
          </div>
        </div>
      </section>

      {/* ═══ SCALE ═══ */}
      <section id="scale" className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Offer two: Scale
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-5">
            Is your state still open?
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-10">
            Every lead we send is exclusive to your firm. We do not resell it
            and we do not re-route it, and that is in the agreement, in
            writing. Greyed out states already have a partner firm, so we are
            not taking another one there.
          </p>

          <TerritoryMap />

          <details className="mt-8 rounded-xl border border-border-subtle bg-surface-raised overflow-hidden group">
            <summary className="cursor-pointer list-none px-5 py-3.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between">
              <span>Terms and what we replace for free</span>
              <span className="text-text-muted text-lg group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-5 pb-5 pt-1 border-t border-border-subtle grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4 mt-3">Terms</p>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  {["Exclusive to one firm per state, in writing", "Never resold or re-routed", "Pilot cap on the first batch", "50% prepayment per batch", "7-day dispute window", "20% replacement cap", "Month to month"].map((t) => (
                    <li key={t} className="flex gap-3"><span className="text-brand">&#x2022;</span> {t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4 mt-3">Replaced free</p>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  {disqualifiers.map((d) => (
                    <li key={d} className="flex gap-3"><span className="text-brand">&#x2022;</span> {d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ═══ PROOF: REAL PERFORMANCE DATA ═══ */}
      <section className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Proof behind Scale
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Real campaigns. Real signed cases.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            Campaigns we run with our media buying partners. Screenshots are
            from live accounts, shared with permission.
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
                { value: "318", label: "Leads (1 week)" },
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


      {/* ═══ VERTICAL INTEGRATION ═══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            The engine behind Scale
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
                Book a call &rarr;
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

      {/* ═══ FAQ ═══ */}
      <FAQ />

      {/* ═══ PILOT FORM ═══ */}
      <section id="pilot-form" className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Get started</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Book a call
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Fifteen minutes on the phone tells us whether there is money
                sitting in your CRM. If there is, we will show you exactly how
                much and what it would take to go get it.
              </p>

              <div className="space-y-4">
                {[
                  "We look at your lead sources and your intake response times",
                  "We tell you how many old leads are still reachable",
                  "You see what Revive would do with them, and what it pays",
                  "You decide. There is nothing to install.",
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
            {/* TODO(Pierre): the pilot form never had a working endpoint, so this
                books straight into Cal.com instead. Restore <PilotForm /> once a
                real webhook exists, or wire it to Netlify Forms. */}
            <div className="card !border-brand/25 flex flex-col">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                Book a call
              </p>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                30 minutes, and you will know
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Bring a rough number for how many old leads are sitting in your
                CRM. We will tell you how many are likely still reachable, what
                Revive would do with them, and what it would pay out. If there
                is nothing there, we will say so.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "No prep needed",
                  "No new ad budget to start",
                  "You confirm every signed case before we invoice",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">&#10003;</span>
                    <span className="text-sm text-text-secondary">{i}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/gtmpartner/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Pick a time &rarr;
              </a>
              <p className="text-xs text-text-muted text-center mt-4">
                Or email{" "}
                <a href="mailto:pierre@gtmpartner.ai" className="text-brand hover:text-brand-light transition-colors">
                  pierre@gtmpartner.ai
                </a>
              </p>
            </div>
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
            Book a call &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
