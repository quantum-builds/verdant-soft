import Navbar from "@/app/[locale]/components/Navbar";
import {
  WebsiteStrategyImg1,
  WebsiteStrategyImg2,
  WebsiteStrategyImg3,
  WebsiteStrategyImg4,
  WebsiteStrategyImg5,
  WebsiteStrategyImg6,
  WebsiteStrategyImg7,
  WebsiteStrategyImg8,
  WebsiteStrategyImg9,
} from "@/assets";
import Image from "next/image";

const UPPER_CONTENT = [
  {
    title: "Set Clear Goals",
    description:
      "Define what you want your website to achieve, such as increasing sales, generating leads, or boosting brand awareness. Clear goals guide your design and content decisions.",
    image: WebsiteStrategyImg2,
  },
  {
    title: "Understand Your Audience",
    description:
      "Research who your visitors are, what they need, and how they behave online. Create profiles to tailor your website experience accordingly.",
    image: WebsiteStrategyImg3,
  },
];

const MID_CONTENT = [
  {
    title: "Design for UX",
    description:
      "Ensure your website is easy to navigate, loads quickly, and is mobile-friendly. A good user experience keeps visitors engaged and encourages action.",
    image: WebsiteStrategyImg5,
  },
  {
    title: "Optimize for SEO",
    description:
      "Use relevant keywords, optimize page titles and meta descriptions, and improve site speed to increase your visibility in search engines.",
    image: WebsiteStrategyImg6,
  },
  {
    title: "Track Performance",
    description:
      "Implement tools like Google Analytics to monitor visitor behavior, conversions, and other key metrics. Use this data to inform improvements.",
    image: WebsiteStrategyImg7,
  },
  {
    title: "Test & Improve",
    description:
      "Use relevant keywords, optimize page titles and meta descriptions, and improve site speed to increase your visibility in search engines.",
    image: WebsiteStrategyImg8,
  },
];
export default function BlogSection() {
  return (
    <section className="relative flex flex-col space-y-6 overflow-hidden bg-white mb-28 text-black">
      <Navbar />
      <div className="min-h-[30vh]  mt-18 md:mt-16 xl:mt-24  w-11/12 xl:w-10/12  mx-auto flex flex-col gap-16 lg:gap-20 overflow-hidden">
        <h1 className="text-[100px] lg:text-[130px] xl:text-[120px] 3xl:text-[145px] 4xl:text-[160px] 5xl:text-[170px] leading-tight font-semibold text-end break-words text-light-green-gradient">
          Blogs
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1 flex flex-col gap-10 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient">
              How to Nail Your Website Strategy: A Step-by-Step Guide
            </h2>
            <p className="texl-lg xl:text-xl">
              In today’s digital landscape, your website is often the first
              impression potential customers have of your brand. An effective
              website strategy ensures that this impression is positive,
              engaging, and aligned with your business goals. Whether you’re
              launching a new site or revamping an existing one, following these
              steps will help you craft a winning website strategy.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={WebsiteStrategyImg1}
              alt="strong-brand-img1"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-30 justify-content">
          {UPPER_CONTENT.map((content, index) => (
            <div key={index} className="flex flex-col gap-7 xl:gap-10">
              <div className="flex flex-col gap-10 min-h-70 xl:min-h-40">
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

              <div className="relative w-full h-[250px] lg:h-[300px]">
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
          <div className="flex flex-col md:flex-row  gap-10 lg:gap-30 justify-between">
            <div className="flex flex-col justify-between  gap-7 ">
              <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient ">
                Analyze Competitors
              </h3>
              <p className="flex-1 texl-md xl:text-xl ">
                Look at what your competitors are doing well and where they fall
                short. Use this insight to differentiate your website and offer
                unique value.
              </p>
            </div>
            <div className="flex flex-col justify-between  gap-7">
              <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient ">
                Plan Content
              </h3>
              <p className="flex-1 texl-md xl:text-xl ">
                Decide on the types of content (blogs, videos, case studies) and
                create a schedule for publishing. Quality content attracts and
                engages visitors.
              </p>
            </div>
          </div>
          <Image
            src={WebsiteStrategyImg4}
            alt="strong-brand-img2"
            className="w-full h-[300px] lg:h-[450px] object-cover grayscale-100 z-0 rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 justify-content">
          {MID_CONTENT.map((content, index) => (
            <div key={index} className="flex flex-col gap-7 xl:gap-10">
              <div className="flex flex-col gap-10 min-h-70 xl:min-h-40">
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

              <div className="relative w-full h-[250px] lg:h-[300px] 4xl:h-[350px]">
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
          <div className="flex flex-col justify-between items-center gap-7 w-10/12 md:w-2/3 lg:w-1/2 mx-auto">
            <h3 className="text-xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient text-center">
              Maintain & Update
            </h3>
            <p className="flex-1 texl-lg xl:text-xl text-center">
              Keep your website current by updating content, fixing technical
              issues, and ensuring security. Regular maintenance keeps your site
              reliable and relevant.
            </p>
          </div>
          <Image
            src={WebsiteStrategyImg9}
            alt="strong-brand-img2"
            className="w-full h-[300px] lg:h-[450px] object-cover grayscale-100 z-0 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
