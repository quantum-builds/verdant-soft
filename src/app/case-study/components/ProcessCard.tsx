import { ProcessBGDown, ProcessBGUp, VerdantGreenLogo } from "@/assets";
import Image, { StaticImageData } from "next/image";

interface ProcessCardProps {
  process: { title: string; description: string; image: StaticImageData }[];
}
export default function ProcessCard({ process }: ProcessCardProps) {
  return (
    <div className="relative bg-[#F7F7F7] min-h-[1000px]">
      <div className="absolute top-0 z-0">
        <Image src={ProcessBGUp} alt="process-up" />
      </div>
      <div className="absolute bottom-0 z-0">
        <Image src={ProcessBGDown} alt="process-up" />
      </div>

      <div className="py-20 lg:py-28 xl:py-32 w-11/12 mx-auto flex flex-col md:flex-row  gap-8">
        <div className="flex-1/3 flex flex-col items-center md:items-start gap-10">
          <Image
            src={VerdantGreenLogo}
            alt="verdant-logo"
            className="w-40 h-10"
          />
          <p className="font-bold text-3xl xl:text-[40px] text-center">
            The Process
          </p>
        </div>
        <div className="flex-2/3 flex flex-col gap-10 ">
          {process.map((process, index) => (
            <div key={index} className="flex flex-col gap-5">
              <Image
                src={process.image}
                className="w-14 h-12"
                alt="one-number"
              />
              <p className="text-2xl font-semibold">{process.title}</p>
              <p className="text-lg lg:text-xl">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
