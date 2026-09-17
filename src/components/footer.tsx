import Link from "next/link";
import { CONTACT_EMAIL, MVACOMPENSATION_URL, PLAINTIFFPILOT_URL } from "@/lib/site";

const brands = [
  { href: PLAINTIFFPILOT_URL, label: "plaintiffpilot.com" },
  { href: MVACOMPENSATION_URL, label: "mvacompensation.com" },
];

// TODO(Pierre): interim. Point these at gtmpartner.ai pages once the LLC has
// its own privacy policy and terms.
const legal = [
  { href: `${PLAINTIFFPILOT_URL}/privacy`, label: "Privacy" },
  { href: `${PLAINTIFFPILOT_URL}/terms`, label: "Terms" },
];

const linkClass = "text-sm text-text-secondary hover:text-text-primary transition-colors";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" aria-hidden="true" className="text-text-primary">
                <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="8" />
                <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="6" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
              </svg>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-text-primary leading-tight">
                GTM Partner LLC
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Growth infrastructure for plaintiff law firms.
            </p>
            <p className="mt-2 text-xs text-text-muted">Delaware, USA</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Brands</p>
            <ul className="space-y-2.5">
              {brands.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Offer</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/leads" className={linkClass}>Exclusive MVA leads</Link>
              </li>
              <li>
                <Link href="/apply" className={linkClass}>Book a Free Case Growth Call</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Legal and contact</p>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-glow mt-12 mb-8" />

        <div className="space-y-2 text-xs text-text-muted">
          <p>PlaintiffPilot and MVA Compensation are brands of GTM Partner LLC.</p>
          <p>GTM Partner LLC is not a law firm and does not provide legal advice.</p>
          <p>&copy; {new Date().getFullYear()} GTM Partner LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
