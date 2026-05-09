import { LogoGrid } from "@/components/logo-grid";
import { PilotForm } from "@/components/pilot-form";
import { FAQ } from "@/components/faq";

const heroStats = [
  { value: "$5M+", label: "Monthly ad spend managed" },
  { value: "2,500+", label: "Leads delivered monthly" },
  { value: "15", label: "Partner law firms" },
  { value: "<60s", label: "Avg delivery time" },
];

const painPoints = [
  {
    problem: "Shared leads sold to 5+ firms",
    detail: "You're racing to call a lead that 4 other attorneys already contacted. By the time you reach them, they've already signed.",
    solution: "Every lead is 100% exclusive. Sold once. To your firm only.",
  },
  {
    problem: "You fund the ads and take all the risk",
    detail: "Agencies charge $5K-$15K/month retainers plus you fund ad spend. If the campaign underperforms, you still pay.",
    solution: "We fund 100% of ad spend. You pay a flat fee per qualified lead. If we can't deliver, we eat the cost.",
  },
  {
    problem: "Fake leads, wrong numbers, already represented",
    detail: "Half your leads are junk. Wrong numbers, people who never requested a lawyer, duplicates from last month.",
    solution: "Every lead is OTP phone-verified, TrustedForm-certified, and screened for injury, fault, and representation status.",
  },
  {
    problem: "No visibility into where leads come from",
    detail: "Your vendor won't tell you the source. You're buying from a black box that's probably reselling from another black box.",
    solution: "We own the funnel end-to-end. Paid traffic, landing pages, qualification, verification — all in-house.",
  },
];

const comparisonRows = [
  { feature: "Ad Spend", them: "You fund upfront", us: "We fund 100%" },
  { feature: "Setup Cost", them: "$10K–$50K+", us: "$0" },
  { feature: "Lead Exclusivity", them: "Shared with 3-5 firms", us: "100% exclusive" },
  { feature: "Verification", them: "Maybe email verified", us: "OTP phone + TrustedForm" },
  { feature: "Delivery Speed", them: "Batch email", us: "Real-time to CRM (<60s)" },
  { feature: "Contract", them: "6-12 month lock-in", us: "Month-to-month" },
  { feature: "Bad Lead Policy", them: "Fight for credits", us: "Free replacement, no questions" },
];

