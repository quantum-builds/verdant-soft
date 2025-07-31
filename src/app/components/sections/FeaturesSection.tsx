"use client";

import {
  ClinicManagementBG,
  DentalCareBg,
  ECommerceBG,
  ParkingAppBG,
  PsychiatricClinicBG,
  RealEstateBG,
  ShopifyBg,
  VPNExtensionBG,
} from "@/assets";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import FeatureCard from "../FeatureCard";

export interface IFeatures {
  title: string;
  link: string;
  image: StaticImageData;
}

const FEATURES: IFeatures[] = [
  {
    title: "Psychiatric Clinic and Hospital Management System",
    link: "/case-study/psychiatric-clinic",
    image: PsychiatricClinicBG,
  },
  {
    title: "E-commerce Platform",
    link: "/case-study/e-commerce",
    image: ECommerceBG,
  },
  {
    title: "Real Estate Platform",
    link: "/case-study/real-estate",
    image: RealEstateBG,
  },
  {
    title: "Parking Application",
    link: "/case-study/parking-app",
    image: ParkingAppBG,
  },
  {
    title: "VPN Extension & Subscription Management System",
    link: "/case-study/vpn-extension",
    image: VPNExtensionBG,
  },
  {
    title: "Dental Care & Learning Management System",
    link: "/case-study/dental-care",
    image: DentalCareBg,
  },
  {
    title: "Shopify Sync Platform",
    link: "/case-study/shopify",
    image: ShopifyBg,
  },
  {
    title: "Clinic Management System",
    link: "/case-study/clinic-management",
    image: ClinicManagementBG,
  },
];

export default function FeaturesSection() {
  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="features" className="scroll-mt-28">
      <div className="overflow-hidden mb-28 md:h-[1390px] lg:h-[675px] xl:h-[780px] 2xl:h-[835px] 3xl:h-[860px] 4xl:h-[900px] 5xl:h-[1070px]  w-11/12 xl:w-10/12  mx-auto flex flex-col gap-16 lg:gap-42">
        <div className=" flex flex-col gap-12">
          <p className="font-semibold text-2xl">[02 Featured Insights]</p>
          <div className="w-full flex justify-end">
            <motion.h2
              className="w-11/12 md:w-2/3 lg:w-3/5 2xl:w-8/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold text-end break-words"
              variants={slideFromRight}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <span className=" text-green-gradient">Stories of our</span>{" "}
              transformations{" "}
              <span className=" text-green-gradient">across</span> Services{" "}
              <span className=" text-green-gradient">and</span> Industries
            </motion.h2>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center gap-4 lg:gap-3 xl:gap-5 4xl:gap-8 lg:w-[900px] xl:w-[1090px] 2xl:w-[1270px] 3xl:w-[1420px] 4xl:w-[1500px] 5xl:w-[1800px] mx-auto">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "lg:translate-y-1/4 " : "lg:-translate-y-1/4 "
              } transition-transform`}
            >
              <FeatureCard
                title={feature.title}
                link={feature.link}
                image={feature.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
