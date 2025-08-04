import { DottedBG } from "@/assets";
import Image from "next/image";
import Navbar from "./../../components/Navbar";
import FooterSection from "./../../components/sections/FooterSection";
import WorkFlowSection from "../components/WorkFlowSection";
import FAQSection from "./../../components/sections/FAQSection";

const STEPS = [
  {
    step: 1,
    color: "#C72C91",
    description: "Requirement Definition",
  },
  {
    step: 2,
    color: "#0565FF",
    description: "Vendor Selection",
  },
  {
    step: 3,
    color: "#FF8800",
    description: "Contract & Planning",
  },
  {
    step: 4,
    color: "#4AA047",
    description: "Onboarding",
  },
  {
    step: 5,
    color: "#1BBFCC",
    description: "Execution & Monitoring",
  },
  {
    step: 6,
    color: "#5B57C2",
    description: "Delivery & Support",
  },
];

export default function ItTeamOutsourcingPage() {
  return (
    <main className="flex flex-col  overflow-hidden">
      <Navbar />

      <section className="relative w-11/12 xl:w-10/12 mx-auto min-h-[60vh] mb-20">
        <div className="hidden absolute top-40 lg:-right-10 xl:-right-10 3xl:right-0 lg:flex items-end justify-end z-20">
          <Image
            src={DottedBG}
            alt="Dotted Background"
            className="w-4/5 md:w-3/4 lg:w-2/3 2xl:w-9/12 3xl:w-11/12 5xl:w-full h-auto object-center lg:rotate-110 xl:rotate-100 3xl:rotate-90"
          />
        </div>
        <div className="max-w-11/12 lg:max-w-3/5 xl:max-w-1/2   mt-24 md:mt-32 xl:mt-40">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 text-footer-black inline-block leading-tight">
            <span className="text-green-gradient">IT Team</span> Outsourcing
          </h1>
          <p className="text-lg">
            Verdant Soft is a dynamic technology solutions provider dedicated to
            empowering businesses through innovative software development and IT
            services. Renowned for its commitment to quality and client
            satisfaction, Verdant Soft offers a wide range of solutions
            including custom software development, web and mobile app creation,
            cloud services, and IT consulting. Their team of skilled
            professionals leverages the latest technologies and industry best
            practices to deliver tailored solutions that meet each client’s
            unique needs. With a focus on transparency, collaboration, and
            cutting-edge innovation, Verdant Soft strives to enhance operational
            efficiency, drive digital transformation, and foster long-term
            growth for businesses across various sectors. Whether startups or
            established enterprises, clients trust Verdant Soft to deliver
            reliable, scalable, and cost-effective technology solutions.
          </p>
        </div>
      </section>
      <WorkFlowSection steps={STEPS} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
