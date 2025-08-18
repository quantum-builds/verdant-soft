import {
  ECommerceBG,
  ECommerceImage1,
  ECommerceImage2,
  FourNumber,
  NestIcon,
  NextIcon,
  NodeIcon,
  OneNumber,
  PostgreSQLIcon,
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
    text: "Next Js",
    icon: NextIcon,
  },
  {
    text: "Node Js",
    icon: NodeIcon,
  },
  {
    text: "Nest Js",
    icon: NestIcon,
  },
  {
    text: "Postgre SQL",
    icon: PostgreSQLIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Supporting <highlight>multi-store management</highlight> with consistent performance across varying business sizes.",
  "Implementing a <highlight>secure and flexible role-based access system</highlight> to accommodate different user levels.",
  "Designing <highlight>intuitive and responsive UI</highlight> for non-technical users, handling complex backend operations.",
  "Building <highlight>real-time analytics and visualizations</highlight> that are both informative and performant.",
  "Ensuring system-wide <highlight>auditability and traceability</highlight> through a detailed activity log.",
];

const SOLUTIONS = [
  "Designed a <highlight>modular CMS system</highlight> to allow scalability and adaptability for various business needs.",
  "Developed a <highlight>dynamic role and permission management system</highlight>, enabling fine-grained access control.",
  "Designed and implemented an interactive <highlight>analytics dashboard</highlight> featuring charts and visualizations for real-time sales, orders, and performance tracking.",
  "Integrated an <highlight>activity log module</highlight> for real-time audit trails of user and system actions.",
  "Ensured a seamless user experience through clean, responsive interfaces and efficient backend logic.",
];

const RESULTS = [
  "Delivered a powerful CMS that allows businesses to manage products, inventory, and operations effortlessly.",
  "Improved operational efficiency through a user-friendly interface and streamlined workflows.",
  "Enhanced decision-making through live analytics and business intelligence features.",
  "Strengthened security and accountability via detailed access controls and activity tracking.",
  "Enabled scalability for businesses to manage multiple stores from a single, centralized platform.",
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

export default function ECommercePage() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={ECommerceBG}
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
                    title="E-Commerce Platform"
                    description="We developed a robust, role-based e-commerce CMS platform designed to empower businesses in efficiently managing the backend operations of their online stores. The system allows users to oversee multiple storefronts, manage product catalogs, track inventory, and streamline daily administrative tasks. A comprehensive analytics dashboard offers real-time insights into key business metrics such as sales performance, order trends, and store activity. The platform supports multiple user types with a flexible role and permission structure, ensuring secure, controlled access to sensitive features. Additionally, an integrated activity log module promotes transparency and accountability by tracking system-wide actions."
                  />
                  <TechUsed techUsed={TECH_USED} />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={ECommerceImage1}
                  alt="e-commerce-image"
                  className="object-contain"
                />
                <ProcessCard process={PROOCESS} />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={ECommerceImage2} alt="e-commerce-image" />
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
