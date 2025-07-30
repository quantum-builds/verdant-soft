"use client";
import { Arrow, Blog1, Blog2, Blog3 } from "@/assets";
import { useRouter } from "@/i18n/navigation";
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
  const router = useRouter();

  const BLOGS: IBlog[] = [
    {
      title: t("blogs.blog1"),
      imageUrl: Blog1,
      link: "/blogs/strong-brand-identity",
    },
    {
      title: t("blogs.blog2"),
      imageUrl: Blog2,
      link: "/blogs/consistent-design",
    },
    {
      title: t("blogs.blog3"),
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
            {t.rich("headline", {
              highlight: (chunks) => (
                <span className="text-green-gradient">{chunks}</span>
              ),
            })}
          </motion.h2>
        </div>
        <div
          className="flex gap-2 cursor-pointer items-center w-fit"
          onClick={() => router.push("/all-blogs")}
        >
          <p className="text-[#707070] text-xl  md:text-2xl xl:text-4xl font-semibold">
            All Blogs
          </p>
          <Image src={Arrow} alt="arrow" width={30} />
        </div>
        <motion.div
          className="flex-1 lg:flex
    lg:flex-row
    lg:overflow-x-auto
    lg:scroll-smooth
    lg:scrollbar-hide
    cursor-pointer
    grid
    gap-4
    md:grid-cols-2
    md:gap-8
    xl:gap-16
    md:auto-rows-auto
    w-11/12 mx-auto
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
