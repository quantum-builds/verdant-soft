"use client";
import Navbar from "../Navbar";
import CTAButton from "../CTAButton";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "@/uitls/sliderAnimation";
import Link from "next/link";

export default function HeroSection() {
  // const CTAS = [
  //   {
  //     text: t("primaryCTA"),
  //     link: "/contact-us",
  //   },
  //   {
  //     text: t("secondaryCTA"),
  //     link: "/hire-us",
  //   },
  // ];

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

      <Navbar />
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-5 mt-20 md:mt-24 xl:mt-28 mx-6 lg:mx-10 xl:mx-14 mb-5 bg-gray rounded-3xl">
        {/* <div className="absolute bottom-10 lg:-left-6 3xl:left-0 flex items-start justify-start z-20">
          <Image
            src={DottedBG}
            alt="Dotted Background"
            className="w-full md:w-5/6 lg:w-[56%] xl:w-[62%] 3xl:w-[70%] 5xl:w-[87%] h-auto object-center lg:-rotate-15 xl:-rotate-5 3xl:-rotate-15"
          />
        </div>
        <div className="hidden absolute bottom-15 lg:-right-20 xl:-right-10 3xl:right-0 lg:flex items-end justify-end z-20">
          <Image
            src={DottedBG}
            alt="Dotted Background"
            className="w-4/5 md:w-3/4 lg:w-[62%] 2xl:w-[70%] 3xl:w-[87%] 5xl:w-[97%] opacity-60 h-auto object-center lg:rotate-110 xl:rotate-100 3xl:rotate-90"
          />
        </div> */}
        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl 4xl:text-6xl font-bold leading-tight font-inter w-11/12 sm:w-3/5  md:w-4/5 lg:w-3/5 2xl:w-[45%] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={slideFromLeft}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Empowering{" "}
          <span className="text-green-gradient">Businesses Through</span>{" "}
          Technology
        </motion.p>
        <motion.p
          className="text-md xl:text-xl leading-tight w-11/12 sm:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={slideFromRight}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Innovative software solutions tailored to empower businesses and
          streamline operations. Committed to excellence in technology and
          customer satisfaction.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-between "
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <CTAButton text="Book a Meeting" />

          <Link
            href="/hire-us"
            className="relative w-44 h-12 flex justify-center items-center border border-black hover:border-none font-medium cursor-pointer rounded-xl text-lg overflow-hidden group transition-all duration-200 ease-in-out"
          >
            <span className="absolute inset-0 w-0 group-hover:w-full bg-green-gradient transition-all duration-300 ease-in-out z-0" />
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-200 ease-in-out">
              Hire an Expert
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
