import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/shared/PageHero";
import FaqAccordion from "@/components/shared/FaqAccordion";
import EnquiryForm from "@/components/admissions/EnquiryForm";
import { admissionSteps, admissionFaqs, contact, school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description: `How to apply to ${school.name} — our simple, five-step admissions process.`,
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A simple, warm path to your child's first classroom"
        emphasis="first classroom"
        description="We've kept our admissions process short and personal — five steps from first hello to first day."
        crumb="Admissions"
      />

      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading eyebrow="The Process" title="Five steps to enrolment" emphasis="enrolment" />

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {admissionSteps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex flex-col rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-6"
              >
                <span className="font-display text-3xl text-[var(--color-marigold-dark)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg text-[var(--color-ink)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-[var(--color-cream-deep)] py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Enquire Now"
              title="Tell us about your child"
              emphasis="your child"
              description="Share a few details and our admissions team will reach out within one working day to schedule your visit."
            />

            <dl className="mt-9 space-y-4 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
                  Admissions Email
                </dt>
                <dd className="mt-1 text-[var(--color-ink)]">{contact.admissionsEmail}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
                  Admissions Phone
                </dt>
                <dd className="mt-1 text-[var(--color-ink)]">{contact.phoneSecondary}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
                  Visiting Hours
                </dt>
                <dd className="mt-1 text-[var(--color-ink)]">
                  {contact.daysOpen} · {contact.hoursWeekday}
                </dd>
              </div>
            </dl>
          </div>

          <EnquiryForm />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Good to Know" title="Frequently asked questions" emphasis="asked questions" />
          <div className="mt-10">
            <FaqAccordion items={admissionFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
