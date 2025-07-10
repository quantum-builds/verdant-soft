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
      className="h-[75vh] w-11/12 mx-auto mb-28 flex flex-col gap-12 overflow-hidden"
    >
      <p className="font-semibold text-2xl">[06 Blog]</p>
      <motion.div
        className="w-full flex justify-end"
        initial="hidden"
        whileInView="visible"
        variants={slideFromTop}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-2/3">
          <p className="text-2xl md:text-3xl xl:text-7xl font-semibold leading-tight font-inter text-end">
            {t.rich("headline", {
              highlight: (chunks) => (
                <span className="text-green-gradient">{chunks}</span>
              ),
            })}
          </p>
        </div>
      </motion.div>

      <div className="flex gap-2 cursor-pointer items-center ">
        <p className="text-[#707070] text-xl  md:text-2xl xl:text-4xl font-semibold">
          All Blogs
        </p>
        <Image src={Arrow} alt="arrow" width={30} />
      </div>
      <motion.div
        className="flex-1 flex gap-8 overflow-z-auto scroll-smooth scrollbar-hide cursor-pointer"
        initial="hidden"
        whileInView="visible"
        variants={slideFromBottom}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {BLOGS.map((blog, index) => (
          <div
            key={index}
            className="group bg-[#F9F9F9] flex flex-col flex-[1_1_300px] max-w-[700px] gap-4 rounded-xl"
          >
            <Image
              src={blog.imageUrl}
              alt={`blog-${index}`}
              className="rounded-2xl h-[300px] opacity-50 group-hover:opacity-100 group-hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out"
            />
            <p className="text-2xl font-semibold text-center">{blog.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
