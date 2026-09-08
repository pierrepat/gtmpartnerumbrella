import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GTM Partner. AI growth systems for law firms. Outbound systems for B2B companies. Based between New York and Lisbon.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-6">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Let&rsquo;s talk
          </h1>
          <p className="text-text-secondary leading-relaxed mb-16 max-w-xl">
            A law firm that wants more signed cases, or a B2B company that
            needs outbound. Start here.
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: form */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-6">
                What the first call looks like
              </p>
              <div className="card">
                <ul className="space-y-4">
                  {[
                    "Thirty minutes. No deck.",
                    "You tell us roughly how many old leads are in your CRM and where new ones come from.",
                    "We tell you how many are likely still reachable and what Recover would do with them.",
                    "If you want Scale, we check whether your state is still open.",
                    "If there is nothing there, we say so.",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-brand mt-0.5 shrink-0">&#10003;</span>
                      <span className="text-sm text-text-secondary leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://cal.com/gtmpartner/30min" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center mt-8">
                  Pick a time &rarr;
                </a>
              </div>
            </div>

            {/* Right: direct contact + Cal.com */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase mb-6">
                Or reach out directly
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="mailto:pierre@gtmpartner.ai"
                  className="card !p-5 block hover:!border-brand/20 transition-colors group"
                >
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-text-primary group-hover:text-brand transition-colors">
                    pierre@gtmpartner.ai
                  </p>
                </a>

                <a
                  href="https://linkedin.com/in/pierrepatrouillard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card !p-5 block hover:!border-brand/20 transition-colors group"
                >
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                    LinkedIn
                  </p>
                  <p className="text-text-primary group-hover:text-brand transition-colors">
                    Pierre Patrouillard
                  </p>
                </a>

                <a
                  href="https://cal.com/gtmpartner/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card !p-5 block !border-brand/20 hover:!border-brand/40 transition-colors group"
                >
                  <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-1">
                    Book a call
                  </p>
                  <p className="text-text-primary group-hover:text-brand transition-colors">
                    30-minute strategy call &rarr;
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    cal.com/gtmpartner/30min
                  </p>
                </a>
              </div>

              <div className="card !bg-surface text-center !p-8">
                <p className="text-text-muted text-sm mb-2">Based between</p>
                <p className="text-text-primary font-semibold">
                  New York &amp; Lisbon
                </p>
                <p className="text-text-muted text-sm mt-2">
                  Working with clients globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
