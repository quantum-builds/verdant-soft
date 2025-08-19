import {
  ETLManagementBG,
  ETLManagementImage1,
  ETLManagementImage2,
  FourNumber,
  OneNumber,
  PythonIcon,
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
    text: "Python",
    icon: PythonIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Supporting <highlight>multi-tenant deployments</highlight> while maintaining full data isolation and scalability.",
  "Building <highlight>custom ETL pipelines</highlight> that adapt to varying source/target systems.",
  "Managing <highlight>infrastructure-level operations</highlight>, including per-tenant orchestration on AWS.",
  "Ensuring reliable, automated data movement without a traditional user interface.",
  "Balancing customization and standardization across diverse client use cases.",
];

const SOLUTIONS = [
  "Developed and maintained custom <highlight>Python ETL scripts</highlight> using the <highlight>Singer SDK</highlight>, utilizing reusable taps and targets for structured data pipelines.",
  "Automated the deployment of <highlight>isolated tenant environments</highlight> in AWS, enabling secure, scalable processing.",
  "Implemented <highlight>monitoring and logging</highlight> to track ETL performance, failures, and data integrity.",
  "Focused on <highlight>infrastructure-centric automation</highlight> instead of frontend/backend application flows.",
  "Streamlined cross-system data integration through standardized patterns and reusable components.",
];

const RESULTS = [
  "Delivered a highly scalable, multi-tenant ETL platform that ensures robust and isolated data workflows.",
  "Enabled faster onboarding and deployment of new clients through automated instance provisioning.",
  "Improved data accuracy and processing reliability through well-maintained custom ETL pipelines.",
  "Provided a secure, infrastructure-driven alternative to traditional integration tools.",
  "Contributed to a system capable of handling complex data transformations across enterprise environments.",
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

export default function ETLManagement() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={ETLManagementBG}
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
                    title="ETL Management System"
                    description="We contributed to the development of a <highlight>scalable integration platform</highlight> with a <highlight>multi-tenant architecture</highlight>, purpose-built to streamline <highlight>data synchronization</highlight> and <highlight>ETL workflows</highlight> across a variety of client environments. Focused on automation, flexibility, and security, the platform enables seamless movement of data between systems using a modular, code-based approach."
                  />
                  <TechUsed techUsed={TECH_USED} />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={ETLManagementImage1}
                  alt="clinic-management-image"
                  className="object-contain"
                />
                <ProcessCard process={PROOCESS} />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image
                      src={ETLManagementImage2}
                      alt="clinic-management-image"
                    />
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
