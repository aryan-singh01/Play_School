import type { Metadata } from "next";
import { ShieldCheck, Sparkles, HeartPulse } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FacilityCard from "@/components/cards/FacilityCard";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { facilities, school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Facilities",
  description: `A look at the classrooms, play areas and safety systems that make up ${school.name}'s campus.`,
};

const safetyPoints = [
  { title: "CCTV Monitored", description: "Every classroom and common area is under continuous supervision.", icon: ShieldCheck },
  { title: "Child-Safe Materials", description: "Non-toxic, age-appropriate furniture and play equipment throughout.", icon: Sparkles },
  { title: "On-Site First Aid", description: "Trained staff and a dedicated space for basic health needs.", icon: HeartPulse },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="A campus built with safety and curiosity in mind"
        emphasis="safety and curiosity"
        description="Every space on campus is purpose-built — for a specific kind of play, rest or discovery."
        crumb="Facilities"
      />

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, i) => (
              <FacilityCard
                key={facility.name}
                name={facility.name}
                description={facility.description}
                icon={facility.icon}
                toneIndex={i}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-peacock-dark)] py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Safety First"
            title="The systems parents don't see, but always feel"
            emphasis="always feel"
            tone="light"
            description="Safety isn't a single feature — it's built into how our campus runs every single day."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {safetyPoints.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7">
                <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[var(--color-marigold)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="See It For Yourself"
        title="Tour our campus in person"
        emphasis="tour our campus"
      />
    </>
  );
}
