import HeroSection from "./components/sections/HeroSection";
import HighlightSection from "./components/sections/HighlightSection";
import ServiceSection from "./components/sections/ServiceSection";
import FooterSection from "./components/sections/FooterSection";
import BlogSection from "./components/sections/BlogSection";
import FAQSection from "./components/sections/FAQSection";
import TestimonialsSection from "./components/sections/TestimonialSection";
import WorkFlowSection from "./components/sections/WorkFlowSection";
import FeaturesSection from "./components/sections/FeaturesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightSection />
      <ServiceSection />
      <FeaturesSection />
      <WorkFlowSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <FooterSection />
    </>
  );
}
