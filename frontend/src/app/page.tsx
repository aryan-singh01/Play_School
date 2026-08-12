import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import LearningThroughPlay from "@/components/home/LearningThroughPlay";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/shared/Testimonials";
import CTASection from "@/components/shared/CTASection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ProgramsPreview />
      <LearningThroughPlay />
      <WhyChooseUs />
      <FacilitiesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </>
  );
}
