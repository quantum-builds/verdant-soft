import { StaticImageData } from "next/image";
import Image from "next/image";

interface TechUsedProps {
  techUsed: { text: string; icon: StaticImageData }[];
}
export default function TechUsed({ techUsed }: TechUsedProps) {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
        Technologies
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        {techUsed.map((tech, index) => (
          <div key={index} className="flex items-center gap-3 text-black">
            <Image src={tech.icon} className="w-9 h-9" alt="text" />
            <p className="text-xl 2xl:text-2xl">{tech.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
