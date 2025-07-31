"use client";
import Image from "next/image";
import { IFeatures } from "./sections/FeaturesSection";
import { useIsMobile } from "@/hook/useIsMobile";
import Link from "next/link";

export default function FeatureCard({ title, link, image }: IFeatures) {
  const isMobile = useIsMobile();
  const isAlwaysVisible = isMobile === true;

  return (
    <div className="relative w-[280px] h-[240px] sm:w-[300px] sm:h-[260px] md:w-[320px] md:h-[280px] lg:w-[170px] lg:h-[150px] xl:w-[200px] xl:h-[180px] 2xl:w-[230px] 2xl:h-[190px] 3xl:w-[240px] 3xl:h-[220px] 4xl:w-[260px] 4xl:h-[220px] 5xl:w-[320px] 5xl:h-[280px] font-inter text-white overflow-hidden group rounded-3xl">
      <Image
        src={image}
        alt="feature-image"
        className={`object-cover filter grayscale-100 group-hover:grayscale-50 transition-all duration-500 ease-in-out 
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
          <p className="lg:text-lg 4xl:text-2xl font-semibold lg:mb-1">
            Case Study
          </p>
          <p className="text-md 4xl:text-xl font-semibold line-clamp-2 mb-3">
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
              className="text-sm rounded-xl border lg:border-white px-4 py-2 bg-transparent hover:bg-green-gradient w-fit  hover:border-0 transition duration-1000 ease-in-out"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
