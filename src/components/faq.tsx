"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What exactly do you do?",
    answer:
      "Two things. Recover works the old leads already sitting in your CRM and books the ones still worth having into your intake team's calendar. Scale sends you new, exclusive leads in your state from campaigns we run and pay for. Take Scale and Recover comes with it.",
  },
  {
    question: "How is Recover priced?",
    answer:
      "Per signed case. No setup fee, no software fee, no retainer, no ad budget. You confirm every signed case before we invoice, so there is nothing to dispute and no guarantee to argue about. If your database has nothing in it, you owe nothing.",
  },
  {
    question: "How is Scale priced?",
    answer:
      "Per lead, fixed by state, and we walk you through it on the first call. Every lead is exclusive to your firm, never resold and never re-routed, and that is written into the agreement. We take one firm per state.",
  },
  {
    question: "Do we have to replace our intake team?",
    answer:
      "No. Your intake team is human. Some days they are sharp, some days they are tired, and every day there are more leads than hours. We handle the repetitive front end: answering in seconds, following up, screening, and booking. Your people make every legal decision and sign every client.",
  },
  {
    question: "How does the AI contact people?",
    answer:
      "Mostly by text, because that is what people answer. It opens with a short, human message in your firm's name, answers questions, checks a couple of details against your rules, and books the consult. It follows up if someone goes quiet. Anyone who opts out is removed for good. Everything runs from numbers registered to your firm, only to people who already contacted you.",
  },
  {
    question: "What happens once a consult is booked?",
    answer:
      "The whole conversation and a plain summary go to your intake team, so they know what was said before they pick up the phone. We then check that the consult was actually called. If it was not, we tell you.",
  },
  {
    question: "How do you screen Scale leads?",
    answer:
      "Before a lead reaches you we check injury, fault, whether they already have a lawyer, case type, and whether the case is still inside the statute of limitations. New leads are phone-verified by one-time passcode and TrustedForm certified. A lead that fails your agreed criteria is replaced free.",
  },
  {
    question: "What will we be able to see?",
    answer:
      "A live view of the full funnel: inquiries, qualified prospects, booked consults, and signed cases, broken out by source. You always know what a signed case cost you.",
  },
  {
    question: "Which CRMs do you work with?",
    answer:
      "Litify and Salesforce, Filevine, Clio, HubSpot, and GoHighLevel, among others. We plug into what you already run. We do not ask you to switch.",
  },
  {
    question: "Who is this not for?",
    answer:
      "Firms shopping for the cheapest possible leads, firms with no intake process or CRM, and mass tort or class action work. If you cannot call a booked consult back the same day, we are not a fit yet.",
  },
  {
    question: "Why trust a company that also does B2B outbound?",
    answer:
      "Law firms are the focus. We run reactivation and intake for personal injury firms, we own and operate MVACompensation.com, and our campaign results are on this page. The B2B work is where the AI and outbound systems were built. Years of outreach and follow-up infrastructure for demanding B2B companies is what powers the agents now working your leads.",
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
    <section className="py-14 lg:py-20 bg-surface-raised">
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
                  openIndex === index ? "max-h-[36rem]" : "max-h-0"
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
