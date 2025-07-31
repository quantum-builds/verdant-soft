"use client";
import Navbar from "@/app/components/Navbar";
import { Blog1, Blog2, Blog3 } from "@/assets";
import { slideFromBottom } from "@/uitls/sliderAnimation";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IBlog {
  title: string;
  imageUrl: StaticImageData | string;
  link: string;
}
export default function BlogSection() {
  const router = useRouter();

  const BLOGS: IBlog[] = [
    {
      title: "Why a strong brand identity is essential",
      imageUrl: Blog1,
      link: "/blogs/strong-brand-identity",
    },
    {
      title: "The power of consistent design",
      imageUrl: Blog2,
      link: "/blogs/consistent-design",
    },
    {
      title: "How to nail your website strategy",
      imageUrl: Blog3,
      link: "/blogs/website-strategy",
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
          className="flex-1 overflow-hidden lg:flex lg:flex-row  lg:scroll-smooth lg:scrollbar-hide cursor-pointer grid gap-4 md:grid-cols-2 xl:gap-8 md:auto-rows-auto"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottom}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {BLOGS.map((blog, index) => (
            <div
              key={index}
              className="group bg-[#F9F9F9] flex flex-col gap-4 rounded-xl flex-[1_1_300px] max-w-[700px]"
              onClick={() => router.push(blog.link)}
            >
              <Image
                src={blog.imageUrl}
                alt={`blog-${index}`}
                className="rounded-2xl h-[270px] lg:h-[250px] xl:h-[270px] opacity-50 group-hover:opacity-100 group-hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out"
              />
              <div className="w-11/12 mx-auto">
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
