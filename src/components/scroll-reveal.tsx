"use client";

import { useEffect } from "react";

/* Fades .reveal elements in as they scroll into view. Two safety nets so a
   heading can never stay invisible: anything already on screen is revealed
   at once, and everything is revealed after 1.2s regardless. */
export function ScrollReveal() {
  useEffect(() => {
    const all = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const show = (el: Element) => el.classList.add("revealed");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    all.forEach((el) => observer.observe(el));

    const fallback = setTimeout(() => all.forEach(show), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
