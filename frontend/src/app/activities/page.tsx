import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import ActivityCard from "@/components/cards/ActivityCard";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { activities, school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Activities",
  description: `A look at the everyday activities that make up learning through play at ${school.name}.`,
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="A day full of purposeful, joyful play"
        emphasis="joyful play"
        description="No two days look exactly the same — but every day balances stories, movement, art and quiet exploration."
        crumb="Activities"
      />

      <section className="pb-16 sm:pb-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderPhoto label="Photo: story time circle" toneIndex={1} aspect="aspect-square" />
            <PlaceholderPhoto label="Photo: block building play" toneIndex={3} aspect="aspect-square" className="mt-8" />
          </div>
          <div>
            <SectionHeading
              eyebrow="How We Plan Our Days"
              title="Structured enough to feel safe, open enough to feel free"
              emphasis="feel free"
              description="Our teachers plan intentional activities across eight areas of development — then leave plenty of room for children to lead, ask questions and follow their own curiosity."
            />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-cream-deep)] py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="This Week's Highlights"
            title="A sample of activities across our classrooms"
            emphasis="across our classrooms"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((a) => (
              <ActivityCard
                key={a.name}
                name={a.name}
                category={a.category}
                description={a.description}
                icon={a.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="See a Day in Action"
        title="Watch a classroom in session"
        emphasis="classroom in session"
        description="The best way to understand our activities is to see them happen — schedule a visit during school hours."
      />
    </>
  );
}
