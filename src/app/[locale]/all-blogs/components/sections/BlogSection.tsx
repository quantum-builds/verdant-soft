"use client";
import Navbar from "@/app/[locale]/components/Navbar";
import { Blog1, Blog2, Blog3 } from "@/assets";
import { slideFromBottom } from "@/uitls/sliderAnimation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface IBlog {
  title: string;
  imageUrl: StaticImageData | string;
  link: string;
}
export default function BlogSection() {
  const t = useTranslations("BlogSection");

  const BLOGS: IBlog[] = [
    {
      title: t("blogs.blog1"),
      imageUrl: Blog1,
      link: "/",
    },
    {
      title: t("blogs.blog2"),
      imageUrl: Blog2,
      link: "/",
    },
    {
      title: t("blogs.blog3"),
      imageUrl: Blog3,
      link: "/",
    },
  ];

  const slideFromTop = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className="relative flex flex-col space-y-6 overflow-hidden bg-white mb-28 ">
      <Navbar />
      <div className="min-h-[30vh] mt-24 md:mt-30 xl:mt-36  w-11/12 xl:w-10/12  mx-auto flex flex-col gap-12 xl:gap-16 overflow-hidden">
        <motion.h2
          className="text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl leading-tight font-semibold text-start break-words text-green-gradient"
          initial="hidden"
          whileInView="visible"
          variants={slideFromTop}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          All Blogs
        </motion.h2>

        <motion.div
          className="flex-1 lg:flex
    lg:flex-row
    lg:gap-8
    lg:overflow-x-auto
    lg:scroll-smooth
    lg:scrollbar-hide
    cursor-pointer
    grid
    gap-4
    md:grid-cols-2
    md:gap-8
    md:auto-rows-auto
  "
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {BLOGS.map((blog, index) => (
            <div
              key={index}
              className={`
        group bg-[#F9F9F9] flex flex-col gap-4 rounded-xl
        flex-[1_1_300px] max-w-[700px]
        
      `}
            >
              <Image
                src={blog.imageUrl}
                alt={`blog-${index}`}
                className="rounded-2xl h-[270px] opacity-50 group-hover:opacity-100 group-hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out"
              />
              <div className="w-11/12 ml-auto">
                <p className="text-xl font-semibold text-start  mb-2">
                  {blog.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
