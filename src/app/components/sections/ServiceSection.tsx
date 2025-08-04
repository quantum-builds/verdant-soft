"use client";
import { useIsMobile } from "@/hook/useIsMobile";
import { slideFromLeft } from "@/uitls/sliderAnimation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Services {
  url: string;
  title: string;
  description: string;
}

export default function ServiceSection() {
  const services: Services[] = [
    {
      url: "custom-software",
      title: "Custom Software Development",
      description:
        "We are creating tailored software solutions designed to meet your unique business needs, ensuring flexibility, scalability, and efficiency. Our team focuses on delivering custom applications that enhance your workflows and drive growth.",
    },
    {
      url: "cloud-devops",
      title: "Cloud & DevOps",
      description:
        "We specialize in delivering seamless DevOps and cloud solutions to optimize your application's performance and scalability. Our expertise ensures reliable deployment, automation, and cloud management tailored to meet your business needs.",
    },
    {
      url: "it-team-outsourcing",
      title: "IT Team Outsourcing",
      description:
        "Our software house specializes in providing dedicated IT team outsourcing solutions tailored to your business needs. Empower your projects with skilled, reliable professionals committed to delivering high-quality technology services.",
    },

    {
      url: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "At our software house, we specialize in creating intuitive and visually stunning UI/UX designs that enhance user engagement. Our expert team crafts customized solutions to ensure a seamless and memorable digital experience for your users.",
    },
  ];

  const router = useRouter();
  const isMobile = useIsMobile();
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

  // const slideFromBottom = {
  //   hidden: { opacity: 0, y: 100 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //   },
  // };

  // const ctaTextRef = useRef<HTMLParagraphElement>(null);
  // const [ctaWidth, setCtaWidth] = useState(0);

  // useLayoutEffect(() => {
  //   if (ctaTextRef.current) {
  //     const rect = ctaTextRef.current.getBoundingClientRect();
  //     setCtaWidth(rect.width / 2);
  //   }
  // }, [t]);

  return (
    <section id="services" className=" scroll-mt-28 ">
      <div className="overflow-hidden min-h-[60vh] 3xl:min-h-[50vh] w-11/12 xl:w-10/12  mx-auto flex flex-col mb-28 gap-12">
        <p className="font-semibold text-xl md:text-2xl">[01 Services]</p>
        <motion.p
          className="w-11/12 md:w-[57%] lg:w-[55%] xl:w-3/5 2xl:w-7/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl leading-tight font-semibold text-footer-black"
          initial="hidden"
          whileInView="visible"
          variants={slideFromLeft}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-green-gradient">
            Not just services - we deliver
          </span>{" "}
          growth, clarity, <span className="text-green-gradient">and</span> real
          impact.
        </motion.p>
        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                key={index}
                className={`group flex flex-col md:flex-row justify-between items-start md:items-center bg-gray w-full py-6 md:py-8 px-4 md:px-6 rounded-xl overflow-hidden relative cursor-pointer`}
                variants={itemAnimation}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onMouseEnter={() => !isMobile && setActiveService(index)}
                onMouseLeave={() => !isMobile && setActiveService(null)}
                onClick={() => router.push(`services/${service.url}`)}
              >
                {!isMobile && (
                  <p
                    className={`flex-1 text-3xl md:text-[40px] font-semibold z-10 transition-colors duration-300 ${
                      isActive ? "text-green-gradient" : "text-black"
                    }`}
                  >
                    {service.title}
                  </p>
                )}

                {isMobile && !isActive && (
                  <motion.p
                    key="mobile-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex-1 text-3xl font-semibold z-10 text-black"
                  >
                    {service.title}
                  </motion.p>
                )}
                {!isMobile && (
                  <div className="flex-1 z-0  overflow-hidden  min-h-[40px]">
                    <motion.p
                      className="lg:text-[12px] xl:text-sm text-black text-left"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : 50,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* <motion.div
          className={`relative group w-full py-12 px-6 rounded-xl flex justify-center items-center overflow-hidden  cursor-pointer ${
            isMobile ? "bg-green-gradient" : "bg-black"
          }`}
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onClick={() => {
            if (isMobile) setIsHovered((prev) => !prev);
            router.push("/contact-us");
          }}
        >
          {isMobile ? (
            <p className="z-10 text-white text-3xl font-semibold text-center ">
              {t("cta.button")}
            </p>
          ) : (
            <>
              <motion.div
                className="absolute inset-0 bg-green-gradient z-0"
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div
                className="z-10 flex items-center justify-between w-full px-6"
                ref={ctaTextRef}
              >
                <motion.p
                  className="text-white text-4xl font-semibold"
                  initial={{ x: 0 }}
                  animate={
                    isHovered
                      ? { x: -ctaWidth, opacity: 0 }
                      : { x: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {t("cta.text")}
                </motion.p>

                <motion.p
                  className="text-white text-4xl font-semibold"
                  initial={{ opacity: 0, x: 0 }}
                  animate={
                    isHovered
                      ? { opacity: 1, x: -ctaWidth / 1.2 }
                      : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {t("cta.button")}
                </motion.p>
              </div>
            </>
          )}
        </motion.div> */}
      </div>
    </section>
  );
}
