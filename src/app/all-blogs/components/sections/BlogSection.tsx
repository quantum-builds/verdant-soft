"use client";
import Navbar from "@/app/components/Navbar";
import { CustomSoftwareBG, CloudOptimizationBG, DesignToDevBG } from "@/assets";
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
      title: "Why Cloud Optimization Matters",
      imageUrl: CloudOptimizationBG,
      link: "/blogs/cloud-optimization",
    },
    {
      title: "Why You Should Invest in Custom Software Development",
      imageUrl: CustomSoftwareBG,
      link: "/blogs/custom-software",
    },
    {
      title: "⁠How Our Team Builds Digital Products: From Design to Deployment",
      imageUrl: DesignToDevBG,
      link: "/blogs/design-to-deployment",
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
        <motion.h1
          className="whitespace-nowrap text-[90px] md:text-[100px] lg:text-[130px] xl:text-[120px] 3xl:text-[145px] 4xl:text-[160px] 5xl:text-[170px] leading-tight font-semibold text-end break-words text-light-green-gradient"
          initial="hidden"
          whileInView="visible"
          variants={slideFromTop}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          All Blogs
        </motion.h1>

        <motion.div
          className="flex-1 overflow-hidden lg:flex lg:flex-row  lg:scroll-smooth lg:scrollbar-hide cursor-pointer grid gap-4 md:grid-cols-2 xl:gap-8 md:auto-rows-auto mx-auto"
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
                className="w-full rounded-2xl h-[270px] lg:h-[250px] xl:h-[270px] "
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

// opacity-50 group-hover:opacity-100 group-hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out
