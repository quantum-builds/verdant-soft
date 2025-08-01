"use client";

import { TextTestimonial1, TextTestimonial2 } from "@/assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideFromRight } from "@/uitls/sliderAnimation";

interface Testimonial {
  id: number;
  name: string;
  title?: string;
  rating: number;
  score: string;
  testimonial: string;
  image: StaticImageData | string;
  type: "image" | "text" | "video";
}

const testimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   name: "Alex Smith",
  //   title: "Head of Marketing, Nestle",
  //   rating: 4,
  //   score: "4.5/5",
  //   testimonial: "",
  //   image: ImageTestimonial1,
  //   type: "image",
  // },
  {
    id: 2,
    name: "Elia Essen",
    rating: 4.7,
    score: "4.7/5",
    testimonial:
      "Working with Verdant Soft has been an absolute pleasure. Their expertise in the MERN stack, especially React.js, is truly impressive. They took full ownership of our AI SaaS platform, delivering high-quality, scalable, and visually stunning features that exceeded our expectations. If you’re looking for a top-tier development team with strong frontend capabilities and a deep understanding of SaaS and AI platforms, Verdant Soft is an excellent choice. I highly recommend them and would gladly collaborate again!",
    image: TextTestimonial1,
    type: "text",
  },
  {
    id: 3,
    name: "Alex",
    title: "CEO B-Consulting",
    rating: 4.5,
    score: "4.5/5",
    testimonial: "",
    image: "/videos/alex-video-3.mp4",
    type: "video",
  },

  // {
  //   id: 4,
  //   name: "James Snow",
  //   title: "Director",
  //   rating: 5,
  //   score: "4.5/5",
  //   testimonial: "",
  //   image: ImageTestimonial3,
  //   type: "image",
  // },
  {
    id: 5,
    name: "Nick Kuijpers",
    title: "CEO Wemasy",
    rating: 4.6,
    score: "4.6/5",
    testimonial:
      "Verdant Soft has proven to be a highly supportive and reliable partner in the development of our company. Their team takes a thoughtful approach to analyzing issues and delivering effective solutions. If you're looking for a dependable full-stack development team, I definitely recommend Verdant Soft!",
    image: TextTestimonial2,
    type: "text",
  },
  {
    id: 6,
    name: " Hesham Elkouha",
    rating: 4.5,
    score: "4.5/5",
    testimonial:
      "It was a pleasure working with Verdant Soft very professional and delivered the work as expected. Their response time was also amazing. Will definitely work with them again in the near future.",
    image: TextTestimonial1,
    type: "text",
  },
  {
    id: 7,
    name: "Waqas Zahoor Pal",
    rating: 4.3,
    score: "4.3/5",
    testimonial:
      "The job was completed perfectly with full cooperation and professional conduct. I never expected an emergency task to be handled this efficiently, but Verdant Soft demonstrated that with hard work and dedication, anything is possible. I would definitely work with them again.",
    image: TextTestimonial1,
    type: "text",
  },

  {
    id: 8,
    name: "Shervin Khanzadi",
    title: "CEO Alogirft",
    rating: 4.8,
    score: "4.8/5",
    testimonial:
      "Verdant Soft is a team of highly professional front-end developers with a strong and diverse skill set. Their commitment to delivering high-quality results was evident throughout our collaboration. They not only met our requirements but also added valuable suggestions that improved the overall user experience. If you're looking for a dependable partner with a deep understanding of modern front-end technologies, Verdant Soft is a great choice",
    image: TextTestimonial1,
    type: "text",
  },
  {
    id: 9,
    name: "Isana Sebastian",
    rating: 5,
    score: "5/5",
    testimonial:
      "Working with Verdant Soft was a great experience. They quickly understood our problem, collaborated effectively with our team, and delivered a solid solution. Their proactive communication, thoughtful suggestions, and flexibility made the process smooth. We couldn't be happier with the results and highly recommend Verdant Soft for MVP development, architecture design, and web/mobile projects.",
    image: TextTestimonial1,
    type: "text",
  },
  {
    id: 10,
    name: "Ben Kemboi",
    rating: 4.5,
    score: "4.5/5",
    testimonial:
      "Verdant Soft completed the work in a timely manner. The team sought a clear understanding before starting the work. They maintained positive communication and were ready to edit the work when asked to do so.",
    image: TextTestimonial1,
    type: "text",
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
            className="w-11/12 md:w-[57%] lg:w-[55%] xl:w-3/5 2xl:w-7/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl  font-semibold text-end break-words text-green-gradient"
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
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const measureRef = useRef<HTMLParagraphElement | null>(null);
  const [displayText, setDisplayText] = useState(testimonial.testimonial);

  useEffect(() => {
    const originalText = testimonial.testimonial;
    const sentences = originalText
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean);
    const el = textRef.current;
    const measurer = measureRef.current;

    if (!el || !measurer) return;

    const maxHeight = el.clientHeight;

    let fittedText = "";
    for (let i = 0; i < sentences.length; i++) {
      const testText = sentences.slice(0, i + 1).join(". ") + ".";
      measurer.textContent = testText;

      if (measurer.scrollHeight <= maxHeight) {
        fittedText = testText;
      } else {
        break;
      }
    }

    setDisplayText(fittedText || sentences[0] + ".");
  }, [testimonial.testimonial]);

  return (
    <div className="relative flex flex-col gap-6 w-full h-full bg-[#F9F9F9D9] rounded-2xl px-3 py-8 md:px-6 md:py-10">
      <div className="flex flex-col md:flex-row lg:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-full h-12">
            <h4 className="font-semibold text-xl md:text-2xl">
              {testimonial.name}
            </h4>
            <p className="text-[#707070] text-lg md:text-xl">
              {testimonial.title}
            </p>
          </div>
        </div>
        <div className="flex items-start md:items-center gap-2 mb-0 lg:mb-4">
          <Stars rating={testimonial.rating} />
          <span className="text-black/80 text-sm font-medium">
            {testimonial.score}
          </span>
        </div>
      </div>

      {/* visible text */}
      <p
        ref={textRef}
        className="text-black text-md md:text-xl md:font-medium leading-tight tracking-normal line-clamp-4 md:line-clamp-5 xl:line-clamp-6"
      >
        {displayText}
      </p>

      {/* hidden text measurer */}
      <p
        ref={measureRef}
        className="invisible absolute z-[-9999] w-full text-md md:text-xl md:font-medium leading-tight tracking-normal whitespace-pre-wrap"
        style={{
          visibility: "hidden",
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const remainder = rating - fullStars;
  const hasPartialStar = remainder > 0;
  const emptyStars = 5 - fullStars - (hasPartialStar ? 1 : 0);

  return (
    <div className="flex items-center gap-[2px]">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      ))}

      {/* Partial star */}
      {hasPartialStar && (
        <div className="relative w-5 h-5">
          <Star className="absolute w-5 h-5 fill-gray-300 text-gray-300" />
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${remainder * 100}%` }}
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="w-5 h-5 fill-gray-300 text-gray-300"
        />
      ))}
    </div>
  );
}
