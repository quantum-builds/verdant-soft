import Navbar from "@/app/components/Navbar";
import {
  StrongBrandImg1,
  StrongBrandImg2,
  StrongBrandImg3,
  StrongBrandImg4,
  StrongBrandImg5,
} from "@/assets";
import Image from "next/image";

const MID_CONTENT = [
  {
    title: "Building Trust and Credibility",
    description:
      "Consistency in branding fosters trust. When your brand communicates a clear and professional image across all channels, customers feel more confident in your offerings. Trust is the foundation of customer loyalty, leading to repeat business and positive word-of-mouth.",
    image: StrongBrandImg3,
  },
  {
    title: "Creating Emotional Connections",
    description:
      "A strong brand identity evokes emotions and connects with your audience on a deeper level. Whether through storytelling, visuals, or values, your brand can resonate with customers, turning casual buyers into loyal advocates.",
    image: StrongBrandImg4,
  },
];
export default function BlogSection() {
  return (
    <section className="relative flex flex-col space-y-6 overflow-hidden bg-white mb-28 text-black">
      <Navbar />
      <div className="min-h-[30vh] mt-18 md:mt-16 xl:mt-24  w-11/12 xl:w-10/12  mx-auto flex flex-col gap-16 lg:gap-20  overflow-hidden">
        <h1 className="text-[100px] lg:text-[130px] xl:text-[120px] 3xl:text-[145px] 4xl:text-[160px] 5xl:text-[170px] leading-tight font-semibold text-end break-words text-light-green-gradient">
          Blogs
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1 flex flex-col gap-10 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient">
              Why a Strong Brand Identity is Essential for Business Success
            </h2>
            <p className="texl-lg xl:text-xl">
              In today’s competitive marketplace, having a compelling product or
              service is not enough. Building a strong brand identity is crucial
              for establishing your business’s presence and ensuring long-term
              success. Let’s explore why a powerful brand identity is
              indispensable.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={StrongBrandImg1}
              alt="strong-brand-img1"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-20 w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30">
            <h2 className="flex-1 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient">
              Differentiation in a Crowded Market
            </h2>
            <p className="flex-1 texl-lg xl:text-xl text-start lg:text-end">
              With countless businesses offering similar products or services,
              standing out is vital. A well-crafted brand identity including
              your logo, colors, messaging, and tone helps your business
              differentiate itself. It creates a memorable impression that makes
              customers more likely to choose you over competitors.
            </p>
          </div>
          <Image
            src={StrongBrandImg2}
            alt="strong-brand-img2"
            className="w-full h-[300px] lg:h-[400px] object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-30 justify-content">
          {MID_CONTENT.map((content, index) => (
            <div key={index} className="flex flex-col gap-7 xl:gap-10">
              <div className="flex flex-col gap-10 min-h-70 xl:min-h-50">
                <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
                  {content.title}
                </h3>
                <p className="texl-md xl:text-xl">
                  Consistency in branding fosters trust. When your brand
                  communicates a clear and professional image across all
                  channels, customers feel more confident in your offerings.
                  Trust is the foundation of customer loyalty, leading to repeat
                  business and positive word-of-mouth.
                </p>
              </div>

              <div className="relative w-full h-[300px] lg:h-[400px]">
                <Image
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover grayscale-100 z-0 rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 lg:gap-20 w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 ">
            <h2 className="flex-1 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words leading-tight text-green-gradient">
              Effective Market Positioning
            </h2>
            <p className="flex-1 texl-lg xl:text-xl text-start lg:text-end">
              Your brand identity communicates your unique value proposition. It
              helps position your business within the industry and target
              market, ensuring that your message attracts the right audience and
              aligns with their needs and preferences.
            </p>
          </div>
          <Image
            src={StrongBrandImg5}
            alt="strong-brand-img2"
            className="w-full h-[300px] lg:h-[450px] object-cover grayscale-100 z-0 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
