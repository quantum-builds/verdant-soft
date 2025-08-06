import Image from "next/image";
import {
  AdobeXDIcon,
  AfterAffectsIcon,
  AxureRpIcon,
  BalsamiqIcom,
  FigmaIcon,
  IllustratorIcon,
  InVisionIcon,
  LucideChartIcon,
  MiroIcon,
  MoqUpsIcon,
  PhotoShopIcon,
  SketchIcon,
  UiUxServiceBG,
  WhimsicalIcon,
  ZeplinIcon,
  Step1Line,
  Step2Line,
  Step3Line,
  Step4Line,
  Step5Line,
  Step6Line,
} from "@/assets";
import Navbar from "./../../components/Navbar";
import FooterSection from "./../../components/sections/FooterSection";
import WorkFlowSection from "../components/WorkFlowSection";
import FAQSection from "./../../components/sections/FAQSection";
import { IUseCase } from "@/common";
import TechnologiesSection from "../components/TechnologiesSection";

const STEPS = [
  {
    step: 1,
    color: "#C72C91",
    title: "Research & Discovery",
    lineImage: Step1Line,
    description:
      "Understand the users, business goals, and market context through interviews, surveys, and competitor analysis.",
  },
  {
    step: 2,
    color: "#0565FF",
    title: "User Personas",
    lineImage: Step2Line,
    description:
      "Develop detailed user personas and map their journeys to understand needs, pain points, and key interactions for improved user experience.",
  },
  {
    step: 3,
    color: "#FF8800",
    title: "Architecture & Wireframing",
    lineImage: Step3Line,
    description:
      "Organize content and structure through sitemaps and develop low-fidelity wireframes to outline layout and functionality.",
  },
  {
    step: 4,
    color: "#4AA047",
    title: "Design & Prototyping",
    lineImage: Step4Line,
    description:
      "Design and prototyping in UI/UX involve creating visual layouts and interactive models to optimize user experience and functionality before development.",
  },
  {
    step: 5,
    color: "#1BBFCC",
    title: "Testing & Validation",
    lineImage: Step5Line,
    description:
      "Conduct usability testing with real users, gather feedback, and identify areas for improvement.",
  },
  {
    step: 6,
    color: "#5B57C2",
    title: "Implementation & Iteration",
    lineImage: Step6Line,
    description:
      "Collaborate with developers for implementation, monitor performance post-launch, and iterate based on user feedback and analytics.",
  },
];

const USE_CASES: IUseCase[] = [
  {
    title: "Design & Prototyping",
    technologies: [
      { title: "Figma", image: FigmaIcon },
      { title: "Adobe XD", image: AdobeXDIcon },
      { title: "Sketch", image: SketchIcon },
      { title: "InVision", image: InVisionIcon },
      { title: "Axure RP", image: AxureRpIcon },
    ],
  },
  {
    title: "Wireframing & Flowchart",
    technologies: [
      { title: "Balsamiq", image: BalsamiqIcom },
      { title: "Whimsical", image: WhimsicalIcon },
      { title: "Lucidchart", image: LucideChartIcon },
    ],
  },
  {
    title: "Collaboration & Handoff",
    technologies: [
      { title: "Miro", image: MiroIcon },
      { title: "Zeplin", image: ZeplinIcon },
    ],
  },
  {
    title: "Additional Useful Tools",
    technologies: [
      { title: "Photoshop", image: PhotoShopIcon },
      { title: "illustrator", image: IllustratorIcon },
      { title: "After Affects", image: AfterAffectsIcon },
      { title: "Moqups", image: MoqUpsIcon },
    ],
  },
];

export default function UiUxDesignPage() {
  return (
    <main className="flex flex-col  overflow-hidden">
      <Navbar />

      <section className="relative mb-20">
        {/* Background image with overlay */}
        <div className="relative inset-0 z-0">
          <Image
            className="w-full h-[80vh] object-cover"
            src={UiUxServiceBG}
            alt="hero background"
          />
          <div className="absolute inset-0 bg-hero-gradient z-10" />
        </div>

        {/* Text content - centered vertically, aligned to the right */}
        <div className="absolute top-1/2 left-1/12 transform -translate-y-1/2  z-20 max-w-11/12 md:max-w-3/5 lg:max-w-[45%] 2xl:max-w-1/3 pr-4">
          <h1 className="text-center text-[40px] lg:text-[54px] xl:text-[70px] 2xl:text-[80px] font-bold mb-2 xl:mb-6 text-white leading-tight">
            UI UX Design
          </h1>
          <p className="text-lg lg:text-xl text-white text-start">
            At our software house, we craft stunning, user-friendly UI/UX
            designs tailored to your brand and audience. Our collaborative
            process ensures seamless, responsive experiences across all devices.
            We focus on aesthetics, functionality, and user engagement to boost
            satisfaction and retention. Partner with us to elevate your digital
            presence and drive business success.
          </p>
        </div>
      </section>

      <WorkFlowSection steps={STEPS} />
      <TechnologiesSection
        title="<highlight>UI UX </highlight>Design
Tools & Technologies"
        useCases={USE_CASES}
      />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
