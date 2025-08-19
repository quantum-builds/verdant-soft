import {
  CanvasBG,
  CanvasImage1,
  CanvasImage2,
  FourNumber,
  KonvaIcon,
  OneNumber,
  ThreeNumber,
  TwoNumber,
  VueIcon,
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
    text: "Vue.js",
    icon: VueIcon,
  },
  {
    text: "Konva.js",
    icon: KonvaIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Implementing <highlight>real-time canvas interactivity</highlight> with smooth drag-and-drop behavior.",
  "Managing <highlight>complex layering and positioning logic</highlight> for nested UI elements.",
  "Integrating an <highlight>AI agent</highlight> to interpret canvas designs and convert them into clean, production-ready code.",
  "Maintaining performance during high-frequency updates and large design states.",
  "Ensuring a seamless user experience across devices and screen sizes.",
];

const SOLUTIONS = [
  "Built a highly interactive canvas system using <highlight>Konva.js</highlight> with <highlight>Vue.js</highlight> for UI management and reactivity.",
  "Implemented <highlight>layer management, snapping, resizing, and property editing features</highlight> for precise design control.",
  "Integrated an <highlight>AI-driven code generation module</highlight> that analyzes user-created designs and produces <highlight>Vue.js component code</highlight>.",
  "Optimized rendering and state handling to ensure performance and responsiveness under heavy load.",
  "Developed backend support for <highlight>design saving, project management, and AI processing</highlight>.",
];

const RESULTS = [
  "Delivered a powerful browser-based design tool that brings <highlight>Figma-like functionality</highlight> to developers and designers.",
  "Significantly reduced the gap between design and development through <highlight>AI-powered code generation<highlight>.",
  "Enabled faster UI prototyping with real-time previews and seamless interactivity.",
  "Provided a secure, infrastructure-driven alternative to traditional integration tools.",
  "Improved collaboration by providing a unified platform for designing and generating front-end code.",
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

export default function Canvas() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={CanvasBG}
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
                    title="Canvas Platform"
                    description="We <highlight>developed a dynamic, browser-based design canvas</highlight> inspired by tools like Figma, using <highlight>Konva.js</highlight> and <highlight>Vue.js</highlight>. This platform allows users to create, edit, and manage interactive UI layouts with real-time responsiveness and precision. Featuring <highlight>drag-and-drop capabilities, layered object control,</highlight> and <highlight>component customization</highlight>, the tool offers a powerful in-browser design experience tailored for UI/UX workflows."
                  />
                  <TechUsed techUsed={TECH_USED} />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={CanvasImage1}
                  alt="clinic-management-image"
                  className="object-contain"
                />
                <ProcessCard process={PROOCESS} />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={CanvasImage2} alt="clinic-management-image" />
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
