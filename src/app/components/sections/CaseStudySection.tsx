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

  const evenY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const oddY = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 30]);

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  // Get animation delay and initial position based on index
  const getCardAnimation = (index: number) => {
    let delay = 0;

    if (!isMobile) {
      // First wave: indices 1, 3 (0.2s, 0.3s)
      if (index === 1) delay = 0.2;
      else if (index === 3) delay = 0.3;
      // Second wave: all others except 6, 1, 3 (0.5s - 0.9s)
      else if (index !== 6) {
        const otherIndices = [0, 2, 4, 5, 7];
        const position = otherIndices.indexOf(index);
        delay = 0.5 + position * 0.1;
      }
      // Third wave: index 6 (1.0s)
      else if (index === 6) delay = 1.0;
    }

    return {
      hidden: {
        opacity: 0,
        y: isMobile ? 0 : 30, // Start 30px below original position on desktop
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    };
  };

  return (
    <section id="case-studies" className="scroll-mt-28" ref={containerRef}>
      <div className="overflow-hidden mb-28 lg:mb-0 md:h-[1390px] lg:h-[775px] xl:h-[870px] 2xl:h-[905px] 3xl:h-[970px] 4xl:h-[1010px] 5xl:h-[1180px] w-11/12 xl:w-10/12 mx-auto flex flex-col gap-16 lg:gap-52">
        <div className="flex flex-col gap-12">
          <p className="font-semibold text-2xl">[02 Case Studies]</p>
          <div className="w-full flex justify-end">
            <motion.h2
              className="w-11/12 md:w-[57%] lg:w-[55%] xl:w-3/5 2xl:w-7/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold text-end break-words text-footer-black"
              variants={slideFromRight}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <span className="text-green-gradient">Stories of our</span>{" "}
              transformations{" "}
              <span className="text-green-gradient">across</span> Services{" "}
              <span className="text-green-gradient">and</span> Industries
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-3 xl:gap-5 4xl:gap-8 lg:w-[900px] xl:w-[1090px] 2xl:w-[1270px] 3xl:w-[1420px] 4xl:w-[1500px] 5xl:w-[1800px] mx-auto">
          {CASE_STUDIES.map((feature, index) => {
            const isEven = index % 2 === 0;

            const transformClass =
              index === 2 || index === 6
                ? "lg:-translate-y-[10%]"
                : isEven
                ? "lg:translate-y-1/4"
                : "lg:-translate-y-1/2";

            const yValue = isEven ? evenY : oddY;

            return (
              <motion.div
                key={index}
                className={`${transformClass} transition-transform`}
                style={{
                  y: isMobile === false ? yValue : 0,
                }}
                variants={getCardAnimation(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: !isMobile
                    ? index === 1
                      ? 0.2
                      : index === 3
                      ? 0.3
                      : index !== 6
                      ? 0.5 + [0, 2, 4, 5, 7].indexOf(index) * 0.1
                      : 1.0
                    : 0,
                  duration: 0.6,
                  ease: "easeOut",
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
