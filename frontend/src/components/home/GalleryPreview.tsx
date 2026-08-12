import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import { galleryItems } from "@/lib/content";

const spans = [
  "sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
];

export default function GalleryPreview() {
  const items = galleryItems.slice(0, 6);

  return (
    <section className="bg-[var(--color-cream-deep)] py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Life at School"
            title="Everyday moments worth remembering"
            emphasis="worth remembering"
            description="A glimpse into our classrooms, celebrations and everyday play."
          />
          <Button href="/gallery" variant="ghost" className="hidden shrink-0 sm:inline-flex">
            View Full Gallery
          </Button>
        </div>

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[180px] sm:grid-cols-3">
          {items.map((item, i) => (
            <PlaceholderPhoto
              key={item.title}
              label={`Photo: ${item.title}`}
              toneIndex={i}
              aspect=""
              className={`h-full w-full ${spans[i] ?? ""}`}
            />
          ))}
        </div>

        <Button href="/gallery" variant="ghost" className="mt-10 flex w-full justify-center sm:hidden">
          View Full Gallery
        </Button>
      </Container>
    </section>
  );
}
