import { LogoGrid } from "@/components/logo-grid";
import { FAQ } from "@/components/faq";
import { Vsl } from "@/components/vsl";
import { Testimonials } from "@/components/testimonials";
import { HashRedirect } from "@/components/hash-redirect";

// The VSL. Swap the id to change the video; poster is the YouTube still
// saved to /public so the first paint does not wait on YouTube.
const VSL = {
  videoId: "sZx0F15CPio",
  aspect: "16/9" as const,
  poster: "/vsl-poster.jpg",
  duration: "6:30",
};

const CTA = "Book a Free Case Growth Call";

const stats = [
  {
    value: "10 to 20%",
    label: "Sign rate on our exclusive leads, versus 2 to 5% on shared leads",
  },
  {
    value: "6 in 44 days",
    label: "Signed cases on a California pilot, first 44 days after SB37",
  },
  {
    value: "26%",
    label: "of law firms never respond to a web lead (Hennessey Digital, 2025 study of 1,333 firms)",
  },
];

const boutique = [
  {
    title: "The founder is on your account.",
    desc: "You talk to the person who built the system, not an account manager reading a script.",
  },
  {
    title: "The AI is tuned to your intake.",
    desc: "Our agents are trained on personal injury and adjusted to your firm's scripts, states, and case types.",
  },
  {
    title: "We only take firms we can win for.",
    desc: "Exclusivity by market, a pilot cap, and a few new firms a month so quality never drops.",
  },
];

const packageRows = [
  {
    title: "Exclusive MVA leads",
    desc: "Long-form qualified and phone-verified. One firm per market. Pay per lead or a flat management fee, your choice.",
    note: "Exclusive leads sign at 10 to 20%. Shared leads sign at 2 to 5%.",
    badge: "",
  },
  {
    title: "AI follow-up on every lead",
    desc: "Answered in under a minute. Chased for 30 days. Handed to your intake team with the full conversation.",
    note: "",
    badge: "In pilot. Pilot firms get it first.",
  },
  {
    title: "Database reactivation, included",
    desc: "Our AI texts every old lead in your CRM, in your firm's name. $1,000 per signed case, paid after it signs.",
    note: "Kass & Moses signed 1 in 100 old leads in month one.",
    badge: "Included",
  },
];

const fitYes = [
  "A personal injury or MVA firm doing $1M+ a year",
  "A CRM with old leads sitting in it",
  "An intake team that can call a booked consult back",
  "You care about cost per signed case more than cost per lead",
];

const fitNo = [
  "You want the cheapest leads on the market",
  "You have no intake team or no CRM",
  "You cannot follow up within minutes",
  "You run mass tort campaigns",
];

