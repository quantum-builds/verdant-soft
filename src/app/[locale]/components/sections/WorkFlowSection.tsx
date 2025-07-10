"use client";

import { slideFromBottom, slideFromLeft } from "@/uitls/sliderAnimation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface IStepCircle {
  step: number;
  color: string;
}

interface StepCircleProps {
  index: number;
  step: number;
  color: string;
}
const STEPS: IStepCircle[] = [
  {
    step: 1,
    color: "#C72C91",
  },
  {
    step: 2,
    color: "#0565FF",
  },
  {
    step: 3,
    color: "#FF8800",
  },
  {
    step: 4,
    color: "#4AA047",
  },
  {
    step: 5,
    color: "#1BBFCC",
  },
  {
    step: 6,
    color: "#5B57C2",
  },
];

export default function WorkFlowSection() {
  const t = useTranslations("WorkFlowSection");
  return (
    <div
      id="workflow"
      className="h-[75vh] w-11/12 mx-auto flex flex-col gap-12 mb-28 overflow-hidden"
    >
      <p className="font-semibold text-2xl">[03 Workflow]</p>
      <div className="flex flex-col gap-20 flex-1">
        <motion.div
          className="flex flex-col gap-2"
          initial="hidden"
          whileInView="visible"
          variants={slideFromLeft}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="w-10/12 lg:w-2/3 text-2xl lg:text-4xl xl:text-6xl font-semibold">
            {t.rich("headline", {
              highlight: (chunks) => (
                <span className="text-green-gradient">{chunks}</span>
              ),
            })}
          </p>
          <p className="w-10/12 lg:w-2/3 text-2xl lg:text-4xl xl:text-6xl font-semibold">
            {t.rich("subheadline", {
              highlight: (chunks) => (
                <span className="text-green-gradient">{chunks}</span>
              ),
            })}
          </p>
        </motion.div>
        <motion.div
          className="w-full xl:w-3/4 lg:w-4/5 mx-auto flex-1 relative h-[400px] p-3"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between h-full w-full ">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className={`flex-1 flex ${
                  index % 2 === 0 ? "items-start" : "items-end"
                } justify-center`}
              >
                <StepCircles
                  index={index}
                  step={step.step}
                  color={step.color}
                />
              </div>
            ))}
          </div>
          {/* <Image
            src={WorkFlowImage}
            alt="workflow"
            className="w-full object-cover"
          /> */}
        </motion.div>
      </div>
    </div>
  );
}

function StepCircles({ index, step, color }: StepCircleProps) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const isHovered = hoveredIndex === index;

  return (
    <div
      className="bg-[#F9F9F9] lg:py-8 lg:px-16 flex flex-col items-center justify-center gap-1 rounded-full border transition-all duration-300"
      style={{
        borderColor: isHovered ? color : "transparent",
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(-1)}
    >
      <p
        className="text-lg md:text-xl xl:text-2xl transition-all duration-300"
        style={{ color: isHovered ? color : "black" }}
      >
        Step
      </p>
      <p
        className="text-7xl font-semibold transition-all duration-300"
        style={{ color: isHovered ? color : "black" }}
      >
        {step}
      </p>
    </div>
  );
}
