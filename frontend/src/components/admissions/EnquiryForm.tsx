"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/content";

const inputClasses =
  "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] transition-colors focus:border-[var(--color-peacock)] focus:bg-white focus:outline-none";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: this is a front-end placeholder. Wire this up to your
    // admissions API / CRM / email service when going live.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card)] p-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-[var(--color-peacock-tint)] text-[var(--color-peacock)]">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-display text-2xl text-[var(--color-ink)]">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--color-ink-soft)]">
          We&apos;ve received your enquiry and will get back to you within one working day. We
          can&apos;t wait to meet your little explorer.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="parentName" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
            Parent / Guardian Name
          </label>
          <input id="parentName" name="parentName" type="text" required className={inputClasses} placeholder="Your full name" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="childName" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
            Child&apos;s Name
          </label>
          <input id="childName" name="childName" type="text" required className={inputClasses} placeholder="Your child's name" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} placeholder="+91 00000 00000" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
            Email Address
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@example.com" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="program" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
            Interested Program
          </label>
          <select id="program" name="program" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select a program
            </option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.ageRange})
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="childAge" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
            Child&apos;s Age
          </label>
          <input id="childAge" name="childAge" type="text" className={inputClasses} placeholder="e.g. 2 years 4 months" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
            Message <span className="font-normal text-[var(--color-ink-faint)]">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClasses}
            placeholder="Tell us a little about your child, or any questions you have"
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        Submit Enquiry
      </Button>
      <p className="mt-3 text-xs text-[var(--color-ink-faint)]">
        By submitting, you agree to be contacted by our admissions team regarding your enquiry.
      </p>
    </form>
  );
}
