import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/cards/FeatureCard";
import { learningAreas } from "@/lib/content";

export default function LearningThroughPlay() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <svg
        className="pointer-events-none absolute inset-x-0 top-24 hidden w-full opacity-60 lg:block"
        height="120"
        viewBox="0 0 1200 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 60C150 10 300 110 450 60C600 10 750 110 900 60C1000 26 1100 26 1200 60"
          stroke="var(--color-line)"
          strokeWidth="2"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
      </svg>

      <Container className="relative">
        <SectionHeading
          eyebrow="Learning Through Play"
          title="Six ways children discover the world"
          emphasis="discover"
          align="center"
          description="Every day balances structure with freedom — moving between creative, physical and quiet activities that build the whole child."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningAreas.map((area) => (
            <FeatureCard
              key={area.name}
              title={area.name}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
