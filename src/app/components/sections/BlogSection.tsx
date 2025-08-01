"use client";
import { Arrow, Blog1, Blog2, Blog3 } from "@/assets";
import { slideFromBottom, slideFromTop } from "@/uitls/sliderAnimation";
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
  return (
    <section id="blogs" className="scroll-mt-28">
      <div className="min-h-[70vh] 3xl:min-h-[50vh] w-11/12 xl:w-10/12  mx-auto mb-28 flex flex-col gap-12 overflow-hidden">
        <p className="font-semibold text-2xl">[06 Blog]</p>
        <div className="w-full flex justify-end">
          <motion.h2
            className="w-11/12 md:w-2/3 lg:w-3/5 2xl:w-8/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl  font-semibold text-end break-words"
            initial="hidden"
            whileInView="visible"
            variants={slideFromTop}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Stories, strategies,{" "}
            <span className="text-green-gradient">and</span> creative
            perspectives{" "}
            <span className="text-green-gradient">from the team.</span>
          </motion.h2>
        </div>
        <div
          className="flex gap-2 cursor-pointer items-center w-fit"
          onClick={() => router.push("/all-blogs")}
        >
          <p className="text-[#707070] text-xl  md:text-2xl xl:text-4xl font-semibold hover:text-green-gradient">
            All Blogs
          </p>
          <Image src={Arrow} alt="arrow" width={30} />
        </div>
        <motion.div
          className="flex-1 lg:flex overflow-hidden lg:flex-row  lg:scroll-smooth lg:scrollbar-hide cursor-pointer grid gap-4 md:grid-cols-2 xl:gap-8 md:auto-rows-auto mx-auto"
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
                className="rounded-2xl h-[260px] lg:h-[250px] xl:h-[290px] opacity-50 group-hover:opacity-100 group-hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out"
              />
              <div className="w-11/12 mx-auto">
                <p className="text-xl font-semibold text-start  mb-4">
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
