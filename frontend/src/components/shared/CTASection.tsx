import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Squiggle from "@/components/ui/Squiggle";

export default function CTASection({
  eyebrow = "Come See Us",
  title = "Start your child's journey with us",
  emphasis = "journey",
  description = "The best way to know if we're the right fit is to visit — meet our teachers, see a classroom in session, and picture your child here.",
  primaryLabel = "Book a School Visit",
  primaryHref = "/admissions",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const parts = title.split(emphasis);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--color-peacock)] px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full opacity-20"
            style={{ background: "var(--color-marigold)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full opacity-15"
            style={{ background: "var(--color-berry)" }}
            aria-hidden="true"
          />

          <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {parts.length > 1 ? (
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
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} size="lg" variant="outline-light" withArrow={false}>
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
