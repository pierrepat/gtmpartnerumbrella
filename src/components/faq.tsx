"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string; extra?: React.ReactNode };

export function FAQ({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = items;

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

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
                    {item.extra}
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
