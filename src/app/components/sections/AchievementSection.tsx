"use client";

import { motion } from "framer-motion";
import AchievementCard from "../AchievementCard";

const ACHIEVEMENTS = [
  {
    label: "500+",
    title: "Successful Projects",
  },
  {
    label: "36+",
    title: "Active Clients",
  },
  {
    label: "95%",
    title: "Client satisfaction rate",
  },
  {
    label: "5+",
    title: "Years of expertise",
  },
];

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function AchievementSection() {
  return (
    <div className="overflow-x-hidden min-h-[820px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[420px] 4xl:min-h-[460px] mb-28 flex flex-col justify-center items-center gap-14 xl:gap-20 w-11/12 xl:w-10/12 mx-auto text-black">
      <div className="flex flex-col justify-center items-center gap-6  xl:gap-8 w-full">
        <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl text-center">
          Pioneering Trust and Innovation
        </p>
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-6xl font-semibold text-center text-green-gradient"
          variants={slideFromLeft}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="text-green-gradient">Verdant Soft </span>
          Achievements
        </motion.p>
        <motion.p
          className="w-11/12 md:w-10/12 lg:w-2/3 2xl:w-2/5 text-md lg:text-xl text-center"
          variants={slideFromRight}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          We take pride in empowering businesses worldwide with innovative
          solutions. Verdant Soft bring an unwavering commitment to excellence,
          backed by a global presence.
        </motion.p>
      </div>

      <div className="bg-gray w-10/12 xl:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-5 p-8 rounded-xl">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementCard
            key={index}
            label={achievement.label}
            title={achievement.title}
          />
        ))}
      </div>
    </div>
  );
}
