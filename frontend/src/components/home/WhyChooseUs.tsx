import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/cards/FeatureCard";
import { whyChooseUs } from "@/lib/content";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-peacock-dark)] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full opacity-10"
        style={{ background: "var(--color-marigold)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full opacity-10"
        style={{ background: "var(--color-berry)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Parents Choose Us"
          title="Everything that matters to you, in one safe place"
          emphasis="one safe place"
          tone="light"
          emphasisColor="var(--color-marigold)"
          description="From safety to small class sizes, here's what parents notice first — and what keeps them here."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              tone="dark"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
