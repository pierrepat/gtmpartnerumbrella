import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Pierre Patrouillard, CEO",
  description:
    "Founder and CEO of GTM Partner. French, Masters in Data Analytics. 50+ B2B companies. $15M+ in attributed revenue. Pay-per-lead for PI law firms.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-6">
                About the CEO
              </p>
              <h1 className="reveal text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-[1.1] mb-2">
                Pierre Patrouillard
              </h1>
              <p className="text-text-muted font-medium mb-8">
                Founder &amp; CEO, GTM Partner LLC
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                French. Masters in Data Analytics. Currently between New York
                and Lisbon.
              </p>
              <p className="text-text-secondary leading-relaxed">
                GTM Partner operates two offers: pay-per-lead for personal
                injury law firms, and AI-driven outbound systems for B2B SaaS
                companies. Same infrastructure. Same team. Two verticals.
              </p>
            </div>

            {/* Headshot */}
            <div className="hidden md:block">
              <div className="sticky top-28">
                <div className="aspect-[3/4] rounded-xl overflow-hidden border border-border-subtle">
                  <img
                    src="/headshot.jpg"
                    alt="Pierre Patrouillard, CEO of GTM Partner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-16 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                Pay-Per-Lead — Legal
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> Work with 15
                  personal injury law firms nationwide
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> Direct
                  partnerships with media buyers spending 8 figures monthly
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> $5M+/month in
                  managed MVA ad spend
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> 2,500+ leads
                  delivered monthly
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> No retainers,
                  100% pay per lead
                </li>
              </ul>
            </div>

            <div className="card">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                Outbound &amp; RevOps — B2B
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> Worked with 50+
                  B2B companies
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> 50M+
                  AI-personalized outbound messages
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> $15M+ in
                  directly attributed revenue
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> 12 months
                  average client retention
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">&#x2022;</span> Clients include
                  Worldpay (Fortune 500), Electric Era, CloudZero
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Want to work together?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in touch &rarr;
            </Link>
            <a
              href="https://linkedin.com/in/pierrepatrouillard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
