"use client";
import Image from "next/image";
import { useIsMobile } from "@/hook/useIsMobile";
import Link from "next/link";
import { ICaseStudies } from "./sections/CaseStudySection";

export default function CaseStudyCard({ title, link, image }: ICaseStudies) {
  const isMobile = useIsMobile();
  const isAlwaysVisible = isMobile === true;

  return (
    <div className="relative w-[280px] h-[240px] sm:w-[300px] sm:h-[260px] md:w-[320px] md:h-[280px] lg:w-[170px] lg:h-[150px] xl:w-[200px] xl:h-[180px] 2xl:w-[230px] 2xl:h-[190px] 3xl:w-[240px] 3xl:h-[220px] 4xl:w-[260px] 4xl:h-[220px] 5xl:w-[320px] 5xl:h-[280px] font-inter text-white overflow-hidden group rounded-3xl">
      <Image
        src={image}
        alt="feature-image"
        className={`relative w-[280px] h-[240px] sm:w-[300px] sm:h-[260px] md:w-[320px] md:h-[280px] lg:w-[170px] lg:h-[150px] xl:w-[200px] xl:h-[180px] 2xl:w-[230px] 2xl:h-[190px] 3xl:w-[240px] 3xl:h-[220px] 4xl:w-[260px] 4xl:h-[220px] 5xl:w-[320px] 5xl:h-[280px] filter grayscale-100 group-hover:grayscale-50 transition-all duration-500 ease-in-out 
          ${
            isAlwaysVisible
              ? "brightness-70"
              : "brightness-50 group-hover:brightness-70"
          }`}
        priority
      />
      <div className="absolute inset-0 z-10 p-4 lg:p-2 xl:p-3 2xl:p-4 4xl:p-4 flex flex-col justify-between group">
        <div>
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
              className="btn-3 text-sm rounded-xl border lg:border-white px-3 py-3 bg-transparent hover:bg-green-gradient w-fit hover:border-0 transition duration-1000 ease-in-out group flex items-center gap-2"
              style={{ "--clr": "#16a34a" } as React.CSSProperties}
            >
              <span>Explore More</span>

              <span className="button__icon-wrapper">
                <svg
                  width="10"
                  className="button__icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 15"
                >
                  <path
                    fill="currentColor"
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  />
                </svg>
                <svg
                  width="10"
                  className="button__icon-svg button__icon-svg--copy"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 15"
                >
                  <path
                    fill="currentColor"
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
