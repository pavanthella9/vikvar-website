"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const services = [
  "IT Recruiting",
  "Staff Augmentation",
  "Technology Consulting",
  "Application Development",
  "Offshore Development",
  "Cloud & DevOps",
  "Other",
] as const;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
    [form.email],
  );

  const formIsValid =
    form.name.trim().length >= 2 &&
    emailIsValid &&
    form.service.length > 0 &&
    form.message.trim().length >= 20;

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setSubmitted(false);
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const subject = encodeURIComponent(
      `Website enquiry: ${form.service} — ${form.company || form.name}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company || "Not provided"}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Service: ${form.service}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `mailto:info@vikvartech.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
          <Mail className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            Send a business enquiry
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            Share your requirement and the relevant details. Your email
            application will open with the information prepared for review.
          </p>
        </div>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="text-sm font-semibold text-slate-900"
            >
              Full name <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-company"
              className="text-sm font-semibold text-slate-900"
            >
              Company
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="Company name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="text-sm font-semibold text-slate-900"
            >
              Work email <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={form.email.length > 0 && !emailIsValid}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="name@company.com"
            />
            {form.email.length > 0 && !emailIsValid ? (
              <p className="mt-2 text-sm text-red-700">
                Enter a valid email address.
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="text-sm font-semibold text-slate-900"
            >
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="+1 000 000 0000"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="text-sm font-semibold text-slate-900"
          >
            Service required <span className="text-red-600">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            required
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-semibold text-slate-900"
          >
            Requirement details <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            minLength={20}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="mt-2 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            placeholder="Tell us about the roles, project, timeline, skills, location, or delivery support you need."
          />
          <p className="mt-2 text-sm text-slate-500">
            Minimum 20 characters. Do not include passwords or confidential
            credentials.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-500">
            By sending an enquiry, you agree to our website privacy policy.
          </p>

          <button
            type="submit"
            disabled={!formIsValid}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            Prepare email
          </button>
        </div>

        {submitted ? (
          <div
            role="status"
            className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="text-sm leading-6">
              Your email application should now open. Review the prepared
              message and select Send.
            </p>
          </div>
        ) : null}
      </form>
    </div>
  );
}