const steps = [
  {
    num: "01",
    title: "Tell us what cases you want",
    desc: "MVA, truck accidents, motorcycle, pedestrian — pick your case types. Set your state, injury severity, and any filters. We design a campaign around your criteria.",
  },
  {
    num: "02",
    title: "We build, fund & run everything",
    desc: "Our team builds landing pages, writes ad creative, launches campaigns across Meta, Google, and YouTube — and funds 100% of the ad spend. You don't touch a thing.",
  },
  {
    num: "03",
    title: "Qualified leads hit your CRM",
    desc: "Every lead is OTP phone-verified, screened for injury and fault, and delivered to your CRM in real-time. You only pay for leads that meet your agreed criteria.",
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
              Stop buying shared leads.{" "}
              <span className="text-gradient">Start signing cases.</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              We fund 100% of ad spend and deliver exclusive, OTP-verified MVA
              leads directly to your CRM. You pay a flat fee per qualified lead.
              If it doesn&rsquo;t meet your criteria, we replace it free.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pilot-form" className="btn-primary">
                Request a pilot &rarr;
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See how it works
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border-subtle">
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
      <LogoGrid title="The agency behind B2B growth for 50+ companies — now powering legal lead gen" />

      {/* ═══ PAIN POINTS ═══ */}
      <section className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="reveal text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Sound familiar?
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            The lead gen industry is broken
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            Most PI firms have been burned by lead vendors. Shared leads, fake
            numbers, retainers with no accountability. We built GTM Partner to
            fix every one of these problems.
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

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            The difference
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">
            Traditional lead vendors vs. GTM Partner
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl text-sm">
              <thead>
                <tr className="border-b border-border-default">
                  <th className="text-left py-4 pr-8 font-medium text-text-muted text-xs uppercase tracking-wider w-1/3"></th>
                  <th className="text-left py-4 pr-8 font-medium text-red-400/70 text-xs uppercase tracking-wider w-1/3">Other Vendors</th>
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
                  "PI firms spending $5K+/month on leads and tired of shared, low-quality inventory",
                  "Managing partners who want predictable case flow without managing ad campaigns",
                  "Firms scaling intake who need a partner, not another vendor to babysit",
                  "Solo practitioners and small firms competing against mega-firms like Morgan & Morgan",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">&#10003;</span>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#pilot-form" className="btn-primary w-full justify-center mt-8">
                Request a pilot &rarr;
              </a>
            </div>

            <div className="card">
              <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Not for</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Firms looking for the cheapest leads possible — we compete on quality, not price",
                  "Firms that can't respond to leads within 15 minutes of delivery",
                  "Firms looking for mass tort or class action leads",
                  "Firms without an intake process or CRM in place",
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
            Three steps to qualified cases
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
            We own the funnel. Not a reseller.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            Most pay-per-lead vendors are middlemen buying from ad networks and
            marking up. We own and operate every layer of the lead generation stack.
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
                Campaigns across Meta, Google, and YouTube — managed and funded
                entirely by us. $5M+/month in total managed ad spend.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Owned Qualification Funnel</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                mvacompensation.com — quiz-based MVA qualification. Bilingual.
                OTP phone-verified with Twilio. TrustedForm-certified.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Organic SEO Engine</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Content engine generating inbound leads at zero marginal cost.
                State-specific pages, injury guides, settlement calculators.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            <span className="px-4 py-2.5 bg-surface-raised border border-border-default rounded-lg text-text-secondary">Paid + Organic</span>
            <span className="text-text-muted">&rarr;</span>
            <span className="px-4 py-2.5 bg-surface-raised border border-border-default rounded-lg text-text-secondary">Owned Funnel</span>
            <span className="text-text-muted">&rarr;</span>
            <span className="px-4 py-2.5 bg-surface-raised border border-border-default rounded-lg text-text-secondary">OTP + TrustedForm</span>
            <span className="text-text-muted">&rarr;</span>
            <span className="px-4 py-2.5 bg-brand/10 border border-brand/30 rounded-lg text-brand font-semibold">Your CRM</span>
          </div>
        </div>
      </section>

      {/* ═══ EXCLUSIVE VS SHARED ═══ */}
      <section className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                Exclusive vs. Shared
              </p>
              <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Why exclusive leads convert 4x better
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                When a lead vendor sells the same lead to 5 firms, you&rsquo;re
                in a race to call within 60 seconds. The prospect gets 5 calls,
                picks the first one, and the other 4 firms paid for nothing.
              </p>
              <p className="text-text-secondary leading-relaxed">
                With exclusive leads, you have days — not seconds. No
                competition. Higher trust. Lower cost per signed case.
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
            The numbers don&rsquo;t lie
          </h2>

          <div className="card mb-8">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">California PI Firm — Pilot Campaign</p>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  6 signed cases in 44 days at $186 avg CPL
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Launched post-SB37 — one of the most disruptive regulatory
                  changes in PI lead gen. Despite a tightened market, the pilot
                  proved lead quality held up. Now scaling to 150+ leads/month.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { value: "6", label: "Signed cases" },
                    { value: "$186", label: "Avg CPL" },
                    { value: "44", label: "Days" },
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
              318 leads in one week — $55 CPL — 7 signed
            </h3>
            <div className="flex flex-wrap gap-6 mb-6">
              {[
                { value: "318", label: "Leads (1 week)" },
                { value: "$55", label: "Cost per lead" },
                { value: "7", label: "Sales" },
                { value: "$2,519", label: "Cost per sale" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold stat-value">{s.value}</div>
                  <div className="text-xs text-text-muted">{s.label}</div>
                </div>
              ))}
            </div>
            <img src="/proof-weekly-analytics.png" alt="Weekly analytics dashboard" className="rounded-lg border border-border-subtle w-full" />
          </div>

          {/* Google Ads Dashboard */}
          <div className="card mt-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Google Ads — February 2026</p>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              $368K ad spend — 2,354 conversions — $156 cost per conversion
            </h3>
            <div className="flex flex-wrap gap-6 mb-6">
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
            <img src="/proof-google-ads.png" alt="Google Ads MVA campaign performance — February 2026" className="rounded-lg border border-border-subtle w-full" />
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Pricing</p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Zero risk. We mean it.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            We fund campaigns with our own money. If a lead doesn&rsquo;t
            qualify, we replace it. No minimums. Cancel anytime.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Zero Ad Spend Risk", desc: "We put our money where our mouth is. Your firm spends $0 on ads." },
              { title: "Zero Setup Cost", desc: "No onboarding fee. No retainer. No minimum commitment." },
              { title: "Flat CPL Pricing", desc: "Pay per qualified lead. Pricing varies by state and case type." },
              { title: "Per Lead Engagement", desc: "No retainer handcuffs. Month-to-month. Pause or cancel anytime." },
              { title: "Free Replacements", desc: "Wrong number? Already represented? Replaced within 24-48 hours." },
              { title: "15-Min Intake SLA", desc: "Real-time delivery. We recommend 15-minute response for best conversion." },
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
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Terms</p>
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

      {/* ═══ ADDITIONAL SERVICES ═══ */}
      <section id="services" className="py-20 lg:py-28 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Additional services for law firms
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">
            Beyond leads
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card !border-brand/15 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-semibold uppercase tracking-wider">Free Redesign</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-3">Website Design</p>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Free website redesign for your firm
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                We redesign your law firm&rsquo;s website — modern,
                conversion-optimized, mobile-first. The redesign is free.
                You pay $99/month for hosting and maintenance.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li className="flex gap-3"><span className="text-brand">&#10003;</span> Full custom redesign — $0 upfront</li>
                <li className="flex gap-3"><span className="text-brand">&#10003;</span> Mobile-optimized, fast-loading, SEO-ready</li>
                <li className="flex gap-3"><span className="text-brand">&#10003;</span> Hosting &amp; maintenance: $99/month</li>
              </ul>
              <a href="#pilot-form" className="btn-secondary text-sm">Ask about web design &rarr;</a>
            </div>

            <div className="card !border-brand/15 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-semibold uppercase tracking-wider">Guarantee</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-3">Social Media</p>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                1 million views or you don&rsquo;t pay
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Morgan &amp; Morgan and Ben Crump built massive audiences. We help
                firms build the same presence. If we don&rsquo;t hit 1M views,
                you don&rsquo;t pay.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li className="flex gap-3"><span className="text-brand">&#10003;</span> Attorney personal brand &amp; thought leadership</li>
                <li className="flex gap-3"><span className="text-brand">&#10003;</span> Short-form legal content, scripted &amp; edited</li>
                <li className="flex gap-3"><span className="text-brand">&#10003;</span> 1M views guarantee or money back</li>
              </ul>
              <a href="#pilot-form" className="btn-secondary text-sm">Ask about social media &rarr;</a>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Request a pilot</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Tell us about your firm and we&rsquo;ll design a lead program
                for your market. Start small — scale when you&rsquo;re ready.
              </p>

              <div className="space-y-4">
                {[
                  "We review your firm within 24 hours",
                  "Custom lead program for your state and case type",
                  "Pilot batch delivered within 2 weeks",
                  "No commitment — pause or cancel anytime",
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
            Ready to stop paying for leads that don&rsquo;t convert?
          </h2>
          <p className="text-text-secondary mb-8">
            We fund the ads. You pay when qualified leads hit your CRM.
          </p>
          <a href="#pilot-form" className="btn-primary">
            Request a pilot &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
