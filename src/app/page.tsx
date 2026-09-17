import Image from "next/image";
import Link from "next/link";
import { HashRedirect } from "@/components/hash-redirect";
import { MVACOMPENSATION_URL, PLAINTIFFPILOT_URL } from "@/lib/site";

const brands = [
  {
    name: "PlaintiffPilot",
    tag: "Product",
    desc: "The AI intake engine for PI law firms. Turns the leads you already have into signed cases. Pay when a case signs.",
    href: PLAINTIFFPILOT_URL,
    label: "Visit plaintiffpilot.com",
  },
  {
    name: "MVA Compensation",
    tag: "Consumer site",
    desc: "Bilingual accident help for injured people. Free lawyer matching in ten states.",
    href: MVACOMPENSATION_URL,
    label: "Visit mvacompensation.com",
  },
];

function ExternalIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <HashRedirect />

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-6">
              GTM Partner LLC
            </p>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-text-primary">
              GTM Partner LLC builds growth infrastructure for plaintiff law firms.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
              Two brands. One job: more signed cases per marketing dollar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {brands.map((b) => (
              <div key={b.name} className="card flex flex-col">
                <span className="self-start px-2.5 py-1 rounded-full bg-brand/10 border border-brand/25 text-[10px] font-semibold uppercase tracking-wider text-brand mb-5">
                  {b.tag}
                </span>
                <h2 className="text-2xl font-bold text-text-primary mb-3">{b.name}</h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">{b.desc}</p>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center gap-2"
                >
                  {b.label}
                  <ExternalIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEAD OFFER TEASER ═══ */}
      <section className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-xl border border-brand/20 bg-surface p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                The one thing we sell here
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Exclusive MVA leads for PI firms
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl">
                Phone-verified, long-form qualified, delivered to your CRM within minutes.
                Pay per lead or a flat management fee inside your own ad account.
              </p>
            </div>
            <Link href="/leads" className="btn-primary justify-center whitespace-nowrap">
              See the lead offer &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PROOF STRIP ═══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
            Campaigns we run with our media buying partners
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Exclusive leads sign at 10 to 20%. Shared leads sign at 2 to 5%.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            Screenshots from live accounts, shared with permission.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal card !p-6 lg:!p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-3">Google Ads, February 2026</p>
              <h3 className="text-xl font-bold text-text-primary mb-6">
                $368K in one month. 2,354 people asked for help.
              </h3>
              <Image
                src="/proof-google-ads.png"
                alt="Google Ads MVA campaign performance, February 2026"
                width={900}
                height={500}
                sizes="(min-width: 768px) 540px, 100vw"
                className="rounded-lg border border-border-subtle w-full h-auto"
              />
            </div>

            <div className="reveal card !p-6 lg:!p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-3">A partner firm, after the first batch</p>
              <h3 className="text-xl font-bold text-text-primary mb-6">
                &ldquo;We want to try 100 more leads.&rdquo;
              </h3>
              <Image
                src="/proof-client-reorder.png"
                alt="Email from a partner firm asking for 100 more leads"
                width={956}
                height={562}
                sizes="(min-width: 768px) 540px, 100vw"
                className="rounded-lg border border-border-subtle w-full h-auto bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/*
        TODO(Pierre): testimonials. The previous quotes were unverified
        placeholders and were dropped. Add real, permissioned quotes about
        lead quality here. Quotes about follow-up or reactivation belong on
        plaintiffpilot.com.
      */}

      {/* ═══ ABOUT ═══ */}
      <section className="py-14 lg:py-20 bg-surface-raised">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-[160px_1fr] gap-8 lg:gap-12 items-start">
            <div className="w-40 aspect-[4/5] rounded-xl overflow-hidden border border-border-subtle">
              <Image
                src="/headshot.jpg"
                alt="Pierre Patrouillard, founder of GTM Partner LLC"
                width={320}
                height={400}
                sizes="160px"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
                About
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Pierre Patrouillard, founder
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl">
                Pierre Patrouillard founded GTM Partner LLC and runs it from
                Portugal. He has spent five years running performance lead
                generation and now builds PlaintiffPilot. He works in English,
                Spanish and French.
              </p>
              <a
                href="https://linkedin.com/in/pierrepatrouillard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
              >
                LinkedIn
                <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
