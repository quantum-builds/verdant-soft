import { CareerBG } from "@/assets";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";
import JobRoleSection from "./components/JobRoleSection";
import SendResume from "./components/SendResume";
import { fetchJobs } from "@/hook/fetchJobs";

export default async function CareerPage() {
  const jobs = await fetchJobs();
  return (
    <div>
      <main className=" min-h-screen">
        <div className=" z-10 h-full flex flex-col">
          <Navbar />
          <div className="w-full mt-20 md:mt-24 xl:mt-28 mb-28 flex flex-col gap-20 xl:gap-28 ">
            <div className="relative z-0 flex items-center justify-center">
              <Image
                className="w-full h-[200px] md:h-[270px] xl:h-[390px] object-cover"
                src={CareerBG}
                alt="career background"
              />
              <h1 className="absolute z-10 text-white text-[30px] md:text-[60px] lg:text-[90px] 3xl:text-[110px] 5xl:text-[130px] font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Careers
              </h1>
            </div>
            <div className="w-11/12 xl:w-10/12 mx-auto flex flex-col gap-36">
              <JobRoleSection jobs={jobs} />
              <SendResume />
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
