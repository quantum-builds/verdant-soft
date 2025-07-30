import Navbar from "@/app/components/Navbar";
import {
  ConsistantDesignImg1,
  ConsistantDesignImg2,
  ConsistantDesignImg3,
} from "@/assets";
import Image from "next/image";

const KEY_ELEMENTS = [
  {
    title: "Colors",
    description: "Use a specific palette to create harmony.",
  },
  {
    title: "Typography",
    description: "Stick to consistent fonts for clarity and style.",
  },
  {
    title: "Logo",
    description: "Maintain uniform placement and versions.",
  },
  {
    title: "Imagery",
    description: "Use a cohesive style for photos and icons.",
  },
  {
    title: "Messaging",
    description: "Align tone of voice with visual style.",
  },
];

const CONSITENT_LIST = [
  "Create a style guide.",
  "Use templates for common content.",
  "Regularly audit your materials.",
  "Train your team on brand standards.",
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
              The Power of Consistent Design: Unlocking Brand Success
            </h2>
            <p className="texl-lg xl:text-xl">
              In today’s crowded marketplace, standing out requires more than
              just great products or services. Your brand’s visual identity
              plays a crucial role in how audiences perceive and connect with
              you. Central to this is consistent design a powerful tool that can
              elevate your brand, foster trust, and ensure your message is
              understood clearly. Let’s explore why consistent design matters
              and how to harness its full potential.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={ConsistantDesignImg1}
              alt="strong-brand-img1"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1 order-2 lg:order-1">
            <Image
              src={ConsistantDesignImg2}
              alt="strong-brand-img1"
              className="w-10/12 h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 flex flex-col gap-7 w-full order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl  leading-tight font-semibold break-words text-green-gradient">
              Why It Matters
            </h2>
            <p className="texl-lg xl:text-xl font-normal">
              <span className="font-medium">Builds Recognition:</span>
              <br />
              Familiar visuals make your brand instantly identifiable.
              <br />
              <br />
              <span className="font-medium">Enhances Experience:</span>
              <br />
              Seamless design across platforms improves user engagement.
              <br />
              <br />
              <span className="font-medium">Boosts Credibility:</span>
              <br />
              A polished look signals trustworthiness.
              <br />
              <br />
              <span className="font-medium">Simplifies Creation:</span>
              <br />
              Clear guidelines streamline content development.
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-20 w-full mb-5">
          <div className="flex flex-col gap-7 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl  leading-tight font-semibold break-words text-green-gradient">
              Key Elements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {KEY_ELEMENTS.map((keyEle, index) => (
                <p key={index} className="texl-lg xl:text-xl">
                  <span className="font-medium">{keyEle.title}:</span>
                  <br />
                  {keyEle.description}
                </p>
              ))}
            </div>
          </div>
          <Image
            src={ConsistantDesignImg3}
            alt="strong-brand-img2"
            className="w-full h-[300px] lg:h-[450px] object-cover grayscale-100 z-0 rounded-2xl"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1 order-2 lg:order-1">
            <Image
              src={ConsistantDesignImg2}
              alt="strong-brand-img1"
              className="w-10/12 h-[500px] object-cover rounded-2xl"
            />
          </div>

          <div className="flex-1 flex flex-col gap-7 w-full order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl w-full md:w-10/12 lg:w-9/12 leading-tight font-semibold break-words text-green-gradient">
              Tips to Maintain Consistency
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl">
              {CONSITENT_LIST.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 
        <div className="flex gap-10 lg:gap-30 justify-content">
          {UPPER_CONTENT.map((content, index) => (
            <div key={index} className="flex flex-col gap-7 xl:gap-10">
              <div className="flex flex-col gap-10 min-h-70 xl:min-h-40">
                <h3 className="text-xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
                  {content.title}
                </h3>
                <p className="texl-lg xl:text-xl">
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
          <div className="flex  gap-10 lg:gap-30 justify-between">
            <div className="flex flex-col justify-between  gap-7 ">
              <h3 className="text-xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient ">
                Analyze Competitors
              </h3>
              <p className="flex-1 texl-lg xl:text-xl ">
                Look at what your competitors are doing well and where they fall
                short. Use this insight to differentiate your website and offer
                unique value.
              </p>
            </div>
            <div className="flex flex-col justify-between  gap-7">
              <h3 className="text-xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient ">
                Plan Content
              </h3>
              <p className="flex-1 texl-lg xl:text-xl ">
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
                <h3 className="text-xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
                  {content.title}
                </h3>
                <p className="texl-lg xl:text-xl">
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
        </div>*/}
      </div>
    </section>
  );
}
