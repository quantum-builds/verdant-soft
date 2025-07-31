import {
  FourNumber,
  MongoDbIcon,
  NodeIcon,
  OneNumber,
  ReactIcon,
  RealEstateBG,
  RealEstateImage1,
  ThreeNumber,
  TwoNumber,
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
    text: "React",
    icon: ReactIcon,
  },
  {
    text: "Node Js",
    icon: NodeIcon,
  },
  {
    text: "MongoDB",
    icon: MongoDbIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Designing a system that effectively serves diverse user types: buyers, sellers, renters, and agents.",
  "Implementing an advanced search experience with multiple filters and geolocation support.",
  "Building an interactive, real-time auction system for competitive property bidding.",
  "Managing property data efficiently while ensuring system performance and scalability.",
  "Creating a responsive, intuitive UI suitable for high-traffic usage across devices.",
];

const SOLUTIONS = [
  "Developed robust property listing features with detailed descriptions, pricing, images, and availability.",
  "Integrated advanced filtering and map-based search for enhanced user experience.",
  "Built a secure, real-time e-auction system that enables transparent bidding and offers.",
  "Implemented user account features including saved listings, notifications, and dashboards.",
  "Implemented user account features including saved listings, notifications, and dashboards.",
];

const RESULTS = [
  "Delivered a full-featured real estate platform that streamlines property discovery and transactions.",
  "Enabled real-time engagement and transparency through integrated auctions.",
  "Enhanced user satisfaction with fast, intuitive search and personalized features.",
  "Supported both individuals and agencies in managing their property needs efficiently.",
  "Laid a scalable foundation for future expansion and feature development.",
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
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-2/3 object-cover"
            src={RealEstateBG}
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
                    title="Real Estate Platform"
                    description="We developed an innovative real estate platform designed to simplify and modernize the entire property transaction experience. The platform enables users to seamlessly search, buy, sell, and rent both residential and commercial properties including houses, apartments, villas, and offices. With intuitive property listings, advanced search filters, and an interactive map view, users can easily discover properties that match their preferences. A key feature of the system is the integrated e-auction module, which allows dynamic and competitive property bidding in real time. Built to support both individual users and real estate professionals, the platform offers a complete and user-friendly solution for all real estate needs."
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
                    <Image src={RealEstateImage1} alt="real-estate-image" />
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
