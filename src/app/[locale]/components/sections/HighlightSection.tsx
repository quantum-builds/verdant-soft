"use client";

import { Highlight1, Highlight2, Highlight3 } from "@/assets";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface Highlights {
  text: string;
  image: StaticImageData | string;
}

export default function HighlightSection() {
  const t = useTranslations("HighlightSection");

  const highlights: Highlights[] = [
    { text: t("cardTitle"), image: Highlight1 },
    { text: t("cardTitle"), image: Highlight2 },
    { text: t("cardTitle"), image: Highlight3 },
    { text: t("cardTitle"), image: Highlight1 },
    { text: t("cardTitle"), image: Highlight2 },
    { text: t("cardTitle"), image: Highlight3 },
    { text: t("cardTitle"), image: Highlight1 },
    { text: t("cardTitle"), image: Highlight2 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="h-[75vh] mb-28 flex flex-col gap-16 w-full overflow-hidden">
      <p className="text-center text-2xl lg:text-[40px] font-semibold">
        {t.rich("sectionTitle", {
          highlight: (chunks) => (
            <span className="text-green-gradient">{chunks}</span>
          ),
        })}
      </p>

      <Swiper
        spaceBetween={24}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        mousewheel={{ forceToAxis: true }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="w-full px-6 flex-10/12"
      >
        {highlights.map((highlight, index) => (
          <SwiperSlide
            key={index}
            className="!w-10/12 lg:!w-2/3 xl:!w-1/2 2xl:!w-2/5 flex-shrink-0"
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <Image
                src={highlight.image}
                alt={`highlight-${index}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
                <p className="text-[28px] font-semibold">{highlight.text}</p>
                <a className="text-xl text-[#74AFAD] cursor-pointer">
                  {t("cardSubtitle")}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-2 mt-2">
        {highlights.map((_, index) => (
          <div
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-[#74AFAD]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