const faq = [
  {
    question: "Do we have to replace our intake team?",
    answer:
      "No. Your intake team is human, and some days there are more leads than hours. We handle the repetitive front end: answering in seconds, following up, screening, and booking. Your people make every legal decision and sign every client.",
  },
  {
    question: "What happens when the AI books a consult?",
    answer:
      "The whole conversation and a plain summary go to your intake team, so they know what was said before they pick up the phone. We then check that the consult was actually called. If it was not, we tell you.",
  },
  {
    question: "How does the reactivation pricing work?",
    answer:
      "Per signed case, and nothing before that. It covers leads already in your CRM on day one that sign within 60 days of our first contact. You confirm every signed case before we invoice. No setup fee, no retainer, no software fee.",
  },
  {
    question: "Can we do only the reactivation?",
    answer:
      "Yes. It is pay per signed case either way. The pilot is where the bigger results come from, because the AI works your new exclusive leads and your old leads at the same time.",
  },
  {
    question: "What about TCPA and consent?",
    answer:
      "They are your leads, your consent records, and your do-not-contact list. We remove represented and do-not-contact people before we start, and everything runs from numbers registered to your firm, only to people who already contacted you. Anyone who opts out is removed for good.",
  },
  {
    question: "What states and CRMs do you support?",
    answer:
      "Every state except the ones where we already have an exclusive partner, and we tell you on the call. We plug into Litify and Salesforce, Filevine, Clio, HubSpot, and GoHighLevel, among others. We do not ask you to switch.",
  },
];

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a href="/apply" className={`btn-primary text-base !px-8 !py-4 ${className}`}>
      {CTA}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <HashRedirect />

      {/* ═══ HEADLINE + VSL ═══ */}
      <section className="relative pt-28 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-balance px-4 py-1.5 rounded-full border border-brand/40 bg-brand/10 text-[11px] sm:text-xs font-medium text-brand mb-6">
            For Personal Injury and MVA Law Firms Doing $1M+ a Year
          </span>

          <h1 className="text-balance text-[1.9rem] leading-[1.15] sm:text-4xl lg:text-[2.7rem] font-bold tracking-tight text-text-primary">
            Exclusive MVA Leads That Sign at 10 to 20% + An AI That Works
            Every Lead You&rsquo;ve Ever Paid For
          </h1>

          <p className="mt-4 text-base sm:text-xl font-semibold text-brand">
            <span className="underline decoration-brand/70 decoration-2 underline-offset-[6px]">
              Reactivation included with your pilot. You pay nothing on an old
              lead until it signs.
            </span>
          </p>

          <p className="mt-3 text-sm text-text-muted max-w-2xl mx-auto">
            Every lead we send is answered by our AI in under a minute and
            followed up for 30 days.
          </p>
          <p className="mt-2 text-xs text-text-muted">
            AI-native growth boutique. A few firms a month, not hundreds.
          </p>

          <div className="mt-6">
            <Vsl videoId={VSL.videoId} aspect={VSL.aspect} poster={VSL.poster} duration={VSL.duration} />
          </div>

          <div className="mt-6 flex justify-center">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ═══ LOGOS (unchanged marquees) ═══ */}
      <LogoGrid />

      {/* ═══ STATS ═══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.value} className="card text-center !py-8">
                <p className="text-3xl sm:text-4xl font-bold stat-value">{s.value}</p>
                <p className="mt-3 text-xs text-text-muted leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOUTIQUE ═══ */}
      <section className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary text-center mb-12">
            Not another 700-client agency.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {boutique.map((b) => (
              <div key={b.title} className="card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">{b.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU GET ═══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary text-center mb-12">
            What you get with a lead package
          </h2>
          <div className="space-y-4">
            {packageRows.map((r, i) => (
              <div key={r.title} className="card !p-6 sm:!p-8 grid sm:grid-cols-[3rem_1fr] gap-4 sm:gap-6">
                <span className="text-2xl font-bold stat-value leading-none">0{i + 1}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-text-primary">{r.title}</h3>
                    {r.badge && (
                      <span className="px-2 py-0.5 rounded-full border border-brand/40 bg-brand/10 text-[10px] font-semibold uppercase tracking-wider text-brand">
                        {r.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{r.desc}</p>
                  {r.note && (
                    <p className="mt-3 text-sm font-medium text-brand">{r.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ═══ PROOF ═══ */}
      <section className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Campaigns we run with our media buying partners
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Real campaigns. Real signed cases.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            Screenshots from live accounts, shared with permission.
          </p>

          {/* Google Ads, February 2026 */}
          <div className="reveal card !p-6 lg:!p-8 mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-3">Google Ads, February 2026</p>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
              $368K in one month. 2,354 people asked for help.
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { value: "$368K", label: "Monthly ad spend" },
                { value: "2,354", label: "Conversions" },
                { value: "11.8M", label: "Impressions" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl sm:text-2xl font-bold text-brand">{s.value}</div>
                  <div className="text-xs text-text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <img src="/proof-google-ads.png" alt="Google Ads MVA campaign performance, February 2026" loading="lazy" className="rounded-lg border border-border-subtle w-full" />
          </div>

          {/* Weekly snapshot */}
          <div className="reveal card !p-6 lg:!p-8 mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-3">Weekly performance snapshot</p>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
              7 signed cases from one week of traffic
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {[
                { value: "7", label: "Signed cases" },
                { value: "318", label: "Leads, one week" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl sm:text-2xl font-bold text-brand">{s.value}</div>
                  <div className="text-xs text-text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <img src="/proof-weekly-analytics.png" alt="Weekly analytics dashboard" loading="lazy" className="rounded-lg border border-border-subtle w-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* California pilot tracker */}
            <div className="reveal card !p-6 lg:!p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-3">California pilot, after SB37</p>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                6 signed cases in the first 44 days
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                The consult tracker from a California firm&rsquo;s pilot. Every
                row is a booked consult that signed.
              </p>
              <img src="/proof-signed-cases.png" alt="Consult tracker showing signed-up outcomes from the California pilot" loading="lazy" className="rounded-lg border border-border-subtle w-full" />
            </div>

            {/* Reorder email */}
            <div className="reveal card !p-6 lg:!p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-3">A partner firm, after the first batch</p>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                &ldquo;We want to try 100 more leads.&rdquo;
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Firms reorder when the first batch signs. This is what that
                email looks like.
              </p>
              <img src="/proof-client-reorder.png" alt="Email from a partner firm asking for 100 more leads" loading="lazy" className="rounded-lg border border-border-subtle w-full bg-white" />
            </div>
          </div>

        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <Testimonials />

      {/* ═══ FIT ═══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card !border-brand/25">
              <h3 className="text-lg font-semibold text-text-primary mb-5">This is for you if</h3>
              <ul className="space-y-3">
                {fitYes.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-brand mt-0.5 shrink-0">&#10003;</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-5">This is not for you if</h3>
              <ul className="space-y-3">
                {fitNo.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-text-muted mt-0.5 shrink-0">&#10005;</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ items={faq} />

      {/* ═══ FINAL CTA ═══ */}
      <section id="book" className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {CTA}
          </h2>
          <p className="text-text-secondary mb-8">
            Thirty minutes. We look at your CRM and tell you what is in it. If
            there is nothing there, we say so.
          </p>
          <CtaButton />
          <p className="mt-6 text-xs text-text-muted">
            We reply within one business day.
          </p>
        </div>
      </section>
    </>
  );
}
