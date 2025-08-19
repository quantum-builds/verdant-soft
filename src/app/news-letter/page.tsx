import { NewsLetterBG, NewsLetterImage1 } from "@/assets";
import Navbar from "../components/Navbar";
import Image from "next/image";
import BlogSection from "./components/BlogSection";
import FooterSection from "../components/sections/FooterSection";
import BookAMeeting from "./components/BookAMeetingButton";

const FEATURES = [
  {
    title: "Custom Software Development",
    description:
      "We create innovatively customized software solutions precisely, tailored to your business needs, enhancing flexibility, scalability, and efficiency to drive sustainable growth.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "We provide seamless DevOps and cloud solutions to optimize your application's performance, scalability, and reliability through tailored deployment, automation, and management.",
  },
  {
    title: "IT Team Outsourcing",
    description:
      "Our software house offers dedicated IT team outsourcing solutions, providing skilled professionals to empower your projects with high-quality technology services.",
  },
  {
    title: "UI UX Design",
    description:
      "At our software house, we craft intuitive, visually stunning, innovative UI/UX designs that significantly enhance user engagement and deliver seamless, impactful digital experiences.",
  },
];

export default function NewsLetter() {
  return (
    <>
      <section className="relative flex flex-col space-y-6 overflow-hidden bg-white mb-28 text-black">
        <Navbar />
        <div className="min-h-[30vh] mt-18 md:mt-16 xl:mt-24  flex flex-col gap-16 lg:gap-28  overflow-hidden">
          <div className="flex flex-col ">
            <div className=" w-11/12 xl:w-10/12 mx-auto">
              <h1 className="whitespace-nowrap text-[70px] sm:text-[90px] md:text-[100px] lg:text-[130px] xl:text-[120px] 3xl:text-[145px] 4xl:text-[160px] 5xl:text-[170px] leading-tight font-semibold text-end break-words text-light-green-gradient">
                Newsletter
              </h1>
            </div>
            <div className="relative z-0 flex items-center justify-center">
              <Image
                className="w-full h-[290px] md:h-[400px] xl:h-[480px] object-cover"
                src={NewsLetterBG}
                alt="news-letter background"
              />
              <div className="flex flex-col  absolute z-10 top-1/4 left-1/9 sm:left-1/5 sm:-translate-x-1/2 -translate-y-1/2">
                <h2 className="text-white text-[24px] md:text-[30px] lg:text-[45px] 3xl:text-[60px] 5xl:text-[70px] font-semibold leading-tight ">
                  Empowering Businesses
                </h2>
                <h2 className="text-white text-[24px] md:text-[30px] lg:text-[45px] 3xl:text-[60px] 5xl:text-[70px] font-semibold leading-tight">
                  Through Technology
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 lg:gap-28">
            <div className=" flex flex-col gap-4 items-center justify-center  text-center  w-11/12 xl:w-10/12  mx-auto">
              <p className="text-xl md:text-2xl xl:text-3xl 3xl:text-[40px] text-footer-black font-medium">
                Our Features
              </p>
              <p className="text-base lg:text-lg 3xl:text-xl w-11/12 md:w-2/3 lg:w-1/3">
                Providing innovative, reliable IT solutions to optimize your
                business and ensure seamless digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20  w-11/12 xl:w-10/12  mx-auto ">
              {FEATURES.map((features, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <p className="text-xl lg:text-2xl 3xl:text-3xl text-green-gradient font-semibold">
                    {features.title}
                  </p>
                  <p className="text-sm lg:text-base 3xl:text-lg max-w-3xl">
                    {features.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative z-0">
              {/* Image Section */}
              <div className="z-10 w-11/12 xl:w-10/12 mx-auto">
                <Image
                  className="w-full h-[290px] md:h-[400px] xl:h-[480px] object-cover"
                  src={NewsLetterImage1}
                  alt="news-letter-image-1 background"
                />
              </div>

              {/* Gray Background (behind image + text, but still visible) */}
              <div className="absolute top-1/2 left-0 w-full  h-[340px] md:h-[450px] xl:h-[560px]  bg-gray -z-10"></div>

              {/* Text Section */}
              <div className="z-10 w-full flex flex-col gap-4 items-center justify-center text-center mt-10">
                <p className="text-xl md:text-2xl xl:text-3xl 3xl:text-[40px] text-footer-black font-medium">
                  Overview
                </p>
                <p className="text-base lg:text-lg 3xl:text-xl w-11/12 md:w-2/3 lg:w-1/3">
                  At Verdant Soft, we are committed to driving innovation and
                  excellence in the world of IT. As a dynamic and
                  forward-thinking software company, we specialize in providing
                  top-tier IT solutions and services designed to meet the
                  evolving needs of businesses across various sectors.
                </p>
              </div>
            </div>

            <BlogSection />
          </div>
        </div>
      </section>
      <div className="py-6 bg-gray">
        <div className="flex flex-col md:flex-row gap-6 justify-between w-11/12 xl:w-10/12 mx-auto">
          <p className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-medium     ">
            Connect with Verdant soft to get best services
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-between items-center  ">
            <BookAMeeting text="Book a Meeting" />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
