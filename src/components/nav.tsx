"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// One CTA on the whole site. No nav links, so nothing competes with it.
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onApply = pathname === "/apply";

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

        {!onApply && (
          <Link href="/apply" className="btn-primary text-xs sm:text-sm !py-2.5 !px-4 sm:!px-5">
            <span className="sm:hidden">Book a Free Call</span>
            <span className="hidden sm:inline">Book a Free Case Growth Call</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
