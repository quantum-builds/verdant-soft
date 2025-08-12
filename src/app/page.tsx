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
      <div className="relative">
        <div className="absolute -bottom-10 left-0 w-[400px] h-[400px] bg-[#406C94] rounded-full blur-[300px] z-0" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#26615E] rounded-full blur-[300px] z-0" />

        <HeroSection />
      </div>
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
