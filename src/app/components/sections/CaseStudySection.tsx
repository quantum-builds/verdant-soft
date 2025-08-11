"use client";

import {
  ClinicManagement,
  DentalCare,
  ECommerce,
  HospitalManagement,
  ParkingApplication,
  RealEstate,
  ShopifySync,
  VpnExtension,
} from "@/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImageData } from "next/image";
import { useRef } from "react";
import CaseStudyCard from "../CaseStudyCard";
import { useIsMobile } from "@/hook/useIsMobile";

export interface ICaseStudies {
  title: string;
  link: string;
  image: StaticImageData;
}

const CASE_STUDIES: ICaseStudies[] = [
  {
    title: "Psychiatric Clinic and Hospital Management System",
    link: "/case-study/psychiatric-clinic",
    image: HospitalManagement,
  },
  {
    title: "E-commerce Platform",
    link: "/case-study/e-commerce",
    image: ECommerce,
  },
  {
    title: "Real Estate Platform",
    link: "/case-study/real-estate",
    image: RealEstate,
  },
  {
    title: "Parking Application",
    link: "/case-study/parking-app",
    image: ParkingApplication,
  },
  {
    title: "VPN Extension & Subscription Management System",
    link: "/case-study/vpn-extension",
    image: VpnExtension,
  },
  {
    title: "Dental Care & Learning Management System",
    link: "/case-study/dental-care",
    image: DentalCare,
  },
  {
    title: "Shopify Sync Platform",
    link: "/case-study/shopify",
    image: ShopifySync,
  },
  {
    title: "Clinic Management System",
    link: "/case-study/clinic-management",
    image: ClinicManagement,
  },
];

export default function CaseStudySection() {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const evenY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const oddY = useTransform(scrollYProgress, [0, 0.5, 1], [-60, 0, 60]);

  return (
    <section id="case-studies" className="scroll-mt-28" ref={containerRef}>
      <div className="overflow-hidden mb-20 md:mb-0 md:h-[1410px] lg:h-[680px] xl:h-[770px] 2xl:h-[810px] 3xl:h-[880px] 4xl:h-[880px] 5xl:h-[1080px] w-11/12 xl:w-10/12 mx-auto flex flex-col gap-16 lg:gap-52">
        <div className="flex flex-col gap-12">
          <div className="w-full flex justify-end">
            <h2 className="w-11/12 md:w-[57%] lg:w-[55%] xl:w-3/5 2xl:w-7/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold text-end break-words text-footer-black">
              <span className="text-green-gradient">Stories of our</span>{" "}
              transformations{" "}
              <span className="text-green-gradient">across</span> Services{" "}
              <span className="text-green-gradient">and</span> Industries
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-3 xl:gap-5 4xl:gap-8 lg:w-[900px] xl:w-[1090px] 2xl:w-[1270px] 3xl:w-[1420px] 4xl:w-[1500px] 5xl:w-[1800px] mx-auto">
          {CASE_STUDIES.map((feature, index) => {
            const isEven = index % 2 === 0;

            const transformClass =
              index === 2 || index === 6
                ? "lg:-translate-y-1/2"
                : isEven
                ? "lg:translate-y-[1%]"
                : "lg:-translate-y-1/2";

            const yValue = isEven ? evenY : oddY;

            return (
              <motion.div
                key={index}
                className={transformClass}
                style={{
                  y: !isMobile ? yValue : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                }}
              >
                <CaseStudyCard
                  title={feature.title}
                  link={feature.link}
                  image={feature.image}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
