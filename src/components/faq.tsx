"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How is this different from an agency or a lead vendor?",
    answer:
      "A lead vendor sells you names. An agency runs your ads and hands you a report. We work the whole path, from first contact to signed retainer. We reactivate the leads you already have, respond to new ones in seconds, book consultations, and only then scale new demand. Everything is measured on signed cases, not clicks or lead counts. You keep your own accounts and data, and we improve the leads from every source, not just the ones we generate.",
  },
  {
    question: "Do we have to replace our intake team?",
    answer:
      "No. We give them teammates that never get tired. Your intake team is human. Some days they are sharp, some days they are tired, and every day there are more leads than hours. The agents handle the repetitive front end: instant response, follow-up, qualifying, and booking. Your people make every legal decision and sign every client. The agents just make sure fewer signable cases slip through before they reach you.",
  },
  {
    question: "What happens to a lead once your agent books a consult?",
    answer:
      "The whole conversation and a plain summary go to your intake team, so they know what was said before they pick up the phone. We then confirm the consult was actually called. If it was not, we tell you. A booked consult that nobody rings is the same as a lost case.",
  },
  {
    question: "Can we start with Scale without Revive?",
    answer:
      "You can. But Revive is included with every Scale engagement anyway, because it is the fastest way to lower your cost per case. It costs you nothing to run and it works leads you have already paid for, so there is no reason to leave it switched off while we spend money on new ones.",
  },
  {
    question: "What is a recovery pilot?",
    answer:
      "It is the easiest, lowest-risk way to start. We take the old, dormant leads already sitting in your CRM, people who never signed, and reactivate them with AI email and SMS. There is no new ad spend, and you only pay when one of them signs a case. It is a simple way to see how we work, on cases you already paid to generate, before we do anything bigger.",
  },
  {
    question: "How does the AI contact people?",
    answer:
      "Mostly by text, because that is what people actually respond to. The AI opens with a short, human message, not a sales pitch, designed to get a reply. Then it answers questions, checks a couple of qualifying details, and books a consultation. It follows up if someone goes quiet and hands warm, qualified people to your intake team. Everything runs compliantly, from numbers registered to your firm, and only to leads who consented to be contacted.",
  },
  {
    question: "What will we be able to see?",
    answer:
      "Everything. You get a live view of the full funnel: traffic, inquiries, qualified opportunities, booked consultations, and signed cases. No black box. You always know how each lead is progressing and exactly what a signed case cost you. That visibility is the whole point of a partnership.",
  },
  {
    question: "Do you still do pay-per-lead?",
    answer:
      "Yes, as one option, not the whole relationship. Some firms want us to run new paid campaigns and deliver exclusive, qualified case leads. We do that as part of the Scale stage. But we usually start by fixing what you already have, old leads and slow follow-up, before spending a dollar on new ads. That is where the fastest and cheapest cases are.",
  },
  {
    question: "What if a lead is invalid?",
    answer:
      "You do not pay for junk. If a lead does not meet the criteria we agreed on, such as a wrong number, no injury, already represented, out of area, or a duplicate, it does not count and we do not charge for it. We would rather earn on cases you can actually monetize.",
  },
  {
    question: "How do you verify leads?",
    answer:
      "Every lead is screened before it reaches you. We check injury, fault, representation status, case type, and whether it is still within the statute of limitations. New leads are also phone-verified by OTP and TrustedForm certified. The leads that hit your intake are ones your firm can actually sign, not a spreadsheet of random names.",
  },
  {
    question: "What states do you cover?",
    answer:
      "We work nationwide and tailor each campaign to your state, including local case values, statutes, and rules. We honor one firm per market for a given case type, so availability depends on whether your area is already taken. Tell us your states and we will confirm.",
  },
  {
    question: "What CRMs do you work with?",
    answer:
      "The major legal and marketing platforms: Salesforce and Litify, Filevine, CasePeer, SmartAdvocate, Clio, and GoHighLevel, among others. We plug into whatever you already run and feed qualified cases straight into it. We do not ask you to replace your system.",
  },
  {
    question: "Why trust a company that also does B2B outbound?",
    answer:
      "Law firms are the focus. We run reactivation and intake for personal injury firms, we own and operate MVACompensation.com, and our campaign results are on this page. The B2B work is where the AI and outbound systems were built. Years of outreach, follow-up, and email and SMS infrastructure for demanding B2B companies is exactly what powers the agents now working your leads. It is the reason our deliverability and systems beat a typical legal marketing agency.",
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
