import { Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Badge from "@/components/ui/Badge";
import { school } from "@/lib/content";

export default function IntroSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="grid grid-cols-2 gap-4">
          <PlaceholderPhoto
            label="Photo: teacher reading with children"
            toneIndex={1}
            aspect="aspect-[3/4]"
            className="mt-8"
          />
          <PlaceholderPhoto
            label="Photo: children painting together"
            toneIndex={2}
            aspect="aspect-[3/4]"
          />
        </div>

        <div>
          <Badge tone="peacock">
            <Heart className="size-3.5" aria-hidden="true" />
            About {school.shortName}
          </Badge>
          <h2 className="mt-5 font-display text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">
            A second home, built around how young children actually learn
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            {school.descriptionShort} Since {school.founded}, our classrooms have been designed
            around one simple idea: children thrive when they feel safe, seen, and free to
            explore — so every corner of our campus, and every minute of our day, is built with
            that in mind.
          </p>
          <ul className="mt-7 space-y-4">
            {[
              "Play-based, activity-led classrooms for every age group",
              "Trained early-years educators who know every child by name",
              "A safe, nurturing campus designed for little explorers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--color-ink-soft)]">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold-dark)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              More About Our School
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
