"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface StatCardProps {
  label: string;
  title: string;
}

export default function AchievementCard({ label, title }: StatCardProps) {
  const slideFromBack = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      z: -100,
      y: -30,
      x: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      x: 0,
      y: 0,
    },
  };

  const parseLabel = (text: string) => {
    const match = text.match(/^([\d.,]+)(.*)$/);
    return match ? [match[1], match[2]] : [text, ""];
  };

  const [numberPart, suffixPart] = parseLabel(label);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col justify-center items-center gap-3 2xl:gap-4 font-inter"
      variants={slideFromBack}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <p className="font-semibold text-4xl 3xl:text-5xl text-green-gradient">
        {startCount && (
          <CountUp
            end={parseFloat(numberPart.replace(/,/g, ""))}
            start={0}
            duration={6}
            separator=","
            decimals={numberPart.includes(".") ? 1 : 0}
          />
        )}
        {suffixPart}
      </p>
      <p className="text-lg lg:text-xl whitespace-nowrap">{title}</p>
    </motion.div>
  );
}
