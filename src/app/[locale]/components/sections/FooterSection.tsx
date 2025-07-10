"use client";
import { VerdantLightLogo, VerdantLogo } from "@/assets";
import {
  slideFromBack,
  slideFromLeft,
  slideFromRight,
} from "@/uitls/sliderAnimation";
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

  return (
    <div className="overflow-hidden relative h-[70vh] bg-black py-14">
      {/* Left Logo */}
      <motion.div
        className="absolute top-[45%] left-0 -translate-y-2/3 -translate-x-1/4  pointer-events-none z-0 h-[160vh]"
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeft}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={VerdantLogo}
          alt="Verdant background left"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      {/* Right Logo */}
      <motion.div
        className="absolute top-[45%] right-0 -translate-y-2/3  translate-x-8/12 opacity-10 pointer-events-none z-0 h-[160vh]"
        initial="hidden"
        whileInView="visible"
        variants={slideFromRight}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={VerdantLogo}
          alt="Verdant background right"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      <div className="px-4 lg:w-11/12 mx-auto flex flex-col justify-between h-full">
        <div className="h-20 flex justify-between">
          <motion.div
            className="flex gap-12"
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
                className="text-white text-xl"
              >
                {naviagtionLink.text}
              </a>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-12"
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
                className="text-white text-xl"
              >
                {socialLink.text}
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col gap-4 text-center items-center justify-center"
          variants={slideFromBack}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="w-10/12 lg:w-2/3 xl:w-1/2 text-2xl lg:text-4xl xl:text-7xl font-semibold text-[#707070]">
            {t("headline")}
          </p>
          <p className="w-10/12 lg:w-2/3 xl:w-1/2 text-2xl lg:text-4xl xl:text-7xl font-semibold text-white">
            {t("subheadline")}
          </p>
        </motion.div>
        <motion.div
          className="h-20 flex justify-between"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <Image
              src={VerdantLightLogo}
              alt="logo-white"
              className="cursor-pointer"
              width={260}
              height={60}
              onClick={() => router.replace("/")}
            />
          </div>
          <div className="flex-1 flex justify-center items-center gap-12">
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

          <div className="flex-1 flex justify-end gap-12 font-semibold">
            <div className="flex flex-col gap-1">
              <p className="text-[#707070] text-xl">{t("Contact.email")}</p>
              <p className="text-white text-2xl">query@verdantsoft.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#707070] text-xl">{t("Contact.phone")}</p>
              <p className="text-white text-2xl">+92 000 000 000</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
