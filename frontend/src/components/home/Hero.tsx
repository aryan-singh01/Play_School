import { Sparkles, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Squiggle from "@/components/ui/Squiggle";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import { school } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      {/* ambient shapes */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--color-marigold-tint)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--color-peacock-tint)" }}
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)]/80 px-4 py-1.5 text-xs font-semibold text-[var(--color-ink-soft)] backdrop-blur">
            <Sparkles className="size-3.5 text-[var(--color-marigold-dark)]" aria-hidden="true" />
            Admissions open for the new session
          </div>

          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.08] text-[var(--color-ink)] sm:text-6xl lg:text-[3.6rem]">
            Where curiosity
            <br />
            <span className="squiggle-underline relative inline-block italic text-[var(--color-peacock)]">
              begins to bloom
              <Squiggle color="var(--color-marigold)" />
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {school.name} is a warm, play-first preschool where young children explore, create and
            grow — guided by teachers who genuinely delight in early childhood.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/admissions" size="lg">
              Book a School Visit
            </Button>
            <Button href="/programs" size="lg" variant="ghost" withArrow={false}>
              Explore Programs
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-[var(--color-line)] pt-8">
            <div>
              <p className="font-display text-3xl text-[var(--color-ink)]">{school.studentsCount}</p>
              <p className="text-sm text-[var(--color-ink-soft)]">Happy families</p>
            </div>
            <div className="h-10 w-px bg-[var(--color-line)]" />
            <div>
              <p className="font-display text-3xl text-[var(--color-ink)]">{school.yearsOfCare}+ yrs</p>
              <p className="text-sm text-[var(--color-ink-soft)]">Of early-years care</p>
            </div>
            <div className="h-10 w-px bg-[var(--color-line)]" />
            <div>
              <p className="font-display text-3xl text-[var(--color-ink)]">{school.teacherRatio}</p>
              <p className="text-sm text-[var(--color-ink-soft)]">Teacher-child ratio</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <PlaceholderPhoto
            label="Photo: children exploring in the classroom"
            variant="blob"
            toneIndex={0}
            aspect="aspect-[4/5]"
            className="w-full animate-float-slower"
          />

          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-4 shadow-[var(--shadow-soft)] sm:-left-10">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-peacock-tint)] text-[var(--color-peacock)]">
              <Users className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-lg leading-none text-[var(--color-ink)]">{school.studentsCount}</p>
              <p className="mt-1 text-xs text-[var(--color-ink-soft)]">Children learning &amp; growing here</p>
            </div>
          </div>

          <div
            className="absolute -right-4 top-8 hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-3 shadow-[var(--shadow-soft)] sm:block"
          >
            <p className="text-xs font-semibold text-[var(--color-ink-soft)]">Playgroup – UKG</p>
            <p className="font-display text-sm text-[var(--color-ink)]">Ages 1.5 – 5.5</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
