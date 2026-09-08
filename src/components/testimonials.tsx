/*
  TODO(Pierre): replace every [PLACEHOLDER] below with a real, anonymized quote.
  Attribution format: first name, role, state. No last names, no firm names.
  Delete a card entirely rather than shipping a placeholder live.
*/
const TESTIMONIALS = [
  {
    quote: "[TESTIMONIAL_1_QUOTE]",
    attribution: "[TESTIMONIAL_1_ATTRIBUTION]",
    example: "John, Intake Manager, Texas",
  },
  {
    quote: "[TESTIMONIAL_2_QUOTE]",
    attribution: "[TESTIMONIAL_2_ATTRIBUTION]",
    example: "Maria, Operations Director, Arizona",
  },
  {
    quote: "[TESTIMONIAL_3_QUOTE]",
    attribution: "[TESTIMONIAL_3_ATTRIBUTION]",
    example: "David, Managing Partner, Georgia",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">
          In their words
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-primary mb-12">
          What intake teams say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.attribution} className="card flex flex-col">
              <blockquote className="text-sm text-text-secondary leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border-subtle">
                <span className="text-sm font-medium text-text-primary block">
                  {t.attribution}
                </span>
                <span className="text-[11px] text-text-muted/70 block mt-1">
                  format: {t.example}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
