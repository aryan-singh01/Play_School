import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-[var(--color-cream-deep)] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Parent Voices"
          title="What families tell us"
          emphasis="families"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-7"
            >
              <Quote className="size-7 text-[var(--color-marigold-dark)]" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-[var(--color-ink)]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-[var(--color-ink-soft)]">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
