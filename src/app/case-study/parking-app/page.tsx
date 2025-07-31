import {
  FourNumber,
  NodeIcon,
  OneNumber,
  ParkingAppBG,
  ParkingAppImage1,
  ParkingAppImage2,
  ReactIcon,
  ThreeNumber,
  TwoNumber,
  TypeScriptIcon,
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
    text: "Typescript",
    icon: TypeScriptIcon,
  },
  {
    text: "Node Js",
    icon: NodeIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Implementing <highlight>zone-based session tracking</highlight> with accurate start and end timing.",
  "Integrating <highlight>secure payment processing</highlight> for session-based billing.",
  "Delivering <highlight>real-time SMS notifications</highlight> to users with reliability and low latency.",
  "Ensuring <highlight>secure handling of credit card information</highlight> with full PCI compliance.",
  "Creating a clean, responsive UI suitable for users on the go.",
];

const SOLUTIONS = [
  "Built a robust frontend using <highlight>React</highlight> for a fast and mobile-friendly user experience.",
  "Developed the backend with <highlight>NestJS</highlight>, enabling efficient session management and API integrations.",
  "Integrated <highlight>Stripe</highlight> for secure and seamless payment processing.",
  "Implemented real-time <highlight>SMS notifications</highlight> for session start/end using third-party messaging services.",
  "Designed the system architecture to support scalability and ensure high availability.",
];

const RESULTS = [
  "Delivered a fully functional, end-to-end parking management platform.",
  "Enabled real-time user updates and automated payment processing.",
  "Enhanced user trust and experience through secure transactions and clear communication.",
  "Reduced friction in urban parking by digitizing zone-based management.",
  "Provided a scalable solution ready for expansion to additional cities or zones.",
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

export default function ParkingAppPage() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-2/3 object-cover"
            src={ParkingAppBG}
            alt="hero background"
          />
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>

        <div className=" z-10 h-full flex flex-col">
          <Navbar />

          <div className="relative z-10 w-full px-4 mt-[50vh] mb-20">
            <div className="bg-white max-w-7xl mx-auto rounded-xl">
              <div className="flex flex-col gap-16 lg:gap-32 w-full">
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <CaseStudyHeader
                    title="Parking Application"
                    description="We developed a zone-based parking application that offers users a convenient, secure, and intuitive way to manage their parking sessions. The platform enables users to select a parking zone, initiate a session, and receive real-time SMS notifications at the start and end of their parking period. Designed with both usability and reliability in mind, the app ensures smooth session tracking and streamlined communication with users throughout the process."
                  />
                  <TechUsed techUsed={TECH_USED} />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={ParkingAppImage1}
                  alt="parking-image"
                  className="object-contain"
                />
                <ProcessCard process={PROOCESS} />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={ParkingAppImage2} alt="parking-image" />
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
