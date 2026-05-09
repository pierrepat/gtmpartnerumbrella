"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How is this different from hiring a marketing agency?",
    answer:
      "An agency charges you a retainer AND you fund the ad spend. If the ads don't work, you still pay. With GTM Partner, we fund all ad spend ourselves and only charge you per qualified lead delivered. If we can't deliver, we eat the cost — not you.",
  },
  {
    question: "What makes your leads exclusive?",
    answer:
      "Every lead is sold to one firm only. Period. We never resell, recycle, or share leads with competing firms. When a lead hits your CRM, you're the only attorney they'll hear from through us.",
  },
  {
    question: "How quickly are leads delivered?",
    answer:
      "Real-time. The moment a lead is verified and passes your criteria, it's pushed directly to your CRM. Average delivery time is under 60 seconds from form submission.",
  },
  {
    question: "What if a lead is invalid?",
    answer:
      "We replace it within 24-48 hours at no cost. Invalid means: wrong number, already represented, not injured, outside your geography, duplicate, or accident older than 60 days with no treatment. If it doesn't meet your agreed criteria, it's on us.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "No. Month-to-month. No contracts. Start with as few as 10 leads per month and scale when you're ready. Pause or cancel anytime with no penalty.",
  },
  {
    question: "How much do leads cost?",
    answer:
      "Pricing depends on your state, case type, and volume. Most MVA leads range from $250-$400 per exclusive, verified lead. Book a call and we'll give you exact pricing for your market in 15 minutes.",
  },
  {
    question: "How do you verify leads?",
    answer:
      "Every lead goes through OTP phone verification (one-time passcode via SMS) to confirm the phone number is real and belongs to the person. We also capture full TCPA consent metadata and TrustedForm certification through ActiveProspect.",
  },
  {
    question: "What states do you cover?",
    answer:
      "We currently generate leads across all 50 states. You can filter to receive leads only from states where you are licensed to practice.",
  },
  {
    question: "What CRMs do you integrate with?",
    answer:
      "We deliver leads via webhook to any CRM that accepts them — Litify, Clio, Filevine, MyCase, Salesforce, HubSpot, GoHighLevel, and more. If your CRM supports webhooks or Zapier, we can connect to it.",
  },
  {
    question: "Why should I trust a company that also does B2B outbound?",
    answer:
      "Our B2B background is actually our advantage. We've spent years building AI-driven prospecting and data systems for 50+ companies, generating $15M+ in pipeline. The same infrastructure — automation, data enrichment, signal tracking, CRM integration — now powers our legal lead generation. We're not marketers who learned tech. We're systems builders who applied our stack to legal.",
  },
];

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-surface-raised">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
          FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12">
          Common questions
        </h2>

        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className={`rounded-xl overflow-hidden transition-all border ${
                openIndex === index
                  ? "border-brand/30 bg-surface"
                  : "border-border-subtle bg-surface-raised hover:border-border-default"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-semibold text-text-primary group-hover:text-brand transition-colors">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all text-xs font-bold ${
                    openIndex === index
                      ? "bg-brand text-surface rotate-45"
                      : "bg-border-default text-text-muted"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-3 border-t border-border-subtle">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
