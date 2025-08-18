import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import { CareerBG } from "@/assets";
import Image from "next/image";
import { Breadcrumb } from "../components/BreadCrumbs";
import ResumeFormWrapper from "./components/ResumeFormWrapper";
import BackButton from "../components/BackButton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ role: string }>;
}) {
  const { role } = await searchParams;
  const BREAD_CRUMBS = [
    { label: "Careers", href: "/career", isActive: false },
    {
      label: "Apply for position",
      href: `/career/apply-now?role=${role}`,
      isActive: true,
    },
  ];

  return (
    <div>
      <main className="min-h-[600px]">
        <div className=" z-10 h-full flex flex-col">
          <Navbar />
          <div className="w-full mt-16 md:mt-20 mb-28 flex flex-col gap-20 ">
            <div className="relative z-0 flex items-center justify-center">
              <Image
                className="w-full object-cover"
                src={CareerBG}
                alt="career background"
              />
              <h1 className="absolute z-10 text-white text-[30px] md:text-[60px] lg:text-[90px] 3xl:text-[110px] 5xl:text-[130px] font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Careers
              </h1>
            </div>
            <div className="w-11/12 xl:w-10/12 mx-auto flex flex-col gap-30 ">
              <div className="w-full flex justify-between ">
                <Breadcrumb items={BREAD_CRUMBS} />
                <BackButton />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-10 xl:gap-30">
                <div className="flex-[25%] flex flex-col gap-4 ">
                  <h3 className="text-green-gradient text-3xl lg:text-4xl 3xl:text-[40px] 5xl:text-[45px] font-semibold leading-tight">
                    Invest in your Career, Grow with Verdant Soft
                  </h3>
                  <p className="text-lg lg:text-xl">
                    Become a part of the fastest-growing team of innovators in
                    Pakistan.
                  </p>
                </div>
                <ResumeFormWrapper role={role} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
