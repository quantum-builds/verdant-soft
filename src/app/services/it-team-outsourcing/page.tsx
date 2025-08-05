import {
  ItTeamImage1,
  ItTeamImage2,
  ItTeamImage3,
  ItTeamImage4,
  ItTeamImage5,
} from "@/assets";
import Image from "next/image";
import Navbar from "./../../components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";

const BENEFITS = [
  "Efficiency",
  "Access to top-tier IT talent",
  "Focus on strategic initiatives while we handle day-to-day IT operations",
  "Scalability and flexibility",
  "Risk mitigation with experienced professionals",
];

const DEDICATED_IT = [
  "Custom-built teams aligned with your business needs.",
  "Skilled professionals in software development, network management, support, and more.",
  "Flexible engagement models (full-time, part-time, project-based).",
];

const PROJECT_BASED = [
  "End-to-end management of specific IT projects.",
  "Agile and waterfall methodologies.",
  "Clear deliverables and timelines.",
];

const MANAGE_IT = [
  "Proactive monitoring and maintenance.",
  "24/7 support.",
  "Infrastructure management and cloud services.",
];

const OFFSHORE_DEV = [
  "Cost-effective development teams.",
  "Expertise across various technologies and industries.",
  "Seamless communication and collaboration.",
];

export default function ItTeamOutsourcingPage() {
  return (
    <main className="flex flex-col  overflow-hidden">
      <Navbar />

      <section className="relative w-11/12 xl:w-10/12 mx-auto min-h-[60vh] mb-20 flex flex-col gap-10 lg:gap-20 2xl:gap-30">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 justify-center mt-24 md:mt-32 xl:mt-40">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 text-footer-black inline-block leading-tight">
              <span className="text-green-gradient">IT Team</span> Outsourcing
            </h1>
            <p className="text-lg lg:text-xl max-w-3xl">
              Verdant Soft is a tech solutions provider focused on empowering
              businesses with innovative software development and IT services.
              <br />
              They offer custom software, web and mobile apps, cloud services,
              and consulting. Their skilled team uses the latest technologies to
              deliver tailored, reliable solutions.
              <br />
              Committed to quality and collaboration, Verdant Soft drives
              digital transformation and long-term growth for clients across
              various sectors.
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full min-h-[200px]  md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] flex justify-center items-center rounded-2xl overflow-hidden   hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out">
              <Image
                src={ItTeamImage1}
                alt="custom-software-img1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 justify-center">
          <div className="flex-1 order-2 lg:order-1">
            <div className="w-full min-h-[400px]  md:h-[500px] lg:h-[800px] xl:h-[850px] 2xl:h-[900px] flex justify-center items-center rounded-2xl overflow-hidden   hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out">
              <Image
                src={ItTeamImage2}
                alt="custom-software-img1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 text-footer-black inline-block leading-tight">
              Benefits of Partnering with
              <span className="text-green-gradient"> Verdant Soft</span>
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl ">
              {BENEFITS.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 justify-center ">
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-footer-black inline-block leading-tight">
              IT{" "}
              <span className="text-green-gradient">
                Team Outsourcing Services
              </span>{" "}
              we offer
            </h2>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[34px] font-bold text-green-gradient inline-block leading-tight">
                Dedicated IT Teams
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl ">
                {DEDICATED_IT.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[34px] font-bold text-green-gradient inline-block leading-tight">
                Project-Based Outsourcing
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl ">
                {PROJECT_BASED.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 flex items-end">
            <div className="w-full min-h-[300px]  md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] flex justify-center items-center rounded-2xl overflow-hidden   hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out">
              <Image
                src={ItTeamImage3}
                alt="custom-software-img1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 justify-center  ">
          <div className="flex flex-col  gap-6 flex-1">
            <h3 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[34px]  font-bold text-green-gradient inline-block leading-tight">
              Managed IT Services
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl ">
              {MANAGE_IT.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h3 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[34px] font-bold text-green-gradient inline-block leading-tight">
              Offshore Development
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl ">
              {OFFSHORE_DEV.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-10/12 2xl:w-8/12 5xl:w-1/2 mx-auto">
          <div className=" mb-30 md:mb-45  lg:mb-50">
            <div className="relative w-fit">
              <div className="rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 ease-in-out w-[250px] md:w-[500px] lg:w-[650px] xl:w-[700px] 2xl:w-[750px] 3xl:w-[800px]  h-[200px]  md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] ">
                <Image
                  src={ItTeamImage4}
                  alt="custom-software-img1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-30 md:-bottom-45 3xl:-bottom-40 -right-30 md:-right-80 lg:-right-110 xl:-right-120 2xl:-right-130 3xl:-right-140 w-[250px] md:w-[500px] lg:w-[650px] xl:w-[700px] 2xl:w-[750px] 3xl:w-[800px]  h-[200px]  md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]  rounded-2xl overflow-hidden  grayscale hover:grayscale-0 transition-all duration-300 ease-in-out z-10 p-4 bg-white">
                <Image
                  src={ItTeamImage5}
                  alt="custom-software-img2"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
