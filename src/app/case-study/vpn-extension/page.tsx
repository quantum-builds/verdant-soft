import {
  FourNumber,
  OneNumber,
  ReactIcon,
  ThreeNumber,
  TwoNumber,
  TypeScriptIcon,
  VPNExtensionBG,
  VPNExtensionImage1,
} from "@/assets";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import TechUsed from "../components/TechUsed";
import ProcessCard from "../components/ProcessCard";
import ListPoints from "../components/ListPoints";
import FooterSection from "../../components/sections/FooterSection";
import CaseStudyHeader from "../components/CaseStudyHeader";

const TECH_USED = [
  {
    text: "React Js",
    icon: ReactIcon,
  },
  {
    text: "TypeScript",
    icon: TypeScriptIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Ensuring <highlight>secure and encrypted connections</highlight> with minimal impact on browsing performance.",
  "Designing a smooth and responsive <highlight>browser extension UI</highlight> for quick VPN toggling.",
  "Building a <highlight>comprehensive dashboard</highlight> for real-time usage tracking and settings customization.",
  "Integrating a flexible <highlight>subscription system</highlight> with multiple pricing tiers, renewals, and payment management.",
  "Maintaining a consistent, cross-browser experience with strong privacy compliance.",
];

const SOLUTIONS = [
  "Developed the browser extension frontend using <highlight>React and TypeScript</highlight> for high performance and maintainability.",
  "Implemented a secure communication layer for <highlight>reliable VPN connectivity</highlight> with fast switching between servers.",
  "Built a dedicated user dashboard for <highlight>usage insights, server selection, and account management</highlight>.",
  "Integrated a subscription <highlight>billing system</highlight> with plan upgrades, renewals, and payment history.",
  "Focused on responsive design and seamless UX across the extension and web dashboard.",
];

const RESULTS = [
  "Delivered a reliable, privacy-focused VPN solution with a simple and intuitive interface.",
  "Empowered users to manage their VPN usage and subscriptions without technical complexity.",
  "Achieved secure, real-time server switching with minimal connection delays.",
  "Enabled flexible billing and plan control, improving user retention and satisfaction.",
  "Provided a scalable, cross-browser solution ready for deployment and growth.",
];

const PROOCESS = [
  {
    title: "Fast, Structured Onboarding",
    description:
      "We began with joint workshops and onboarding sessions to align the teams on objectives, timelines, and workflows laying the foundation for smooth and seamless collaboration from the very start.",
    image: OneNumber,
  },
  {
    title: "Agile Execution for Rapid Progress",
    description:
      "By applying Agile methodology, we broke the migration into manageable workstreams, enabling our team to operate independently while reducing the need for continuous coordination.",
    image: TwoNumber,
  },
  {
    title: "24-Hour Workflow for Maximum Productivity",
    description:
      "We transformed time zone differences into an advantage. The Polish team completed tasks and submitted approval requests during their workday, which the San Francisco team reviewed and responded to as their day began. This seamless handoff created a continuous feedback loop, accelerating development and virtually eliminating downtime.",
    image: ThreeNumber,
  },
  {
    title: "Independent Work Model for Faster Delivery",
    description:
      "The project was organized into self-contained components, enabling the team to move quickly and independently, avoiding bottlenecks and significantly shortening the migration timeline.",
    image: FourNumber,
  },
];

export default function RealEstatePage() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={VPNExtensionBG}
            alt="hero background"
          />
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>

        <div className=" z-10 h-full flex flex-col">
          <Navbar />

          <div className="relative z-10 w-full px-4 mt-[60vh] mb-20">
            <div className="bg-white max-w-7xl mx-auto rounded-xl">
              <div className="flex flex-col gap-16 lg:gap-32 w-full">
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <CaseStudyHeader
                    title="VPN Extension & Subscription Management System "
                    description="We developed a secure and user-friendly <highlight>VPN browser extension</highlight> designed to enhance internet privacy and protection. Built with a focus on performance and ease of use, the extension allows users to connect to VPN servers instantly through a clean, intuitive interface. In addition to secure browsing, the platform includes a full-featured <highlight>user dashboard</highlight> for managing VPN connections, monitoring usage, and controlling subscription preferences."
                  />
                  <TechUsed techUsed={TECH_USED} />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>

                <ProcessCard process={PROOCESS} />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={VPNExtensionImage1} alt="shopify-image" />
                  </div>
                  <ListPoints
                    title="Results and  Impact"
                    challenges={RESULTS}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
