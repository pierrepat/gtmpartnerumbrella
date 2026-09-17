import type { Metadata } from "next";
import Image from "next/image";
import { FAQ, type FaqItem } from "@/components/faq";
import { CrmLogos, FirmsStrip } from "@/components/logo-grid";
import { CTA, PLAINTIFFPILOT_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Exclusive MVA Leads That Sign at 10 to 20%",
  description:
    "Exclusive MVA leads for personal injury firms. Phone-verified, long-form qualified, delivered to your CRM within minutes. Pay per lead or a flat management fee.",
  alternates: { canonical: "/leads" },
};

const packageRows = [
  {
    title: "Exclusive, phone-verified MVA leads",
    desc: "Long-form qualified and phone-verified by one-time passcode. One firm per market, never resold and never re-routed, and that is written into the agreement.",
    note: "Exclusive leads sign at 10 to 20%. Shared leads sign at 2 to 5%.",
  },
  {
    title: "Delivered to your CRM within minutes",
    desc: "Every lead lands in the CRM you already run, with the full intake answers attached. We plug into Litify and Salesforce, Filevine, Clio, HubSpot, and GoHighLevel, among others. We do not ask you to switch.",
    note: "",
  },
  {
    title: "Bad leads replaced free",
    desc: "Wrong number, already represented, no injury, outside your area, duplicate, or an accident 60+ days ago with no treatment. Flag it inside the dispute window and we replace it.",
    note: "Pay per lead or a flat management fee inside your own ad account. Your choice.",
  },
];

const fitYes = [
  "A personal injury or MVA firm doing $1M+ a year",
  "A CRM we can deliver into",
  "An intake team that can call a new lead back within minutes",
  "You care about cost per signed case more than cost per lead",
];

const fitNo = [
  "You want the cheapest leads on the market",
  "You have no intake team or no CRM",
  "You cannot follow up within minutes",
  "You run mass tort campaigns",
];

const faq: FaqItem[] = [
  {
    question: "How do leads reach us?",
    answer:
      "Straight into your CRM, within minutes of the person finishing the form. Each lead carries the full set of intake answers and the phone number we verified, so your intake team can call with context instead of cold.",
  },
  {
    question: "Which CRMs do you support?",
    answer:
      "Litify and Salesforce, Filevine, Clio, HubSpot, and GoHighLevel, among others. We plug into what you already run. We do not ask you to switch.",
    extra: <CrmLogos />,
  },
  {
    question: "How are leads screened?",
    answer:
      "Before a lead reaches you we check injury, fault, whether they already have a lawyer, case type, and whether the case is still inside the statute of limitations. Every lead is phone-verified by one-time passcode and TrustedForm certified. A lead that fails your agreed criteria is replaced free.",
  },
  {
    question: "What about TCPA and consent?",
    answer:
      "Every lead asked for a lawyer on a form they filled in themselves, verified their phone number by one-time passcode, and carries a TrustedForm certificate. You get the consent record with the lead. Anyone who opts out is removed for good.",
  },
  {
    question: "Who follows up on the lead?",
    answer:
      "Every lead we deliver can be worked by PlaintiffPilot, our AI intake engine, so a lead gets its first text in under 60 seconds and is chased until it books or disqualifies. Ask about it on the call or see plaintiffpilot.com.",
  },
  {
    question: "Pay per lead or a management fee?",
    answer:
      "Your choice. Pay per lead is a fixed price by state, and we walk you through it on the first call. The management fee option runs the same campaigns inside your own ad account for a flat monthly fee, so you own the account, the data and the spend.",
  },
  {
    question: "What are the terms?",
    answer:
      "Exclusive to one firm per market, in writing. A pilot cap on the first batch, 50% prepayment per batch, a 7-day dispute window, a 20% replacement cap, and month to month after that.",
  },
  {
    question: "What states do you cover?",
    answer:
      "Every state except the ones where we already have an exclusive partner, and we tell you on the call.",
  },
];

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a href="/apply" className={`btn-primary text-base !px-8 !py-4 ${className}`}>
      {CTA}
    </a>
  );
}

export default function LeadsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block text-balance px-4 py-1.5 rounded-full border border-brand/40 bg-brand/10 text-[11px] sm:text-xs font-medium text-brand mb-6">
            For Personal Injury and MVA Law Firms Doing $1M+ a Year
          </span>
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-text-primary">
            Exclusive MVA Leads That Sign at 10 to 20%
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Phone-verified, long-form qualified, delivered to your CRM within
            minutes. Pay per lead or a flat management fee inside your own ad
            account. Your choice.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton />
          </div>
          <p className="mt-4 text-xs text-text-muted">We reply within one business day.</p>
        </div>
      </section>

      <FirmsStrip />

      {/* ═══ PACKAGE ═══ */}
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
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{r.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{r.desc}</p>
                  {r.note && (
                    <p className="mt-3 text-sm font-medium text-brand">{r.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FIT ═══ */}
      <section className="py-14 lg:py-20 bg-surface-raised">
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

      {/* ═══ PROOF ═══ */}
      <section className="py-14 lg:py-20">
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
            <Image
              src="/proof-google-ads.png"
              alt="Google Ads MVA campaign performance, February 2026"
              width={900}
              height={500}
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="rounded-lg border border-border-subtle w-full h-auto"
            />
          </div>

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
            <Image
              src="/proof-weekly-analytics.png"
              alt="Weekly analytics dashboard showing 318 leads and 7 signed cases"
              width={2774}
              height={1038}
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="rounded-lg border border-border-subtle w-full h-auto"
            />
          </div>

          <div className="reveal card !p-6 lg:!p-8 md:max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-3">A partner firm, after the first batch</p>
            <h3 className="text-xl font-bold text-text-primary mb-4">
              &ldquo;We want to try 100 more leads.&rdquo;
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Firms reorder when the first batch signs. This is what that
              email looks like.
            </p>
            <Image
              src="/proof-client-reorder.png"
              alt="Email from a partner firm asking for 100 more leads"
              width={956}
              height={562}
              sizes="(min-width: 768px) 560px, 100vw"
              className="rounded-lg border border-border-subtle w-full h-auto bg-white"
            />
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ items={faq} />

      {/* ═══ POWERED BY PLAINTIFFPILOT ═══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-xl border border-brand/20 bg-surface-raised p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                Powered by PlaintiffPilot
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Every lead can be worked by our AI intake engine.
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl">
                PlaintiffPilot sends the first text in under 60 seconds and
                chases the lead until it books or disqualifies. It is a
                separate product from GTM Partner LLC. Ask about it on the
                call.
              </p>
            </div>
            <a
              href={PLAINTIFFPILOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary justify-center whitespace-nowrap"
            >
              See plaintiffpilot.com &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section id="book" className="py-16 lg:py-24 bg-surface-raised">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {CTA}
          </h2>
          <p className="text-text-secondary mb-8">
            Thirty minutes. We tell you whether your state is open and what a
            lead costs there. If it is not a fit, we say so.
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
