"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.interest) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-text-primary mb-2">Message received.</p>
        <p className="text-sm text-text-secondary">We&rsquo;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  const inputClass = "w-full bg-surface-raised border border-border-default rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-brand focus:outline-none transition-colors";
  const labelClass = "block text-sm font-medium text-text-secondary mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>Name *</label>
        <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Email *</label>
        <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Company</label>
        <input type="text" value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>I&rsquo;m interested in *</label>
        <select value={form.interest} onChange={(e) => update("interest", e.target.value)} className={inputClass}>
          <option value="">Select</option>
          <option value="pay-per-lead">Pay-per-lead for my law firm</option>
          <option value="outbound">Outbound systems for my B2B company</option>
          <option value="both">Both</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Anything else?</label>
        <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={3} className={`${inputClass} resize-none`} />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button type="submit" className="btn-primary w-full justify-center">Send message</button>
    </form>
  );
}
