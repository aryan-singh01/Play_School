import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import EnquiryForm from "@/components/admissions/EnquiryForm";
import { contact, school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${school.name} — visit our campus, call, or send us a message.`,
};

const details = [
  { icon: MapPin, label: "Address", value: `${contact.addressLine1}, ${contact.addressLine2}` },
  { icon: Phone, label: "Phone", value: contact.phonePrimary },
  { icon: Mail, label: "Email", value: contact.email },
  { icon: Clock, label: "Hours", value: `${contact.daysOpen} · ${contact.hoursWeekday}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're always happy to hear from you"
        emphasis="hear from you"
        description="Whether you have a quick question or want to plan a visit, reach out any time — we typically respond within one working day."
        crumb="Contact"
      />

      <section className="pb-20 sm:pb-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <ul className="space-y-5">
              {details.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-5"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-marigold-tint)] text-[var(--color-marigold-dark)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
                      {label}
                    </p>
                    <p className="mt-1 text-[var(--color-ink)]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="relative mt-6 flex min-h-[220px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-deep)]">
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-center gap-2 text-center px-6">
                <MapPin className="size-6 text-[var(--color-peacock)]" aria-hidden="true" />
                <p className="max-w-[220px] text-sm font-medium text-[var(--color-ink-soft)]">
                  {contact.mapEmbedLabel}
                </p>
              </div>
            </div>
          </div>

          <EnquiryForm />
        </Container>
      </section>
    </>
  );
}
