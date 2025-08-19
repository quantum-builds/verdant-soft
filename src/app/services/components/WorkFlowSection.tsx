"use client";

import { LeftLine, LowerElipse, RightLine, UpperElipse } from "@/assets";
import { slideFromBottom } from "@/utils/sliderAnimation";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface IStepCircle {
  step: number;
  color: string;
  title: string;
  description: string;
  lineImage: StaticImageData;
}

interface WorkFlowSectionProps {
  steps: IStepCircle[];
}
interface StepCircleProps {
  index: number;
  step: number;
  color: string;
  total: number;
  title: string;
  description: string;
  hoveredIndex: number;
  lineImage: StaticImageData;
  setHoveredIndex: (index: number) => void;
}

export default function WorkFlowSection({ steps }: WorkFlowSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div
      id="workflow"
      className="scroll-mt-36 h-[1450px] md:h-[890px] lg:h-[970px] xl:h-[1010px] 2xl:h-[1010px] 3xl:h-[980px]  4xl:h-[1000px] 5xl:h-[1500px] w-11/12 xl:w-10/12 mx-auto flex flex-col gap-12  mb-20 overflow-hidden  "
    >
      {/* <p className="font-semibold text-2xl">[01 Workflow]</p> */}
      <div className="flex flex-col gap-110 md:gap-60 flex-1">
        <motion.p
          className="w-11/12 md:w-[57%] lg:w-[55%] xl:w-3/5 2xl:w-7/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold text-footer-black"
          initial="hidden"
          whileInView="visible"
          variants={slideFromLeft}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-green-gradient">
            No guesswork, just a clear path from
          </span>{" "}
          ideas → results.
        </motion.p>
        <motion.div
          className="w-full md:w-[670px] lg:w-[900px] xl:w-[1150px] 2xl:w-[1270px]   5xl:w-[1280px] mx-auto  h-[500px] md:h-[320px] lg:h-[370px] xl:h-[386px] 2xl:h-[410px]  4xl:h-[420px] 5xl:h-[410px]  relative  pb-10"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="hidden md:flex justify-between h-full w-full ">
            {steps.map((step, index) => (
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
                  total={steps.length}
                  description={step.description}
                  lineImage={step.lineImage}
                  hoveredIndex={hoveredIndex}
                  title={step.title}
                  setHoveredIndex={setHoveredIndex}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 md:hidden gap-4 h-full w-full ">
            {steps.map((step, index) => (
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
                  total={steps.length}
                  description={step.description}
                  lineImage={step.lineImage}
                  hoveredIndex={hoveredIndex}
                  title={step.title}
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
  lineImage,
  title,
  total,
  hoveredIndex,
  setHoveredIndex,
}: StepCircleProps) {
  const isHovered = hoveredIndex === index;

  return (
    <div
      className="relative flex flex-col items-center gap-3 cursor-pointer z-10"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(-1)}
    >
      {/* Lines */}
      <>
        {index < total - 1 && (
          <>
            {index % 2 === 0 ? (
              <div className="hidden md:block absolute -right-4 top-[30%]  lg:top-[37%] xl:-right-5 2xl:-right-5 xl:top-[37%] 2xl:top-[38%] 3xl:top-[40%] 4xl:top-[43%]  z-0">
                <Image src={LeftLine} alt="left-line" />
              </div>
            ) : (
              <div className="hidden md:block absolute -right-4 bottom-12 lg:bottom-18 xl:-right-5 2xl:-right-5 xl:bottom-[40%] 3xl:bottom-[43%] 4xl:bottom-[47%]  z-0">
                <Image src={RightLine} alt="right-line" />
              </div>
            )}
          </>
        )}
      </>

      {/* Ellipse */}
      <>
        {index % 2 === 0 ? (
          <div
            className={`hidden md:block absolute -top-2 xl:-top-3 -left-2 xl:-left-3 -right-2 xl:-right-3 z-0 `}
          >
            <Image src={UpperElipse} alt="upper-ellipse" />
          </div>
        ) : (
          <div className="hidden md:block absolute xl:-bottom-3 xl:-left-3 xl:-right-3 -left-2 -right-2 -bottom-2 z-0">
            <Image src={LowerElipse} alt="lower-ellipse" />
          </div>
        )}
      </>

      {index % 2 !== 0 && (
        <div className="flex flex-col gap-4 items-center ">
          {index !== 1 ? (
            <div className="absolute top-25 md:-top-65 ">
              <Image
                src={lineImage}
                alt="left-line"
                className="w-2/3 md:w-full rotate-180 md:rotate-0"
              />
            </div>
          ) : (
            <div className="absolute bottom-37 md:-top-65 ">
              <Image
                src={lineImage}
                alt="left-line"
                className="w-2/3 md:w-full"
              />
            </div>
          )}
          {index !== 1 ? (
            <div
              className="absolute top-60  md:-top-100 2xl:-top-102 text-center text-sm md:text-base lg:text-lg  md:whitespace-nowrap font-semibold leading-tight"
              style={{ color: color }}
            >
              {title}
            </div>
          ) : (
            <div
              className="absolute bottom-126  md:-top-100 2xl:-top-102 text-center text-sm md:text-base lg:text-lg  md:whitespace-nowrap font-semibold leading-tight"
              style={{ color: color }}
            >
              {title}
            </div>
          )}
          {index !== 1 ? (
            <div className="absolute top-72  md:-top-92 w-auto md:w-[170px] lg:w-[210px] xl:w-[290px] text-center text-[12px] lg:text-sm 2xl:text-base leading-tight">
              {description}
            </div>
          ) : (
            <div className="absolute bottom-80  md:-top-92 w-auto md:w-[170px] lg:w-[210px] xl:w-[290px] text-center text-[12px] lg:text-sm 2xl:text-base leading-tight">
              {description}
            </div>
          )}
          <p
            className="absolute -top-12 font-medium text-lg lg:text-xl text-center leading-tight"
            style={{
              color: isHovered ? color : "black",
            }}
          >
            {title}
          </p>
        </div>
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
        <div className="flex flex-col gap-4 items-center ">
          <p
            className=" absolute top-22 lg:top-32 xl:top-40 2xl:top-45 font-medium text-lg lg:text-xl text-center leading-tight"
            style={{
              color: isHovered ? color : "black",
            }}
          >
            {title}
          </p>
          {index !== 4 ? (
            <div className="absolute -top-35 md:-bottom-65 md:top-40 lg:top-50 xl:top-58 ">
              <Image
                src={lineImage}
                alt="left-line "
                className="w-2/3 md:w-auto rotate-180 md:rotate-0"
              />
            </div>
          ) : (
            <div className="absolute top-35 md:-bottom-65 md:top-40 lg:top-50 xl:top-58">
              <Image
                src={lineImage}
                alt="left-line "
                className="w-2/3 md:w-full"
              />
            </div>
          )}
          {index !== 4 ? (
            <div
              className="absolute -top-96  md:-bottom-75 md:top-92 lg:top-102 xl:top-111 text-center text-sm md:text-base lg:text-lg md:whitespace-nowrap font-semibold leading-tight"
              style={{ color: color }}
            >
              {title}
            </div>
          ) : (
            <div
              className="absolute top-70  md:-bottom-75 md:top-92 lg:top-102  xl:top-111 text-center text-sm md:text-base lg:text-lg md:whitespace-nowrap font-semibold leading-tight"
              style={{ color: color }}
            >
              {title}
            </div>
          )}
          {index !== 4 ? (
            <div className="absolute -top-80  md:top-100 lg:top-110 xl:top-120  w-auto  md:w-[170px] lg:w-[210px] xl:w-[290px] flex text-[12px] lg:text-sm 2xl:text-base leading-tight  ">
              <p className="text-center">{description}</p>
            </div>
          ) : (
            <div className="absolute top-82  md:top-100 lg:top-110 xl:top-120  w-auto md:w-[170px] lg:w-[210px] xl:w-[290px] flex text-[12px] lg:text-sm 2xl:text-base leading-tight  ">
              <p className="text-center">{description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
