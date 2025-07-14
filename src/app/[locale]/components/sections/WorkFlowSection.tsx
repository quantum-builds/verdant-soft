"use client";

import { LeftLine, LowerElipse, RightLine, UpperElipse } from "@/assets";
import { slideFromBottom, slideFromLeft } from "@/uitls/sliderAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface IStepCircle {
  step: number;
  color: string;
  description: string;
}

interface StepCircleProps {
  index: number;
  step: number;
  color: string;
  total: number;
  hoveredIndex: number;
  description: string;
  setHoveredIndex: (index: number) => void;
}

const STEPS: IStepCircle[] = [
  {
    step: 1,
    color: "#C72C91",
    description: "Planning & Requirement Analysis",
  },
  {
    step: 2,
    color: "#0565FF",
    description: "Design",
  },
  {
    step: 3,
    color: "#FF8800",
    description: "Development",
  },
  {
    step: 4,
    color: "#4AA047",
    description: "Testing",
  },
  {
    step: 5,
    color: "#1BBFCC",
    description: "Deployment",
  },
  {
    step: 6,
    color: "#5B57C2",
    description: "Maintenance & Updates",
  },
];

export default function WorkFlowSection() {
  const t = useTranslations("WorkFlowSection");
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div
      id="workflow"
      className="scroll-mt-36 h-[530px] md:h-[550px] lg:h-[600px] xl:h-[650px] 2xl:h-[675px]  4xl:h-[700px] 5xl:h-[750px] w-11/12 mx-auto flex flex-col gap-12 mb-28 overflow-hidden"
    >
      <p className="font-semibold text-2xl">[03 Workflow]</p>
      <div className="flex flex-col gap-20 flex-1">
        <motion.p
          className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-3/5 2xl:w-8/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold"
          initial="hidden"
          whileInView="visible"
          variants={slideFromLeft}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t.rich("headline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </motion.p>
        <motion.div
          className="w-full md:w-[670px] 2xl:w-[1270px] xl:w-[1130px] lg:w-[900px]  5xl:w-[1300px] mx-auto flex-1 relative h-[400px] pb-10"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="hidden md:flex justify-between h-full w-full ">
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
                  total={STEPS.length}
                  hoveredIndex={hoveredIndex}
                  description={step.description}
                  setHoveredIndex={setHoveredIndex}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 md:hidden gap-4 h-full w-full ">
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
                  total={STEPS.length}
                  hoveredIndex={hoveredIndex}
                  description={step.description}
                  setHoveredIndex={setHoveredIndex}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StepCircles({
  index,
  step,
  color,
  description,
  total,
  hoveredIndex,
  setHoveredIndex,
}: StepCircleProps) {
  const isHovered = hoveredIndex === index;

  const shouldShowLine =
    hoveredIndex >= 0 && index < hoveredIndex && index < total - 1;
  const shouldShowEllipse = hoveredIndex >= 0 && index <= hoveredIndex;

  const getLineDelay = (lineIndex: number) => {
    if (hoveredIndex < 0) return 0;
    return lineIndex * 0.15;
  };

  const getEllipseDelay = (ellipseIndex: number) => {
    if (hoveredIndex < 0) return 0;
    return ellipseIndex === 0 ? 0 : (ellipseIndex - 1) * 0.15 + 0.3;
  };

  return (
    <div
      className="relative flex flex-col items-center gap-3 cursor-pointer z-10"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(-1)}
    >
      {/* Lines */}
      <AnimatePresence>
        {shouldShowLine && (
          <>
            {index % 2 === 0 ? (
              <motion.div
                className="hidden md:block absolute -right-4 top-[30%]  lg:top-[37%] xl:-right-5 2xl:-right-5 xl:top-[37%] 2xl:top-[38%] 3xl:top-[40%] 4xl:top-[43%]  z-0"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{
                  duration: 0.3,
                  delay: getLineDelay(index),
                  ease: "easeOut",
                }}
              >
                <Image src={LeftLine} alt="left-line" />
              </motion.div>
            ) : (
              <motion.div
                className="hidden md:block absolute -right-4 bottom-12 lg:bottom-18 xl:-right-5 2xl:-right-5 xl:bottom-[40%] 3xl:bottom-[43%] 4xl:bottom-[47%]  z-0"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{
                  duration: 0.3,
                  delay: getLineDelay(index),
                  ease: "easeOut",
                }}
              >
                <Image src={RightLine} alt="right-line" />
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Ellipse animation */}
      <AnimatePresence>
        {shouldShowEllipse && (
          <>
            {index % 2 === 0 ? (
              <motion.div
                className={`hidden md:block absolute -top-2 xl:-top-3 -left-2 xl:-left-3 -right-2 xl:-right-3 z-0 `}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: getEllipseDelay(index),
                }}
              >
                <div className="relative">
                  <Image src={UpperElipse} alt="upper-ellipse" />
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      transformOrigin: "right",
                      background: "transparent",
                      clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 40%)",
                    }}
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    exit={{ scaleX: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: getEllipseDelay(index),
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="hidden md:block absolute xl:-bottom-3 xl:-left-3 xl:-right-3 -left-2 -right-2 -bottom-2 z-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: getEllipseDelay(index),
                }}
              >
                <div className="relative">
                  <Image src={LowerElipse} alt="lower-ellipse" />
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      transformOrigin: "right",
                      background: "transparent",
                      clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)",
                    }}
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    exit={{ scaleX: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: getEllipseDelay(index),
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {index % 2 !== 0 && (
        <p
          className="text-center text-[10px] lg:text-sm xl:text-lg  max-w-[100px]  4xl:max-w-[90px] transition-all duration-300 w-fit z-20"
          style={{
            color: isHovered ? color : "black",
          }}
        >
          {description}
        </p>
      )}
      {/* Circle */}
      <div
        className="bg-[#F9F9F9] py-3 px-7  lg:py-6 lg:px-10 xl:px-13 2xl:py-8 2xl:px-16  flex flex-col items-center justify-center gap-1 rounded-full border transition-all duration-300"
        style={{
          borderColor: isHovered ? color : "transparent",
        }}
      >
        <p
          className="text-sm md:text-md lg:text-xl xl:text-2xl transition-all duration-300 relative z-20"
          style={{ color: isHovered ? color : "black" }}
        >
          Step
        </p>
        <p
          className="text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold transition-all duration-300 relative z-20"
          style={{ color: isHovered ? color : "black" }}
        >
          {step}
        </p>
      </div>

      {/* Description below the circle */}
      {index % 2 === 0 && (
        <p
          className=" text-center text-[10px] lg:text-sm xl:text-lg md:max-w-[40px] lg:max-w-[100px]  4xl:max-w-[90px] transition-all duration-300 w-fit z-20"
          style={{
            color: isHovered ? color : "black",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
