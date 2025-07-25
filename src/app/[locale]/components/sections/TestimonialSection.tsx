"use client";

import {
  ImageTestimonial1,
  ImageTestimonial2,
  ImageTestimonial3,
  TextTestimonial1,
  TextTestimonial2,
} from "@/assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { slideFromRight } from "@/uitls/sliderAnimation";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  rating: number;
  score: string;
  testimonial: string;
  image: StaticImageData | string;
  type: "image" | "text" | "video";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Smith",
    title: "Head of Marketing, Nestle",
    rating: 4,
    score: "4.5/5",
    testimonial: "",
    image: ImageTestimonial1,
    type: "image",
  },
  {
    id: 2,
    name: "Banny",
    title: "General Manager",
    rating: 5,
    score: "4.5/5",
    testimonial:
      "Working with Nordisk Soft has been a transformative experience for our business. Their innovative solutions and attentive support have significantly boosted our operational efficiency.",
    image: TextTestimonial1,
    type: "text",
  },
  {
    id: 3,
    name: "Alex",
    title: "CEO",
    rating: 5,
    score: "4.5/5",
    testimonial: "",
    image: "/videos/alex-video-3.mp4",
    type: "video",
  },

  {
    id: 4,
    name: "James Snow",
    title: "Director",
    rating: 5,
    score: "4.5/5",
    testimonial: "",
    image: ImageTestimonial3,
    type: "image",
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "Tech Lead",
    rating: 5,
    score: "5.0/5",
    testimonial:
      "Outstanding service and exceptional results. The team at Nordisk Soft delivered beyond our expectations with their cutting-edge solutions and professional approach.",
    image: TextTestimonial2,
    type: "text",
  },
  {
    id: 6,
    name: "Alexa Snow",
    title: "Director",
    rating: 5,
    score: "4.5/5",
    testimonial: "",
    image: ImageTestimonial2,
    type: "image",
  },
];

const slideFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};
export default function TestimonialsSection() {
  return (
    <section className=" overflow-hidden scroll-mt-36 mb-28 w-full min-h-[60vh] 3xl:min-h-[45vh] flex flex-col gap-16">
      <div className="w-11/12 xl:w-10/12  mx-auto flex flex-col gap-12">
        <p className="font-semibold text-2xl">[04 Testimonials]</p>
        <div className="w-full flex justify-end">
          <motion.h2
            className="w-11/12 md:w-2/3 lg:w-3/5 2xl:w-8/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl  font-semibold text-end break-words"
            variants={slideFromRight}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Real stories. Real winners.{" "}
            <span className="text-green-gradient">
              Straight from our clients
            </span>
          </motion.h2>
        </div>
      </div>
      <motion.div
        variants={slideFromBottom}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          mousewheel={{ forceToAxis: true }}
          modules={[Autoplay, Pagination, Mousewheel]}
          className="w-full px-6"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="!w-[300px] md:!w-[500px] xl:!w-[600px] flex-shrink-0"
            >
              <div
                className={`h-[270px] md:h-[300px] xl:h-[320px] rounded-2xl backdrop-blur-sm border border-white/10`}
              >
                {testimonial.type === "image" ? (
                  <ImageCard testimonial={testimonial} />
                ) : testimonial.type === "video" ? (
                  <VideoCard testimonial={testimonial} />
                ) : (
                  <TextCard testimonial={testimonial} />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

function ImageCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative h-full group">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        fill
        className="object-cover rounded-2xl "
        style={{ filter: "brightness(0.5)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
      <div className="absolute bottom-20  md:bottom-4 right-4 flex items-center gap-2">
        <Stars rating={testimonial.rating} />
      </div>
      <div className="absolute bottom-4 left-4">
        <h4 className=" font-semibold text-2xl text-white">
          {testimonial.name}
        </h4>
        <p className="text-[#9E9E9E] text-xl">{testimonial.title}</p>
      </div>
    </div>
  );
}

function VideoCard({ testimonial }: { testimonial: Testimonial }) {
  const swiper = useSwiper();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="relative h-full group rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={testimonial.image as string}
        className="object-fill w-full h-full rounded-2xl"
        controls
        preload="metadata"
        onPlay={() => {
          swiper?.autoplay?.stop();
        }}
        onPause={() => {
          setTimeout(() => {
            if (videoRef.current?.paused) {
              swiper?.autoplay?.start();
            }
          }, 500);
        }}
        onEnded={() => {
          swiper?.autoplay?.start();
        }}
      />
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <Stars rating={testimonial.rating} />
        <span className="text-white/80 text-sm font-medium">
          {testimonial.score}
        </span>
      </div>
    </div>
  );
}

function TextCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col  justify-between w-full h-full bg-[#F9F9F9D9] rounded-2xl px-6 py-12">
      <div className="flex flex-col md:flex-row  items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={100}
            className="object-cover rounded-lg"
          />
          <div className="w-full">
            <h4 className=" font-semibold text-xl  md:text-2xl">
              {testimonial.name}
            </h4>
            <p className="text-[#707070] text-lg md:text-xl ">
              {testimonial.title}
            </p>
          </div>
        </div>
        <div className="flex items-start md:items-center gap-2 mb-4">
          <Stars rating={testimonial.rating} />
          <span className="text-white/80 text-sm font-medium">
            {testimonial.score}
          </span>
        </div>
      </div>
      <p className=" text-black text-md md:text-xl md:font-semibold leading-tight tracking-normal">
        {testimonial.testimonial}
      </p>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? "fill-[#FF8800] text-[#FF8800]"
              : "fill-gray-400 text-gray-400"
          }`}
        />
      ))}
    </>
  );
}
