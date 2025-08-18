import {
  FourNumber,
  OneNumber,
  ShopifyBg,
  ShopifyImage1,
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
    text: "Vue Js",
    icon: VueIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Ensuring <highlight>real-time synchronization</highlight> between the Shopify backend and Vue.js frontend.",
  "Managing <highlight>frequent product updates and inventory changes</highlight> with minimal latency.",
  "Delivering a fast, responsive user interface that adapts to real-time data.",
  "Handling order tracking and checkout-related data securely and efficiently.",
  "Creating a scalable structure to accommodate future store expansion.",
];

const SOLUTIONS = [
  "Integrated Shopify APIs to pull and sync <highlight>products, collections,</highlight> and <highlight>orders</highlight> in real time.",
  "Built a Vue.js frontend optimized for performance and dynamic content rendering.",
  "Developed automated processes for <highlight>inventory updates</highlight> and <highlight>order status</highlight> monitoring.",
  "Ensured seamless data flow and robust error handling between systems.",
  "Designed the entire application with scalability and maintainability in mind.",
];

const RESULTS = [
  "Delivered a <highlight>fully synchronized, real-time frontend</highlight> experience for the Shopify store.",
  "Significantly improved <highlight>store management efficiency</highlight> through automation.",
  "Enhanced customer experience with up-to-date product listings and live order tracking.",
  "Reduced manual intervention, minimizing errors in product and inventory handling.",
  "Laid a solid foundation for ongoing enhancements and feature expansions.",
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
            src={ShopifyBg}
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
                    title="Shopify Sync Platform"
                    description="We developed a seamless integration between a Shopify store and a Vue.js application, enabling real-time synchronization of products, collections, and orders. The goal was to create a dynamic and responsive frontend experience while maintaining a robust connection to Shopify’s backend. This solution was tailored to enhance e-commerce operations by automating product updates, enabling live order tracking, and streamlining inventory management."
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
                    <Image src={ShopifyImage1} alt="shopify-image" />
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
