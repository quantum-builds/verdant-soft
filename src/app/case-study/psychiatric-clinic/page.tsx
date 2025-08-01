import {
  ExpressIcon,
  FourNumber,
  NextIcon,
  NodeIcon,
  OneNumber,
  PostgreSQLIcon,
  PsychiatricClinicBG,
  PsychiatricClinicImage1,
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
    text: "Express Js",
    icon: ExpressIcon,
  },
  {
    text: "Postgre SQL",
    icon: PostgreSQLIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Addressing complex workflows for various mental health providers with differing documentation and treatment needs.",
  "Ensuring secure handling of sensitive patient data while maintaining compliance with healthcare regulations.",
  "Integrating clinical modules with seamless interaction between different parts of the system.",
  "Implementing flexible and granular access control for diverse user roles.",
  "Creating a user-friendly interface that enhances productivity without compromising accuracy.",
];

const SOLUTIONS = [
  "Developed a modular and scalable architecture allow for rapid iteration and clean separation of features.",
  "Designed intuitive and efficient UI/UX to support quick navigation and data entry for providers.",
  "Built robust modules for medications, allergies, visits, and lab orders, integrated with patient records and clinical notes.",
  "Implemented secure role-based access control (RBAC) to govern user permissions.",
  "Embedded compliance-focused features, including audit logs and secure handling of clinical data.",
];

const RESULTS = [
  "Streamlined clinical and administrative workflows, significantly improving the efficiency of daily operations.",
  "Enabled faster documentation and reduced manual effort for providers and support staff.",
  "Improved collaboration among psychiatrists and therapists through centralized access to patient information.",
  "Enhanced data security and compliance, boosting trust in the system's integrity.",
  "Delivered a flexible foundation that allows the clinic to scale and expand features over time.",
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

export default function PsychiatricClinicPage() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-2/3 object-cover"
            src={PsychiatricClinicBG}
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
                    title="Psychiatric Clinic and Hospital Management System"
                    description="We developed a comprehensive healthcare management system for a psychiatrist and therapist clinic, aimed at streamlining mental health service delivery. The platform enables efficient handling of patient records, appointment scheduling, clinical documentation, billing, and medication tracking. It supports multiple provider types including psychiatrists and therapists—and offers detailed functionality for managing patient visits, clinical notes, prescriptions, allergies, and lab orders. With built-in compliance features, role-based access control, and optimized workflows for outpatient care and insurance verification, the system centralizes the entire behavioral health care process. Our team specifically contributed by building the <highlight>medications, allergies, visits,</highlight> and <highlight>lab orders</highlight> modules."
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
                    <Image
                      src={PsychiatricClinicImage1}
                      alt="psychiatric-image"
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
