"use client";
import { useIsMobile } from "@/hook/useIsMobile";
import { slideFromLeft } from "@/uitls/sliderAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface Services {
  title: string;
  description: string;
}

export default function ServiceSection() {
  const t = useTranslations("ServicesSection");
  const services = t.raw("services") as Services[];
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const descriptionMotion = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div
      id="services"
      className="overflow-hidden h-[97vh] w-11/12 mx-auto flex flex-col mb-28 gap-12"
    >
      <p className="font-semibold text-2xl">[01 Services]</p>
      <motion.div
        className="flex flex-col gap-2"
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeft}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="w-10/12 lg:w-2/3 text-2xl lg:text-4xl xl:text-7xl font-semibold">
          {t.rich("headline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </p>
        <p className="w-10/12 lg:w-2/3 text-2xl lg:text-4xl xl:text-7xl font-semibold">
          {t.rich("subheadline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group flex justify-between items-center bg-gray w-full py-12 px-6 rounded-xl overflow-hidden relative h-[120px]"
            variants={itemAnimation}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onMouseEnter={() => !isMobile && setActiveService(index)}
            onMouseLeave={() => !isMobile && setActiveService(null)}
            onClick={() =>
              isMobile &&
              setActiveService((prev) => (prev === index ? null : index))
            }
          >
            <p
              className={`flex-1 text-[40px] font-semibold z-10 transition-colors duration-300 ${
                activeService === index ? "text-green-gradient" : "text-black"
              }`}
            >
              {service.title}
            </p>

            <AnimatePresence>
              {activeService === index && (
                <motion.p
                  key="description"
                  className=" text-lg text-[#707070] flex-1 z-0"
                  variants={descriptionMotion}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {service.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="relative group w-full py-12 px-6 rounded-xl flex justify-center items-center overflow-hidden bg-black"
        initial="hidden"
        whileInView="visible"
        variants={slideFromBottom}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Layer with Opacity Transition */}
        <motion.div
          className="absolute inset-0 bg-green-gradient z-0"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content Layer */}
        <div className=" z-10 flex items-center justify-between w-full px-6">
          <motion.p
            className="text-white text-4xl font-semibold"
            initial={{ x: 0 }}
            animate={isHovered ? { x: -600, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {t("cta.text")}
          </motion.p>

          <motion.p
            className="text-white text-4xl font-semibold "
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1, x: -800 } : { opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {t("cta.button")}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
