import {
  ClinicManagementBG,
  ClinicManagementImage1,
  ClinicManagementImage2,
  ExpressIcon,
  FourNumber,
  NodeIcon,
  OneNumber,
  PostgreSQLIcon,
  ReactIcon,
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
    text: "React Js",
    icon: ReactIcon,
  },
  {
    text: "Node Js",
    icon: NodeIcon,
  },
  {
    text: "Nest Js",
    icon: ExpressIcon,
  },
  {
    text: "Postgre SQL",
    icon: PostgreSQLIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Building a flexible and intuitive <highlight>slot management module</highlight> that accommodates varying doctor schedules.",
  "Creating a <highlight>patient-friendly booking flow</highlight> with minimal friction.",
  "Supporting <highlight>subscription management</highlight> with flexible plan configurations and renewals.",
  "Ensuring real-time updates and accurate availability across users.",
  "Delivering a system that enhances both <highlight>administrative efficiency</highlight> and <highlight>patient satisfaction</highlight>.",
];

const SOLUTIONS = [
  "Developed a responsive frontend using <highlight>React</highlight> for a smooth, user-centric experience.",
  "Built the backend with <highlight>Node.js</highlight>, handling real-time slot availability, appointment bookings, and subscription workflows.",
  "Implemented logic for <highlight>recurring visit plans</highlight>, subscription activation, and service-based billing.",
  "Designed intuitive admin views for doctors to manage availability, patient history, and upcoming appointments.",
  "Focused on clean UX/UI to reduce booking time and improve overall clinic operations.",
];

const RESULTS = [
  "Delivered an all-in-one platform that simplifies appointment and subscription management for clinics.",
  "Improved scheduling accuracy and reduced administrative load through automation.",
  "Enabled doctors to manage their time more effectively and offer consistent care options.",
  "Enhanced patient experience with quick booking, subscription access, and clear scheduling.",
  "Laid a scalable foundation for adding more advanced healthcare modules in the future.",
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

export default function ClinicManagement() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={ClinicManagementBG}
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
                    title="Clinic Management System"
                    description="We developed a comprehensive <highlight>clinical management platform</highlight> aimed at streamlining clinic operations and enhancing the patient booking experience. Designed for doctor-led clinics, the platform simplifies appointment scheduling through a flexible <highlight>slot management system</highlight>, allowing doctors to set their availability and patients to book visits effortlessly. In addition, it supports <highlight>subscription-based services,</highlight> enabling clinics to offer recurring plans or specialized care packages with ease."
                  />
                  <TechUsed techUsed={TECH_USED} />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={ClinicManagementImage1}
                  alt="clinic-management-image"
                  className="object-contain"
                />
                <ProcessCard process={PROOCESS} />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image
                      src={ClinicManagementImage2}
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
