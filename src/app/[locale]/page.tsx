import HeroSection from "./components/sections/HeroSection";
import ServiceSection from "./components/sections/ServiceSection";
import FooterSection from "./components/sections/FooterSection";
import BlogSection from "./components/sections/BlogSection";
import FAQSection from "./components/sections/FAQSection";
import TestimonialsSection from "./components/sections/TestimonialSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import AchievementSection from "./components/sections/AchievementSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementSection />
      <ServiceSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <FooterSection />
    </>
  );
}
