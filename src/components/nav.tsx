"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#services", label: "Services" },
  { href: "/outbound", label: "Outbound & RevOps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // CTA destination depends on current page
  const ctaHref = pathname === "/" ? "#pilot-form" : "/contact";
  const ctaLabel = pathname === "/" ? "Get Started" : "Get in Touch";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg
            width="24"
            height="24"
            viewBox="0 0 100 100"
            fill="none"
            className="text-text-primary group-hover:text-brand transition-colors"
          >
            <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="8" />
            <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="6" />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-text-primary group-hover:text-brand transition-colors leading-tight">
              GTM Partner
            </span>
            <span className="text-[8px] tracking-[0.12em] uppercase text-text-muted/50 leading-none">
              Your Go-To-Market Team
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href={ctaHref} className="btn-primary text-sm !py-2.5 !px-5">
            {ctaLabel}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-border-subtle">
          <div className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm font-medium text-text-secondary hover:text-text-primary"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={ctaHref}
              className="btn-primary text-sm !py-2.5 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
