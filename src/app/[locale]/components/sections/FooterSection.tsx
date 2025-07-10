"use client";
import { VerdantLightLogo, VerdantLogoLeft, VerdantLogoRight } from "@/assets";
import { slideFromBack, slideFromRight } from "@/uitls/sliderAnimation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TextLinks {
  text: string;
  link: string;
}

export default function FooterSection() {
  const t = useTranslations("FooterSection");
  const router = useRouter();

  const NAVIGATION_LINKS: TextLinks[] = [
    {
      text: t("Navigation.projects"),
      link: "#projects",
    },
    {
      text: t("Navigation.services"),
      link: "#services",
    },
    {
      text: t("Navigation.features"),
      link: "#features",
    },
    {
      text: t("Navigation.workflow"),
      link: "#workflow",
    },
    {
      text: t("Navigation.contact"),
      link: "#contact-us",
    },
  ];

  const PAGES_LINKS: TextLinks[] = [
    {
      text: t("Links.privacy"),
      link: "/privacy",
    },
    {
      text: t("Links.terms"),
      link: "/terms",
    },
  ];

  const SOCIAL_LINKS: TextLinks[] = [
    { text: "Twitter", link: "www.twitter.com" },
    { text: "Instagram", link: "www.instagram.com" },
  ];

  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="overflow-hidden relative h-[100vh] md:h-[90vh] xl:h-[80vh] 2xl:h-[70vh] bg-black py-14">
      {/* Left Logo */}
      <motion.div
        className="hidden md:block absolute top-[45%] left-0  -translate-y-2/3 md:-translate-x-[15%] lg:-translate-x-1/4 pointer-events-none z-0 h-[160vh]"
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeft}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={VerdantLogoLeft}
          alt="Verdant background left"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      {/* Right Logo */}
      <motion.div
        className="hidden md:block absolute top-[45%] right-0 -translate-y-2/3 md:translate-x-4/5 lg:translate-x-[70%] xl:translate-x-8/12 pointer-events-none z-0 h-[160vh] w-[120vw] xl:w-[80vw]"
        initial="hidden"
        whileInView="visible"
        variants={slideFromRight}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={VerdantLogoRight}
          alt="Verdant background right"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      <div className="px-4 lg:w-11/12 mx-auto flex flex-col justify-between h-full">
        <div className="h-20 flex lg:justify-between md:justify-around w-2/5 lg:w-full gap-10  lg:gap-20 ">
          <motion.div
            className="flex flex-col lg:flex-row gap-4 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            variants={slideFromLeft}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {NAVIGATION_LINKS.map((naviagtionLink, index) => (
              <a
                href={naviagtionLink.link}
                key={index}
                className="text-white text-lg md:text-xl"
              >
                {naviagtionLink.text}
              </a>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row gap-4 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            variants={slideFromRight}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {SOCIAL_LINKS.map((socialLink, index) => (
              <a
                href={socialLink.link}
                key={index}
                className="text-white text-lg md:text-xl"
              >
                {socialLink.text}
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col gap-4 text-center items-center justify-center mt-30 md:mt-0"
          variants={slideFromBack}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="w-10/12 lg:w-2/3 xl:w-3/4 2xl:w-3/5 text-white text-2xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold leading-tight font-inter ">
            {t.rich("headline", {
              highlight: (chunks) => (
                <span className="text-[#707070]">{chunks}</span>
              ),
            })}
          </p>
        </motion.div>

        {/* {for tablet and above} */}
        <motion.div
          className="hidden md:flex justify-between"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex-1 flex items-end">
            <Image
              src={VerdantLightLogo}
              alt="logo-white"
              className="cursor-pointer"
              width={260}
              height={60}
              onClick={() => router.replace("/")}
            />
          </div>
          <div className="flex-1 flex justify-center items-end gap-12 ">
            {PAGES_LINKS.map((pageLink, index) => (
              <a
                href={pageLink.link}
                key={index}
                className="text-white text-xl whitespace-nowrap leading-none"
              >
                {pageLink.text}
              </a>
            ))}
          </div>

          <div className="flex-1 flex flex-col 2xl:flex-row justify-end  gap-2 2xl:gap-8 font-semibold ">
            <div className="flex flex-col gap-1">
              <p className="text-[#707070] text-xl">{t("Contact.email")}</p>
              <p className="text-white text-xl lg:text-2xl">
                query@verdantsoft.com
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#707070] text-xl">{t("Contact.phone")}</p>
              <p className="text-white text-xl lg:text-2xl leading-none">
                +92 000 000 000
              </p>
            </div>
          </div>
        </motion.div>

        {/* {for mobile} */}
        <motion.div
          className=" flex md:hidden flex-col justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex-1 flex flex-col 2xl:flex-row justify-end  gap-2 2xl:gap-8 font-semibold ">
            <div className="flex flex-col gap-1">
              <p className="text-[#707070] text-lg md:text-xl">
                {t("Contact.email")}
              </p>
              <p className="text-white text-lg md:text-xl lg:text-2xl">
                query@verdantsoft.com
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#707070] text-lg md:text-xl">
                {t("Contact.phone")}
              </p>
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-none">
                +92 000 000 000
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-6 ">
            {PAGES_LINKS.map((pageLink, index) => (
              <a
                href={pageLink.link}
                key={index}
                className="text-white text-lg md:text-xl whitespace-nowrap leading-none"
              >
                {pageLink.text}
              </a>
            ))}
          </div>
          <div className="flex-1 flex items-end justify-center">
            <Image
              src={VerdantLightLogo}
              alt="logo-white"
              className="cursor-pointer"
              width={240}
              height={40}
              onClick={() => router.replace("/")}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
