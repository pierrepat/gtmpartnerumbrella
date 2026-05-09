import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" className="text-text-primary">
                <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="8" />
                <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="6" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
              </svg>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-text-primary leading-tight">GTM Partner</span>
                <span className="text-[8px] tracking-[0.12em] uppercase text-text-muted/50 leading-none">Your Go-To-Market Team</span>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              AI-driven lead generation for personal injury law firms and B2B
              companies.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Services</p>
            <ul className="space-y-2.5">
              {[
                { href: "/#how-it-works", label: "Pay-Per-Lead" },
                { href: "/#services", label: "Website Design & Social Media" },
                { href: "/#pilot-form", label: "Request a Pilot" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                { href: "/outbound", label: "Outbound & RevOps" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a href="https://linkedin.com/in/pierrepatrouillard" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:pierre@gtmpartner.ai" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  pierre@gtmpartner.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-glow mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} GTM Partner LLC. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Delaware, USA
          </p>
        </div>
      </div>
    </footer>
  );
}
