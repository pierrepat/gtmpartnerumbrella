/*
  Anonymized placeholders, written to read like real firm owners and intake
  managers. Each card carries a TODO. Swap in verified quotes with the
  client's permission before running paid traffic to this page.
*/
const testimonials = [
  {
    // TODO(Pierre): replace with a real quote
    quote:
      "We had close to four thousand old leads nobody had touched in a year. Within the first month the AI booked consults we were never going to call ourselves, and some of them signed.",
    name: "Managing Partner",
    role: "Personal injury firm, Illinois",
    result: "Signed cases from leads already paid for",
  },
  {
    // TODO(Pierre): replace with a real quote
    quote:
      "The leads arrive already answered. My team gets a summary and a warm person on the line instead of a cold form from last night.",
    name: "Intake Manager",
    role: "MVA firm, Texas",
    result: "Every new lead answered in under a minute",
  },
  {
    // TODO(Pierre): replace with a real quote
    quote:
      "Pierre is on every call. That is the difference between this and the last three vendors we tried.",
    name: "Owner",
    role: "Personal injury firm, California",
    result: "Six signed cases in the first 44 days",
  },
];

export function Testimonials() {
  return (
    <section className="py-14 lg:py-20 bg-surface-raised">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary text-center mb-12">
          What firm owners and intake managers say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.quote} className="card flex flex-col">
              <blockquote className="text-sm text-text-secondary leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border-subtle">
                <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                <p className="text-xs text-text-muted">{t.role}</p>
                <p className="mt-3 text-xs font-semibold text-green-500 flex items-center gap-1.5">
                  <span aria-hidden="true">&#10003;</span> {t.result}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
