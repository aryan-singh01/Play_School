import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Squiggle from "@/components/ui/Squiggle";

export default function PageHero({
  eyebrow,
  title,
  emphasis,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  description?: string;
  crumb: string;
}) {
  const parts = emphasis ? title.split(emphasis) : [title];

  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div
        className="pointer-events-none absolute -right-20 -top-10 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--color-marigold-tint)" }}
        aria-hidden="true"
      />
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-[var(--color-ink-faint)]">
          <Link href="/" className="hover:text-[var(--color-ink)]">
            Home
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="font-medium text-[var(--color-ink-soft)]">{crumb}</span>
        </nav>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-peacock)]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] text-[var(--color-ink)] sm:text-5xl">
          {emphasis ? (
            <>
              {parts[0]}
              <span className="squiggle-underline relative inline-block">
                {emphasis}
                <Squiggle color="var(--color-marigold)" />
              </span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
