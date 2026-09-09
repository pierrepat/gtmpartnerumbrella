"use client";

import { useState } from "react";

// TODO(Pierre): swap for the HighLevel booking page. Name, email and phone are
// appended as query params (HighLevel reads first_name, last_name, email,
// phone; Cal.com reads name and email), so the booking form is pre-filled.
const BOOKING_URL = "https://cal.com/gtmpartner/30min";

// Optional. Set to a HighLevel inbound webhook and every completed quiz is
// POSTed there as JSON before the redirect. Leave empty to skip.
const QUIZ_WEBHOOK_URL = "";

type Option = { label: string; value: string; fit: boolean };
type Step = { key: string; question: string; help?: string; options: Option[] };

const STEPS: Step[] = [
  {
    key: "practice",
    question: "What kind of firm are you?",
    options: [
      { label: "Personal injury or MVA", value: "pi", fit: true },
      { label: "Mass tort or class action", value: "mass_tort", fit: false },
      { label: "Another practice area", value: "other", fit: false },
    ],
  },
  {
    key: "revenue",
    question: "Roughly, what does the firm do in a year?",
    options: [
      { label: "Under $1M", value: "lt1m", fit: false },
      { label: "$1M to $3M", value: "1to3m", fit: true },
      { label: "$3M to $10M", value: "3to10m", fit: true },
      { label: "$10M or more", value: "gt10m", fit: true },
    ],
  },
  {
    key: "oldLeads",
    question: "How many old leads are sitting in your CRM?",
    help: "A rough guess is fine. Anyone who contacted you and did not sign.",
    options: [
      { label: "Under 500", value: "lt500", fit: true },
      { label: "500 to 2,000", value: "500to2k", fit: true },
      { label: "2,000 to 10,000", value: "2kto10k", fit: true },
      { label: "More than 10,000", value: "gt10k", fit: true },
      { label: "We do not have a CRM", value: "none", fit: false },
    ],
  },
  {
    key: "intake",
    question: "Can your intake team call a booked consult back the same day?",
    options: [
      { label: "Yes, every time", value: "yes", fit: true },
      { label: "Most of the time", value: "mostly", fit: true },
      { label: "Not yet", value: "no", fit: false },
    ],
  },
];

const inputClass =
  "w-full rounded-lg bg-surface border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand/60";

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ firm: "", states: "", name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | "fit" | "nofit">(null);

  const total = STEPS.length + 1;

  const pick = (key: string, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  };

  const qualified = STEPS.every((s) => {
    const chosen = s.options.find((o) => o.value === answers[s.key]);
    return chosen ? chosen.fit : false;
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = { ...answers, ...contact, qualified, submittedAt: new Date().toISOString() };

    if (QUIZ_WEBHOOK_URL) {
      try {
        await fetch(QUIZ_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch {
        // Never block the booking on a failed webhook.
      }
    }

    if (!qualified) {
      setDone("nofit");
      setSubmitting(false);
      return;
    }

    const [first, ...rest] = contact.name.trim().split(/\s+/);
    const params = new URLSearchParams({
      name: contact.name,
      first_name: first ?? "",
      last_name: rest.join(" "),
      email: contact.email,
      phone: contact.phone,
    });
    setDone("fit");
    window.location.href = `${BOOKING_URL}${BOOKING_URL.includes("?") ? "&" : "?"}${params}`;
  };

  if (done === "nofit") {
    return (
      <div className="card text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-4">Not a fit yet</p>
        <h2 className="text-2xl font-bold text-text-primary mb-4">Thanks for being straight with us.</h2>
        <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto mb-6">
          The pilot works best for personal injury firms doing $1M+ a year with
          a CRM full of old leads and an intake team that can call back fast.
          If that changes, come back. If you think we got it wrong, email us.
        </p>
        <a href="mailto:pierre@gtmpartner.ai" className="btn-secondary">pierre@gtmpartner.ai</a>
      </div>
    );
  }

  if (done === "fit") {
    return (
      <div className="card text-center">
        <p className="text-sm text-text-secondary">Taking you to the calendar&hellip;</p>
      </div>
    );
  }

  return (
    <div className="card">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-brand" : "bg-border-default"}`}
          />
        ))}
      </div>

      {step < STEPS.length ? (
        <div key={STEPS[step].key}>
          <p className="text-xs text-text-muted mb-2">
            Question {step + 1} of {total}
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
            {STEPS[step].question}
          </h2>
          {STEPS[step].help && (
            <p className="text-sm text-text-muted mb-6">{STEPS[step].help}</p>
          )}
          <div className="grid gap-3 mt-6">
            {STEPS[step].options.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => pick(STEPS[step].key, o.value)}
                className="text-left rounded-lg border border-border-default bg-surface px-5 py-4 text-sm font-medium text-text-primary hover:border-brand/60 hover:bg-brand/5 transition-colors"
              >
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="mt-6 text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              &larr; Back
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={submit}>
          <p className="text-xs text-text-muted mb-2">Last step</p>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
            Where should we send the calendar?
          </h2>
          <div className="grid gap-4">
            <input required className={inputClass} placeholder="Firm name" value={contact.firm} onChange={(e) => setContact({ ...contact, firm: e.target.value })} />
            <input required className={inputClass} placeholder="State(s) you sign cases in" value={contact.states} onChange={(e) => setContact({ ...contact, states: e.target.value })} />
            <input required className={inputClass} placeholder="Your name" autoComplete="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
            <input required type="email" className={inputClass} placeholder="Work email" autoComplete="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
            <input required type="tel" className={inputClass} placeholder="Phone" autoComplete="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
          </div>
          <button type="submit" disabled={submitting} className="btn-primary w-full justify-center mt-6">
            {submitting ? "One moment" : "Book a Free Case Growth Call"}
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="mt-4 text-xs text-text-muted hover:text-text-primary transition-colors"
          >
            &larr; Back
          </button>
        </form>
      )}
    </div>
  );
}
