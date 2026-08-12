import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Button from "@/components/ui/Button";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { programs, school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description: `Explore ${school.name}'s Playgroup, Nursery, LKG and UKG programs — a play-first learning path for every age.`,
};

const toneText: Record<string, string> = {
  marigold: "text-[var(--color-marigold-dark)]",
  peacock: "text-[var(--color-peacock)]",
  berry: "text-[var(--color-berry)]",
};

const toneBg: Record<string, string> = {
  marigold: "bg-[var(--color-marigold-tint)]",
  peacock: "bg-[var(--color-peacock-tint)]",
  berry: "bg-[var(--color-berry-tint)]",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="A learning path built around your child's age and pace"
        emphasis="age and pace"
        description="Four programs, one consistent philosophy: children learn best through guided, joyful play."
        crumb="Programs"
      />

      <section className="pb-10">
        <Container>
          <div className="flex flex-wrap gap-3">
            {programs.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className={`rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]`}
              >
                {p.name} · {p.ageRange}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <div className="divide-y divide-[var(--color-line)]">
        {programs.map((program, i) => (
          <section key={program.slug} id={program.slug} className="scroll-mt-24 py-16 sm:py-20">
            <Container>
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <PlaceholderPhoto
                  label={`Photo: ${program.name} classroom activities`}
                  variant={i % 2 === 0 ? "blob" : "rounded"}
                  toneIndex={i}
                  aspect="aspect-[4/3]"
                />
                <div>
                  <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${toneBg[program.color]} ${toneText[program.color]}`}>
                    {program.ageRange}
                  </span>
                  <h2 className="mt-4 font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
                    {program.name}
                  </h2>
                  <p className={`mt-2 text-base font-semibold ${toneText[program.color]}`}>{program.tagline}</p>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
                    {program.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {program.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-soft)]">
                        <Check className={`mt-0.5 size-4 shrink-0 ${toneText[program.color]}`} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="/admissions" variant={i % 2 === 0 ? "primary" : "secondary"}>
                      Enquire About {program.name}
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <section className="bg-[var(--color-cream-deep)] py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Not Sure Where to Start?"
            title="Our admissions team can help you choose"
            emphasis="help you choose"
            description="Every child settles in differently — a short conversation with our team helps us recommend the right program and start date."
          />
          <div className="mt-8">
            <Button href="/admissions">Talk to Admissions</Button>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Ready When You Are"
        title="Come meet our teachers in person"
        emphasis="meet our teachers"
      />
    </>
  );
}
