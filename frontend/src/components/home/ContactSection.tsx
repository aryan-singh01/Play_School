import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { contact } from "@/lib/content";

const details = [
  { icon: MapPin, label: "Visit Us", value: `${contact.addressLine1}, ${contact.addressLine2}` },
  { icon: Phone, label: "Call Us", value: contact.phonePrimary },
  { icon: Mail, label: "Email Us", value: contact.email },
  { icon: Clock, label: "School Hours", value: `${contact.daysOpen} · ${contact.hoursWeekday}` },
];

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Visit Our Campus"
            title="We'd love to show you around"
            emphasis="show you around"
            description="Drop by, call, or send us a message — our admissions team is happy to answer every question."
          />

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-marigold-tint)] text-[var(--color-marigold-dark)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[var(--color-ink)]">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-9">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-cream-deep)]">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-3 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-[var(--color-peacock)] text-white shadow-[var(--shadow-soft)]">
              <MapPin className="size-6" aria-hidden="true" />
            </div>
            <p className="max-w-[220px] text-sm font-medium text-[var(--color-ink-soft)]">
              {contact.mapEmbedLabel}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
