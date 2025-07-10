"use client";
import { GraphImage, PhoneImage } from "@/assets";
import { slideFromRight } from "@/uitls/sliderAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="overflow-hidden scroll-mt-28 mb-28  min-h-[140vh] w-11/12 mx-auto flex flex-col gap-16"
    >
      <div className=" flex flex-col gap-12">
        <p className="font-semibold text-2xl">[02 Features]</p>
        <div className="w-full flex justify-end">
          <motion.h2
            className="w-full sm:w-4/5 md:w-3/4 lg:w-[55%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black leading-tight text-end break-words"
            variants={slideFromRight}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
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
      <div className="flex-1 flex w-full gap-6 justify-between overflow-x-auto">
        <div className="flex-2/3 flex flex-col gap-6 flex-grow ">
          <div className="flex-2/3 w-full rounded-xl px-8 bg-[#F9F9F9] flex justify-between items-end gap-6">
            {/* Left Content */}
            <div className="flex flex-col gap-5">
              <div className="h-full flex flex-col py-6">
                <div className="flex-3/5"></div>
                <div className="flex flex-col py-16">
                  <p className="font-semibold text-3xl">
                    Effortless Conversations
                  </p>
                  <p className="text-green-gradient text-lg w-4/5">
                    Real-time updates and fast replies that make you feel like
                    we’re right there with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-[55%] h-full flex items-center justify-center">
              <Image
                src={PhoneImage}
                alt="Phone"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-1/3 -left-5 -translate-y-1/2 rounded-lg px-3 py-2 text-sm font-semibold bg-white shadow">
                Just saw the first draft - this is 🔥🔥🔥
              </div>
              <div className="absolute w-1/2 bg-green-gradient text-white top-2/5 right-5 -translate-y-1/2 rounded-lg px-3 py-2 text-sm font-semibold shadow">
                Yes! So glad you like it. Want me to prep a second direction
                too?
              </div>
              <div className="absolute top-1/2 -left-5 -translate-y-1/2 rounded-lg px-3 py-2 text-sm font-semibold bg-white shadow">
                That would be amazing. You&apos;re killing it.
              </div>

              <div className="absolute w-1/2 bg-green-gradient text-white top-3/5 right-5 -translate-y-1/2 rounded-lg px-3 py-2 text-sm font-semibold shadow">
                Already on it. You&apos;ll have it by tomorrow afternoon.
              </div>
            </div>
          </div>

          <div className="flex-1/3 flex gap-6 h-full">
            <div className="flex-1 bg-[#1B1B1B] flex flex-col justify-center items-center gap-5 h-full rounded-xl">
              <p className="text-green-gradient text-lg">
                Projects launched in as little as
              </p>
              <p className="font-semibold text-white text-6xl">4 weeks</p>
            </div>
            <div className="flex-1 bg-[#F9F9F9] flex flex-col  justify-center items-center gap-5 rounded-xl">
              <p className="text-[#1B1B1B] font-semibold text-3xl">
                Increase Growth
              </p>
              <p className="text-lg text-green-gradient w-3/4 mx-auto text-center">
                Verdant Soft dedicated to boosting your business growth through
                innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1/3 flex flex-col justify-between gap-6 flex-grow">
          <div className="flex-1 flex flex-col gap-3 bg-[#F9F9F9] rounded-xl px-6 py-16">
            <p className="text-[#1B1B1B] font-semibold text-3xl ">
              Happy Client Rates
            </p>
            <p className="text-6xl text-green-gradient">92%</p>
            <div className="w-full flex items-center justify-center">
              <Image
                src={GraphImage}
                alt="Graph"
                className="w-2/3 h-full object-cover "
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col  gap-5 bg-[#F9F9F9] rounded-xl px-6 py-16">
            <p className="font-semibold text-3xl">Stronger Presence</p>
            <p className="text-lg text-green-gradient ">
              Rank higher, get found faster, and stay top-of-mind.
            </p>
            <div className="flex flex-col gap-28 relative w-full">
              <div className="absolute left-1/2 -translate-x-1/2 text-xl font-semibold px-4 py-2 bg-white w-fit rounded-xl">
                <span className="text-green-gradient">90+</span> Completed
                projects
              </div>

              <div className="absolute left-16 top-24 text-xl font-semibold px-4 py-2 bg-white w-fit rounded-xl -rotate-[10deg]">
                <span className="text-green-gradient">5+</span> Years of
                experience
              </div>

              <div className="absolute right-16 top-48 text-xl font-semibold px-4 py-2 bg-white w-fit rounded-xl rotate-[15deg]">
                <span className="text-green-gradient">92%</span> Happy clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
