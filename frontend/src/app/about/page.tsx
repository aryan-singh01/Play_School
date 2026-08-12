import type { Metadata } from "next";
import { Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import Testimonials from "@/components/shared/Testimonials";
import { school, values, milestones, teamRoles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${school.name}'s story, philosophy and the people behind our nurturing early-years classrooms.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our story, our people, our promise"
        emphasis="promise"
        description={`${school.descriptionShort} Here's a closer look at how ${school.name} came to be.`}
        crumb="About"
      />

      {/* Story */}
      <section className="pb-20 sm:pb-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Badge tone="marigold">
              <Heart className="size-3.5" aria-hidden="true" />
              Our Story
            </Badge>
            <h2 className="mt-5 font-display text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">
              Founded on a simple belief: children learn best through play
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
              {school.name} began in {school.founded} with a single playgroup classroom and a
              handful of families who wanted something different — a place where their children
              could be curious, messy, loud and joyful, while still building the early skills
              they&apos;d need for school and life.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
              {school.yearsOfCare}+ years later, that belief hasn&apos;t changed. We&apos;ve simply built
              more thoughtful spaces, trained more wonderful teachers, and welcomed more families
              into a community that puts childhood first.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderPhoto label="Photo: founding classroom" toneIndex={3} aspect="aspect-square" />
            <PlaceholderPhoto label="Photo: children at outdoor play" toneIndex={0} aspect="aspect-square" className="mt-8" />
            <PlaceholderPhoto label="Photo: teacher with student" toneIndex={1} aspect="aspect-square" className="-mt-8" />
            <PlaceholderPhoto label="Photo: art studio session" toneIndex={2} aspect="aspect-square" />
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-cream-deep)] py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="The values behind every classroom decision"
            emphasis="every classroom decision"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-7"
              >
                <span className="font-display text-3xl text-[var(--color-marigold-dark)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-[var(--color-ink)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="Growing thoughtfully, one year at a time"
            emphasis="one year at a time"
          />
          <ol className="mt-12 space-y-0 border-l-2 border-[var(--color-line)] pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.35rem] top-1 flex size-4 items-center justify-center rounded-full border-4 border-[var(--color-cream)] bg-[var(--color-marigold)]" />
                <p className="font-display text-xl text-[var(--color-peacock)]">{m.year}</p>
                <p className="mt-1 max-w-lg text-[var(--color-ink-soft)]">{m.label}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-cream-deep)] py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our People"
            title="Teachers who love this work"
            emphasis="love this work"
            description="Every classroom is led by trained early-years educators supported by a caring, experienced team."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {teamRoles.map((t, i) => (
              <div key={t.role} className="flex gap-5 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-6">
                <PlaceholderPhoto
                  label={`Photo: ${t.role}`}
                  toneIndex={i}
                  aspect=""
                  className="h-20 w-20 shrink-0 rounded-2xl"
                />
                <div>
                  <h3 className="font-display text-lg text-[var(--color-ink)]">{t.role}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
