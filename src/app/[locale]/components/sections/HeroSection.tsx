"use client";

import { useTranslations } from "next-intl";
import Navbar from "../Navbar";
import CTAButton from "../CTAButton";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "@/uitls/sliderAnimation";
import { DottedBG } from "@/assets";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  const CTAS = [
    {
      text: t("primaryCTA"),
      link: "/contact-us",
    },
    {
      text: t("secondaryCTA"),
      link: "/hire-us",
    },
  ];
  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="relative min-h-screen flex flex-col space-y-6 overflow-hidden bg-white mb-28">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#63aff5] rounded-full blur-[300px] z-0" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#85f3f1] rounded-full blur-[300px] z-0" />
      {/* <div className="flex justify-center">
        <Image
          src={DottedBG}
          alt="Dotted Background"
          width={600}
          height={400}
          className=" object-center"
        />
      </div> */}

      <Navbar />
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-5 mt-20 md:mt-24 xl:mt-28 mx-6 lg:mx-10 xl:mx-14 mb-5 bg-gray rounded-3xl">
        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl 4xl:text-6xl font-bold leading-tight font-inter w-11/12 sm:w-3/5  md:w-4/5 lg:w-3/5 2xl:w-[45%] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={slideFromLeft}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t.rich("headline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </motion.p>
        <motion.p
          className="text-md xl:text-xl leading-tight w-11/12 sm:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={slideFromRight}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t.rich("subheadline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-between "
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {CTAS.map((cta, index) => (
            <CTAButton key={index} text={cta.text} link={cta.link} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
