import type { Metadata } from "next";
import { FAQ } from "@/components/faq";
import { Funnel } from "@/components/funnel";
import { SmsDemo } from "@/components/sms-demo";
import { LeakyFunnel } from "@/components/leaky-funnel";
import { TerritoryMap } from "@/components/territory-map";

export const metadata: Metadata = {
  title: "The System",
  description:
    "How GTM Partner turns old leads and exclusive new leads into signed cases for personal injury firms. Reactivation, speed to lead, exclusive territories, and reporting.",
};

const disqualifiers = [
  "Wrong or disconnected phone number",
  "Already represented by an attorney",
  "No injury occurred",
  "Outside your geographic area",
  "Duplicate lead",
  "Accident 60+ days ago with no treatment",
];

export default function SystemPage() {
  return (
    <>
      {/* ═══ INTRO ═══ */}
      <section className="pt-32 pb-10 lg:pt-40 lg:pb-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-6">
            The system
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
            How the leads you already paid for become signed cases.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            The long version. Two offers, the AI that runs them, the states we
            still have open, and what you get to see.
          </p>
        </div>
      </section>

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


      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            The engine behind Scale
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            We build the stack. We don&rsquo;t resell one.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            We do not buy lists. We own the place accident victims go for
            answers, so every Scale lead starts on a property we control.
          </p>

          {/* Owned property: MVACompensation */}
          <div className="reveal rounded-xl border border-brand/20 bg-surface-raised overflow-hidden">
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

        </div>
      </section>



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

      {/* ═══ FAQ ═══ */}
      <FAQ />

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Ready to sign the cases you already paid for?
          </h2>
          <p className="text-text-secondary mb-8">
            A few firms a month. First come, first served.
          </p>
          <a href="/apply" className="btn-primary">
            Book a Free Case Growth Call &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
