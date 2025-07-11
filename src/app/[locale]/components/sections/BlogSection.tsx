"use client";
import { Arrow, Blog1, Blog2, Blog3 } from "@/assets";
import { slideFromBottom, slideFromTop } from "@/uitls/sliderAnimation";
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
  return (
    <div
      id="blog"
      className="min-h-[70vh] 3xl:min-h-[50vh] w-11/12 mx-auto mb-28 flex flex-col gap-12 overflow-hidden"
    >
      <p className="font-semibold text-2xl">[06 Blog]</p>
      <div className="w-full flex justify-end">
        <motion.h2
          className="w-11/12 md:w-2/3 lg:w-3/5 2xl:w-8/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-end break-words"
          initial="hidden"
          whileInView="visible"
          variants={slideFromTop}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t.rich("headline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </motion.h2>
      </div>
      <div className="flex gap-2 cursor-pointer items-center ">
        <p className="text-[#707070] text-xl  md:text-2xl xl:text-4xl font-semibold">
          All Blogs
        </p>
        <Image src={Arrow} alt="arrow" width={30} />
      </div>
      <motion.div
        className="
    flex-1
    lg:flex
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
              className="rounded-2xl h-[300px] opacity-50 group-hover:opacity-100 group-hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out"
            />
            <p className="text-2xl font-semibold text-center mb-2">
              {blog.title}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
