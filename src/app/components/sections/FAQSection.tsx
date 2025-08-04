"use client";

import { useIsMobile } from "@/hook/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { Plus } from "lucide-react";
import { useState } from "react";

interface IQuestions {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const [ref, { height }] = useMeasure();

  const QUESTIONS: IQuestions[] = [
    {
      question: "How long does a typical project take?",
      answer:
        "The length of a typical project varies based on scope and complexity. Generally, projects can range from a few weeks to several months or more.",
    },
    {
      question: "What if I don't know exactly what I need?",
      answer:
        "If you're unsure what you need, start by sharing your goals or interests, and we can help explore options with you. We can refine your ideas together to find the best solution.",
    },
    {
      question: "Can I request just one service?",
      answer:
        "Absolutely! Please let me know which service you'd like to request, dev ops, web development, UI UX design or IT team outsourcing. I'll be happy to assist you.",
    },
    {
      question: "How do payments work?",
      answer:
        "We follows a milestone-based payment schedule, ensuring transparency and mutual trust. Payments are structured at project initiation, key development phases, and final delivery.",
    },
    {
      question: "What if I need changes after a project ends?",
      answer:
        "If you need changes after a project ends, contact us to discuss possible revisions or support options. Additional fees or a new agreement may apply.",
    },
  ];

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const adjustedHeight = height / 0.8;

  return (
    <section id="faqs" className="scroll-mt-28">
      <div className="overflow-hidden flex flex-col gap-12 md:min-h-[70vh] 3xl:min-h-[50vh] w-11/12 xl:w-10/12 mx-auto mb-28">
        <p className="font-semibold text-2xl">[05 FAQ]</p>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.p
            className="w-11/12 md:w-2/5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl  font-semibold leading-tight font-inter text-start text-footer-black"
            initial="hidden"
            whileInView="visible"
            variants={slideFromLeft}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-green-gradient">
              Smarter decisions start with
            </span>{" "}
            clear answers.
          </motion.p>

          <motion.div
            className="w-full md:w-3/5 flex flex-col justify-between gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {QUESTIONS.map((question, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group bg-[#F9F9F9] rounded-xl p-10 cursor-pointer transition-colors duration-300 hover:bg-[#F2F2F2]"
                  onMouseEnter={() => {
                    if (!isMobile) setActiveIndex(index);
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) setActiveIndex(null);
                  }}
                  onClick={() => {
                    if (isMobile) handleToggle(index);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <p
                      className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                        isOpen ? "text-blue" : "text-black"
                      }`}
                    >
                      {question.question}
                    </p>
                    <motion.div
                      className="transition-transform duration-300"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="text-green-gradient h-5 w-5 flex-shrink-0" />
                    </motion.div>
                  </div>

                  {/* Collapsible Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: adjustedHeight }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div ref={ref}>
                          <p className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                            {question.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
