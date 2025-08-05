"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface CaseStudySectionProps {
  caseStuies: { title: string; image: StaticImageData; link: string }[];
}
export default function CaseStudySection({
  caseStuies,
}: CaseStudySectionProps) {
  const router = useRouter();
  return (
    <div className="w-11/12 3xl:w-10/12   overflow-hidden lg:flex lg:flex-row  lg:scroll-smooth lg:scrollbar-hide cursor-pointer grid gap-4 md:grid-cols-2 xl:gap-8 md:auto-rows-auto mx-auto">
      {caseStuies.map((caseStudy, index) => (
        <div
          key={index}
          className="group bg-[#F9F9F9] flex flex-col gap-4 rounded-xl flex-[1_1_300px] max-w-[700px]"
          onClick={() => router.push(caseStudy.link)}
        >
          <Image
            src={caseStudy.image}
            alt={`blog-${index}`}
            className="w-full rounded-2xl h-[380px] lg:h-[250px] xl:h-[330px]  group-hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out"
          />
          <div className="w-11/12 mx-auto">
            <p className="text-xl font-semibold text-start  mb-4">
              {caseStudy.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
