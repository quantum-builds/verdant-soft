"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";

interface JobRoleCardProps {
  role: string;
  type: string;
  city: string;
  link: string;
  html: string;
  showDescription: boolean;
  onToggle: () => void;
}

export default function JobRoleCard({ ...props }: JobRoleCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure the content height
  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [props.html, props.showDescription]);

  return (
    <div className="p-8 lg:px-4 xl:px-8 bg-[#F3F3F3] flex flex-col gap-8 rounded-2xl h-fit">
      <div className="flex justify-end gap-4">
        {[props.city, props.type].map((item, index) => (
          <div
            key={index}
            className="bg-white py-2.5 px-5 text-lg text-pure-black rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="text-2xl font-medium text-pure-black md:whitespace-nowrap">
          {props.role}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-medium text-green-gradient">
            Verdant Soft
          </p>
          {/* Toggle button */}
          <p
            className="underline decoration-[#0000FF] text-[#0000FF] decoration-1 underline-offset-4 cursor-pointer text-lg"
            onClick={props.onToggle}
          >
            Job Description
          </p>
        </div>
      </div>
      {/* Animated description */}
      <AnimatePresence initial={false}>
        {props.showDescription && (
          <motion.div
            key="job-description"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden job-description"
          >
            <div
              ref={ref}
              className="text-base text-gray-800 leading-relaxed prose"
              dangerouslySetInnerHTML={{ __html: props.html }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer w-fit flex bg-green-gradient text-white px-5 2xl:px-6 py-2.5 2xl:py-3 rounded-lg items-center gap-3 transition-all duration-200 text-xl btn-3"
        style={{ "--clr": "#16a34a" } as React.CSSProperties}
      >
        <span>Apply Now</span>
        <span className="button__icon-wrapper">
          <svg
            width="10"
            className="button__icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            />
          </svg>
          <svg
            width="10"
            className="button__icon-svg button__icon-svg--copy"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}
