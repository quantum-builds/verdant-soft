import {
  DentalCareBg,
  DentalCareImage1,
  DentalCareImage2,
  FourNumber,
  NextIcon,
  OneNumber,
  PostgreSQLIcon,
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
    text: "Next Js",
    icon: NextIcon,
  },
  {
    text: "Typescript",
    icon: TypeScriptIcon,
  },
  {
    text: "Postgre SQL",
    icon: PostgreSQLIcon,
  },
];

const PROJECT_CHALLENGES = [
  "Designing a platform that caters to both <highlight>patients</highlight> and <highlight>dental professionals</highlight>, each with distinct needs.",
  "Ensuring <highlight>secure handling of digital consent forms</highlight> while meeting legal and compliance standards.",
  "Creating an <highlight>admin panel</highlight> for managing educational content, user access, and course data.",
  "Integrating with multiple <highlight>third-party APIs</highlight> for booking, learning tools, and authentication.",
  "Delivering a consistent and intuitive user experience across all modules and user roles.",
];

const SOLUTIONS = [
  "Developed patient-facing features including <highlight>appointment booking, treatment information access,</highlight> and <highlight>service discovery,</highlight> all within a clean, user-friendly interface.",
  "Built a <highlight>learning and training module</highlight> with support for courses, workshops, and educational resources tailored for dental professionals and students.",
  "Designed and implemented a <highlight>custom admin panel</highlight> to manage course content, instructors, users, and reporting efficiently.",
  "Integrated a <highlight>secure digital consent management system</highlight> to ensure legal compliance and eliminate paperwork.",
  "Handled complete <highlight>frontend and backend development</highlight> using modern web technologies and optimized for scalability, speed, and security.",
];

const RESULTS = [
  "Delivered a feature-rich platform that modernizes dental care delivery and professional education.",
  "Enhanced patient engagement through simplified appointment booking and transparent treatment options.",
  "Provided dental professionals with accessible, centralized training resources and credential tracking.",
  "Reduced paperwork and administrative overhead through digital consent management.",
  "Enabled seamless scalability and adaptability across clinics, educators, and institutions.",
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

export default function DentalCarePage() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={DentalCareBg}
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
                    title="Dental Care & Learning Management System"
                    description="We built a comprehensive digital platform specifically designed for the dental industry, bringing together <highlight>patient services, professional education,</highlight> and <highlight>digital consent management</highlight> into a single, unified ecosystem. The platform streamlines access to dental care for patients while supporting dental professionals and students through specialized learning resources. It also introduces secure digital consent workflows, modernizing how patient approvals are collected and managed."
                  />
                  <TechUsed techUsed={TECH_USED} />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={DentalCareImage1}
                  alt="dental-care-image"
                  className="object-contain"
                />
                <ProcessCard process={PROOCESS} />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={DentalCareImage2} alt="dental-care-image" />
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
