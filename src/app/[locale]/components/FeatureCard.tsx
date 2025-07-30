"use client";
import Image from "next/image";
import { IFeatures } from "./sections/FeaturesSection";
import { Link } from "@/i18n/navigation";
import { useIsMobile } from "@/hook/useIsMobile";

export default function FeatureCard({ title, link, image }: IFeatures) {
  const isMobile = useIsMobile();
  const isAlwaysVisible = isMobile === true;

  return (
    <div className="relative w-[280px] h-[240px] sm:w-[300px] sm:h-[260px] md:w-[320px] md:h-[280px] lg:w-[170px] lg:h-[150px] xl:w-[190px] xl:h-[160px] 2xl:w-[230px] 2xl:h-[190px] 3xl:w-[260px] 3xl:h-[220px] 4xl:w-[260px] 4xl:h-[220px] 5xl:w-[320px] 5xl:h-[280px] font-inter text-white overflow-hidden group rounded-3xl">
      <Image
        src={image}
        alt="feature-image"
        className={`object-cover filter grayscale-100 transition-all duration-800 ease-in-out
          ${
            isAlwaysVisible
              ? "brightness-70"
              : "brightness-50 group-hover:brightness-70"
          }`}
        fill
        priority
      />
      <div className="absolute inset-0 z-10 p-4 lg:p-2 xl:p-3 2xl:p-4 4xl:p-4 flex flex-col justify-between">
        <div>
          <p className="lg:text-lg 4xl:text-2xl font-semibold lg:mb-1 4xl:mb-2">
            Case Study
          </p>
          <p className="text-md 4xl:text-xl font-semibold line-clamp-2 mb-5 4xl:mb-8">
            {title}
          </p>
          <div
            className={`transition-opacity duration-500 ${
              isAlwaysVisible
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <Link
              href={link}
              className="relative group/button text-sm sm:text-base rounded-xl border lg:border-white hover:border-none px-2 py-3 3xl:px-3 3xl:py-4 bg-transparent w-fit overflow-hidden transition-all duration-300 ease-in-out"
            >
              <span className="absolute inset-0 w-0 group-hover/button:w-full bg-green-gradient transition-all rounded-xl duration-300 ease-in-out z-0" />
              <span className="relative z-10 text-white transition-colors duration-200 ease-in-out">
                Explore More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
