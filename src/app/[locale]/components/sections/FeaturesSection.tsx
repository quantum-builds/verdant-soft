"use client";
import { GraphImage, PhoneImage } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesSection() {
  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section
      id="features"
      className="overflow-hidden scroll-mt-28 mb-28 min-h-[220vh] md:min-h-[125vh] lg:min-h-[100vh] xl:min-h-[110vh] 2xl:min-h-[140vh] 3xl:min-h-[120vh] 4xl:min-h-[140vh] 5xl:min-h-[105vh]  w-11/12 mx-auto flex flex-col gap-16"
    >
      <div className=" flex flex-col gap-12">
        <p className="font-semibold text-2xl">[02 Features]</p>
        <div className="w-full flex justify-end">
          <motion.h2
            className="w-11/12 md:w-2/3 lg:w-3/5 2xl:w-8/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-end break-words"
            variants={slideFromRight}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className=" text-green-gradient">
              You’ll get more than just great work -
            </span>{" "}
            you’ll get results.
          </motion.h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row w-full gap-6 justify-between ">
        <div className="flex-3/5 md:flex-2/3 flex flex-col gap-6 flex-grow ">
          <motion.div
            className="flex-2/3 w-full rounded-xl flex-grow-0  bg-[#F9F9F9] flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 md:items-end pt-4 px-3  md:pt-0 md:px-4 2xl:px-8"
            variants={slideFromLeft}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Left Content */}
            <div className="flex-2/5 flex flex-col gap-5">
              <div className="flex flex-col md:py-5 2xl:py-16">
                <p className="font-bold xl:font-semibold  text-xl xl:text-2xl 2xl:text-[28px]">
                  Effortless Conversations
                </p>
                <p className="text-green-gradient text-sm lg:text:md xl:text-lg ">
                  Real-time updates and fast replies that make you feel like
                  we’re right there with you.
                </p>
              </div>
            </div>

            <div className="relative flex-3/5 h-full flex items-end justify-end">
              <Image
                src={PhoneImage}
                alt="Phone"
                className="w-80 md:w-90 lg:w-96 xl:w-104 2xl:w-120 3xl:w-150 4xl:w-190 5xl:w-220 h-auto"
              />
              <div className="absolute top-1/5 md:top-1/4 xl:top-[30%] -left-4 md:left-0 xl:left-6 -translate-y-1/2 rounded-lg px-3 py-1 md:py-2 text-[10px] xl:text-[12px] 2xl:text-sm font-semibold bg-white shadow">
                Just saw the first draft - this is 🔥🔥🔥
              </div>
              <div className="absolute w-1/2 bg-green-gradient text-white top-[36%] xl:top-[42%] right-0 xl:-right-1 -translate-y-1/2 rounded-lg px-3 py-1 md:py-2 text-[10px] xl:text-[12px]  2xl:text-sm font-semibold shadow">
                Yes! So glad you like it. Want me to prep a second direction
                too?
              </div>
              <div className="absolute top-[52%] md:top-[54%] -left-2  md:left-0 xl:left-6 -translate-y-1/2 rounded-lg px-3 py-1 md:py-2 text-[10px] xl:text-[12px] 2xl:text-sm font-semibold bg-white shadow">
                That would be amazing. You&apos;re killing it.
              </div>

              <div className="absolute w-1/2 bg-green-gradient text-white top-[68%] md:top-[67%] right-0 xl:-right-1 -translate-y-1/2 rounded-lg px-3 py-1  md:py-2 text-[10px] xl:text-[12px]  2xl:text-sm font-semibold shadow">
                Already on it. You&apos;ll have it by tomorrow afternoon.
              </div>
            </div>
          </motion.div>

          <div className="flex-1/3 flex flex-col md:flex-row gap-6 h-full">
            <motion.div
              className="flex-1 bg-[#1B1B1B] flex flex-col justify-center items-center gap-1  rounded-xl py-10"
              variants={slideFromLeft}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className=" text-green-gradient text-md xl:text-lg ">
                Projects launched in as little as
              </p>
              <p className="font-semibold text-white text-4xl xl:text-5xl 2xl:text-6xl">
                4 weeks
              </p>
            </motion.div>
            <motion.div
              className="flex-1 bg-[#F9F9F9] flex flex-col justify-center items-center gap-1  rounded-xl py-3"
              variants={slideFromBottom}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-[#1B1B1B] font-bold xl:font-semibold  text-xl xl:text-2xl 2xl:text-[28px]">
                Increase Growth
              </p>
              <p className="text-sm xl:text-lg text-green-gradient w-3/4 mx-auto text-center">
                Verdant Soft dedicated to boosting your business growth through
                innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="flex-2/5 md:flex-1/3 flex flex-col md:flex-row lg:flex-col justify-between gap-3 flex-grow"
          initial="hidden"
          whileInView="visible"
          variants={slideFromRight}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex-1/2 flex flex-col gap-0 bg-[#F9F9F9] rounded-xl px-3 xl:px-6 py-4 xl:pt-8 flex-grow-0 ">
            <p className="text-[#1B1B1B] font-bold xl:font-semibold text-xl xl:text-2xl 2xl:text-[28px] mb-1">
              Happy Client Rates
            </p>
            <p className="text-4xl xl:text-5xl 2xl:text-6xl text-green-gradient font-semibold">
              92%
            </p>
            <div className="flex items-center justify-center md:-mt-4 xl:-mt-12">
              <Image
                src={GraphImage}
                alt="Graph"
                className="w-60  md:w-50 lg:w-52 xl:w-60 2xl:w-70 3xl:w-84 4xl:w-96 5xl:w-126 h-auto"
              />
            </div>
          </div>
          <div className="flex-1/2 flex flex-col lg:gap-1  bg-[#F9F9F9] rounded-xl px-3 xl:px-6 pt-4 xl:pt-8 flex-grow">
            <p className="font-bold xl:font-semibold  text-xl xl:text-2xl 2xl:text-[28px] text-[#1B1B1B]">
              Stronger Presence
            </p>
            <p className="text-md xl:text-lg text-green-gradient ">
              Rank higher, get found faster, and stay top-of-mind.
            </p>
            <div className="flex flex-col relative w-full h-full whitespace-nowrap ">
              <div className="absolute mt-4 left-1/2 -translate-x-1/2 text-md xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold lg:px-2 2xl:px-4 lg:py-1 2xl:py-2 bg-white w-fit rounded-xl">
                <span className="text-green-gradient">90+</span> Completed
                projects
              </div>

              <div className="absolute left-2 top-18 2xl:top-20 3xl:top-32 text-md xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold lg:px-2 2xl:px-4 lg:py-1 2xl:py-2 bg-white w-fit rounded-xl -rotate-[10deg]">
                <span className="text-green-gradient">5+</span> Years of
                experience
              </div>

              <div className="absolute right-2 top-32 2xl:top-40 3xl:top-56 text-md xl:text-lg 2xl:text-xl  3xl:text-2xl font-semibold lg:px-2 2xl:px-4 lg:py-1 2xl:py-2 bg-white w-fit rounded-xl rotate-[15deg]">
                <span className="text-green-gradient">92%</span> Happy clients
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
