import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProgramCard from "@/components/cards/ProgramCard";
import { programs } from "@/lib/content";

export default function ProgramsPreview() {
  return (
    <section className="bg-[var(--color-cream-deep)] py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Programs"
            title="A learning path for every age"
            emphasis="every age"
            description="From first steps away from home to school-ready confidence — four programs, one consistent, play-first philosophy."
          />
          <Button href="/programs" variant="ghost" className="hidden shrink-0 sm:inline-flex">
            View All Programs
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <ProgramCard key={program.slug} program={program} toneIndex={i} compact />
          ))}
        </div>

        <Button href="/programs" variant="ghost" className="mt-10 flex w-full justify-center sm:hidden">
          View All Programs
        </Button>
      </Container>
    </section>
  );
}
