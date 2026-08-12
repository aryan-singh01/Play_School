import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FacilityCard from "@/components/cards/FacilityCard";
import { facilities } from "@/lib/content";

export default function FacilitiesPreview() {
  const preview = facilities.slice(0, 4);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Campus"
            title="Spaces designed for little explorers"
            emphasis="little explorers"
            description="Every room on campus is purpose-built for a specific kind of play, learning or rest."
          />
          <Button href="/facilities" variant="ghost" className="hidden shrink-0 sm:inline-flex">
            Explore Facilities
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((facility, i) => (
            <FacilityCard
              key={facility.name}
              name={facility.name}
              description={facility.description}
              icon={facility.icon}
              toneIndex={i}
            />
          ))}
        </div>

        <Button href="/facilities" variant="ghost" className="mt-10 flex w-full justify-center sm:hidden">
          Explore Facilities
        </Button>
      </Container>
    </section>
  );
}
