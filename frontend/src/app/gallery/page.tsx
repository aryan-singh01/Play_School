import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import GalleryFilterGrid from "@/components/gallery/GalleryFilterGrid";
import { school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photos from classrooms, celebrations and everyday play at ${school.name}.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A window into everyday school life"
        emphasis="everyday school life"
        description="Browse moments from our classrooms, outdoor play and celebrations throughout the year."
        crumb="Gallery"
      />

      <section className="pb-20 sm:pb-28">
        <Container>
          <GalleryFilterGrid />
        </Container>
      </section>

      <CTASection
        eyebrow="Want to See More?"
        title="Follow along or visit in person"
        emphasis="visit in person"
        description="Follow our social channels for regular updates, or come experience a day at school for yourself."
      />
    </>
  );
}
