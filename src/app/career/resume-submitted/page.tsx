import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import { CareerBG, FormIcon } from "@/assets";
import Image from "next/image";
import { Breadcrumb } from "../components/BreadCrumbs";
import BackButton from "../components/BackButton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ ref: string }>;
}) {
  const { ref } = await searchParams;
  console.log("Ref: ", ref);

  const BREAD_CRUMBS = [
    { label: "Careers", href: "/career", isActive: false },
    {
      label:
        ref === "send-your-resume" ? "Send your resume" : "Apply for position",
      href:
        ref === "send-your-resume"
          ? `/career/send-your-resume`
          : `/career/apply-now`,
      isActive: false,
    },
    {
      label: "Resume Submitted",
      href: `/career/resume-submitted/?ref=${ref}`,
      isActive: true,
    },
  ];

  return (
    <div>
      <main className=" min-h-screen">
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
            <div className="w-11/12 xl:w-10/12 mx-auto flex flex-col gap-30">
              <div className="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0 ">
                <Breadcrumb
                  items={BREAD_CRUMBS}
                  className="order-2 md:order-1"
                />
                <BackButton />
              </div>
              <div className="flex justify-between gap-30">
                <div className="relative bg-gray w-full h-[300px]">
                  <div className="flex flex-col items-center justify-center gap-4 h-full">
                    <div className="w-full flex items-center justify-center ">
                      <Image
                        src={FormIcon}
                        alt="form-icon"
                        className="w-16 h-16"
                      />
                    </div>
                    {/* <h3 className="text-green-gradient w-1/4 text-3xl lg:text-4xl 3xl:text-[40px] 5xl:text-[45px] text-center font-semibold mb-4">
                      Application Successfully Submitted
                    </h3> */}
                    <h3 className="text-green-gradient max-w-[500px]  text-3xl lg:text-4xl 3xl:text-[40px] 5xl:text-[45px] text-center font-semibold mb-4">
                      Application Successfully Submitted
                    </h3>
                  </div>
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
