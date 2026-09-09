import type { Metadata } from "next";
import { Quiz } from "@/components/quiz";

export const metadata: Metadata = {
  title: "Book a Free Case Growth Call",
  description:
    "Four quick questions so we know whether the pilot fits your firm, then pick a time.",
  robots: { index: false, follow: true },
};

export default function ApplyPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4 text-center">
          Book a Free Case Growth Call
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary text-center mb-3">
          Four quick questions first.
        </h1>
        <p className="text-sm text-text-secondary text-center mb-10">
          We take on a few firms a month, so we check fit before we book. It takes about a minute.
        </p>
        <Quiz />
        <p className="text-xs text-text-muted text-center mt-6">
          We reply within one business day. A few firms a month, first come, first served.
        </p>
      </div>
    </section>
  );
}
