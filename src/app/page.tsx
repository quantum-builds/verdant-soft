import HeroSection from "./components/sections/HeroSection";
import ServiceSection from "./components/sections/ServiceSection";
import FooterSection from "./components/sections/FooterSection";
import BlogSection from "./components/sections/BlogSection";
import FAQSection from "./components/sections/FAQSection";
import TestimonialsSection from "./components/sections/TestimonialSection";
import AchievementSection from "./components/sections/AchievementSection";
import CaseStudySection from "./components/sections/CaseStudySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementSection />
      <ServiceSection />
      <CaseStudySection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <FooterSection />
    </>
  );
}
