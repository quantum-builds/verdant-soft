import Image from "next/image";
import {
  AdobeXDIcon,
  AfterAffectsIcon,
  AxureRpIcon,
  BalsamiqIcom,
  DottedBG,
  FigmaIcon,
  IllustratorIcon,
  InVisionIcon,
  LucideChartIcon,
  MiroIcon,
  MoqUpsIcon,
  PhotoShopIcon,
  SketchIcon,
  WhimsicalIcon,
  ZeplinIcon,
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
    description: "Research & Discovery",
  },
  {
    step: 2,
    color: "#0565FF",
    description: "Define & Plan",
  },
  {
    step: 3,
    color: "#FF8800",
    description: "Wireframing & Prototyping",
  },
  {
    step: 4,
    color: "#4AA047",
    description: "Visual Design",
  },
  {
    step: 5,
    color: "#1BBFCC",
    description: "Development & Implementation",
  },
  {
    step: 6,
    color: "#5B57C2",
    description: "Testing, Launch & Iteration",
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

      <section className="relative w-11/12 xl:w-10/12 mx-auto min-h-[80vh] mb-20">
        <div className="hidden absolute top-40 lg:-right-10 xl:-right-10 3xl:right-0 lg:flex items-end justify-end z-20">
          <Image
            src={DottedBG}
            alt="Dotted Background"
            className="w-4/5 md:w-3/4 lg:w-2/3 2xl:w-9/12 3xl:w-11/12 5xl:w-full h-auto object-center lg:rotate-110 xl:rotate-100 3xl:rotate-90"
          />
        </div>
        <div className="max-w-11/12 lg:max-w-3/5 xl:max-w-1/2  text-gray-800 mt-24 md:mt-32 xl:mt-40">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 text-green-gradient inline-block leading-tight">
            <span className="text-green-gradient">UI UX</span> Design
          </h1>
          <p className="text-lg">
            At our software house, we are dedicated to delivering exceptional
            UI/UX design solutions that not only look stunning but also provide
            an intuitive and engaging experience for users. Our team of skilled
            designers and developers work collaboratively to understand your
            unique business needs and target audience, ensuring that every
            design element aligns perfectly with your brand identity and goals.
            <br />
            <br />
            We specialize in creating customized user interfaces that are both
            visually appealing and highly functional. From wireframing and
            prototyping to final implementation, we prioritize user-centered
            design principles to craft seamless digital experiences. Our designs
            are optimized for usability across various devices and platforms,
            ensuring your users enjoy a consistent and enjoyable experience
            whether they access your product on a desktop, tablet, or mobile
            device.
            <br />
            <br /> Our approach is iterative and collaborative, involving you at
            every stage to incorporate feedback and refine the design. This
            ensures that the end product not only meets but exceeds your
            expectations. We pay close attention to detail, from color schemes
            and typography to interactive elements, making sure each component
            contributes to an engaging and memorable user journey.
            <br />
            <br /> Beyond aesthetics, we focus on enhancing functionality and
            usability, aiming to increase user engagement, retention, and
            satisfaction. Our solutions are tailored to your specific industry
            and target demographic, helping you stand out in a competitive
            market.
            <br />
            <br /> Partner with us to transform your digital presence with
            innovative, user-friendly, and visually stunning UI/UX designs that
            leave a lasting impression on your users and drive your business
            success.
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
