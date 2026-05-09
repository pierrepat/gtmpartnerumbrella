"use client";

import { useState, type FormEvent } from "react";

// TODO: Replace with actual GHL webhook URL
const WEBHOOK_URL = "https://placeholder.ghl-webhook.com/pilot-request";

interface FormData {
  firmName: string;
  states: string;
  monthlyVolume: string;
  practiceArea: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

export function PilotForm() {
  const [form, setForm] = useState<FormData>({
    firmName: "",
    states: "",
    monthlyVolume: "",
    practiceArea: "MVA",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.firmName || !form.contactName || !form.contactEmail) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    console.log("Pilot request submitted:", form);
    console.log("Webhook URL (not sent):", WEBHOOK_URL);
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
        <p className="text-lg font-semibold text-text-primary mb-2">Request received.</p>
        <p className="text-sm text-text-secondary">
          We&rsquo;ll review your firm details and reach out within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass = "w-full bg-surface-raised border border-border-default rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-brand focus:outline-none transition-colors";
  const labelClass = "block text-sm font-medium text-text-secondary mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>Firm name *</label>
        <input type="text" value={form.firmName} onChange={(e) => update("firmName", e.target.value)} className={inputClass} placeholder="e.g., Smith & Associates" />
      </div>

      <div>
        <label className={labelClass}>State(s) of practice</label>
        <input type="text" value={form.states} onChange={(e) => update("states", e.target.value)} className={inputClass} placeholder="e.g., California, Texas" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Monthly lead volume</label>
          <select value={form.monthlyVolume} onChange={(e) => update("monthlyVolume", e.target.value)} className={inputClass}>
            <option value="">Select</option>
            <option value="0-10">0–10</option>
            <option value="10-50">10–50</option>
            <option value="50-100">50–100</option>
            <option value="100+">100+</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Practice area</label>
          <select value={form.practiceArea} onChange={(e) => update("practiceArea", e.target.value)} className={inputClass}>
            <option value="MVA">MVA</option>
            <option value="Truck Accidents">Truck Accidents</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Pedestrian">Pedestrian</option>
            <option value="All PI">All Personal Injury</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Contact name *</label>
        <input type="text" value={form.contactName} onChange={(e) => update("contactName", e.target.value)} className={inputClass} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email *</label>
          <input type="email" value={form.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input type="tel" value={form.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} className={inputClass} />
        </div>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button type="submit" className="btn-primary w-full justify-center">
        Submit pilot request
      </button>
    </form>
  );
}
