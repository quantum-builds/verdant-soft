import Navbar from "@/app/components/Navbar";
import {
  ConsistantDesignImg2,
  StrongBrandImg1,
  StrongBrandImg2,
  StrongBrandImg3,
  StrongBrandImg4,
  StrongBrandImg5,
  StrongBrandImg6,
  StrongBrandImg7,
  StrongBrandImg8,
} from "@/assets";
import Image from "next/image";

const MID_CONTENT = [
  {
    title: "Right-Sizing Your Resources",
    description:
      "Often, companies pay for more than they use. We help analyze your actual needs and adjust resources (like storage and compute power) so you’re only paying for what brings value. No waste. Just smart usage.",
    image: StrongBrandImg3,
  },
  {
    title: "Smarter Scaling",
    description:
      "Your cloud should grow with your business—but only when needed. We set up autoscaling and load balancing so your system can handle spikes in traffic without draining your budget during quiet times.",
    image: StrongBrandImg4,
  },
  {
    title: "Modern Architecture: Containers & Microservices",
    description:
      "By breaking your applications into containers and microservices, we help make them faster, easier to maintain, and more affordable to run. Our team works with tools like Docker, Kubernetes, and serverless technologies to future-proof your setup.",
    image: StrongBrandImg5,
  },
  {
    title: "Multi-Cloud & Hybrid Strategies",
    description:
      "Not every business fits into one cloud provider. We help companies explore multi-cloud or hybrid options giving you flexibility, backup plans, and control over where and how your data lives.",
    image: StrongBrandImg6,
  },
  {
    title: "Real-Time Monitoring & Proactive Alerts",
    description:
      "With tools like CloudWatch, Grafana, and custom dashboards, we track your system's health and spending. You’ll always know what’s working, what needs attention, and where you can save.",
    image: StrongBrandImg7,
  },
];

const DIFFERENT_LIST = [
  "<strong>Strategy:</strong> Understanding your goals before making tech decisions",
  "<strong>Expertise:</strong> Real-world experience in building and scaling cloud solutions",
  "<strong>Support:</strong> Ongoing guidance to help you grow with confidence",
];

const RESULT_LIST = [
  "Reduced their monthly cloud costs by up to 40%",
  "Increased system performance and uptime",
  "Sped up release cycles through DevOps automation",
  "Gained peace of mind with reliable infrastructure and support",
];

export default function BlogSection() {
  return (
    <section className="relative flex flex-col space-y-6 overflow-hidden bg-white mb-28 text-black">
      <Navbar />
      <div className="min-h-[30vh] mt-18 md:mt-16 xl:mt-24  w-11/12 xl:w-10/12  mx-auto flex flex-col gap-16 lg:gap-28  overflow-hidden">
        <h1 className="text-[100px] lg:text-[130px] xl:text-[120px] 3xl:text-[145px] 4xl:text-[160px] 5xl:text-[170px] leading-tight font-semibold text-end break-words text-light-green-gradient">
          Blogs
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1">
            <Image
              src={StrongBrandImg8}
              alt="strong-brand-img1"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 flex flex-col gap-10 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              Optimizing Cost and Performance in Cloud Architecture
            </h2>
            <p className="texl-lg xl:text-xl">
              In today’s fast-moving digital world, cloud architecture plays a
              major role in how businesses scale, grow, and stay competitive.
              But here’s the truth: just moving to the cloud isn’t enough.
              Without a smart approach, you could end up spending more than
              necessary or dealing with performance issues that slow everything
              down.
              <br />
              <br /> At Verdant Soft, we work with companies every day to make
              sure their cloud setups aren’t just functional, but efficient,
              cost-effective, and built to perform. In this post, let’s break
              down what “optimization” really means and how we’re helping
              businesses get it right.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1 flex flex-col gap-10 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              Why Cloud Optimization Matters
            </h2>
            <p className="texl-lg xl:text-xl">
              The cloud offers a lot flexibility, scalability, access to
              powerful tools. But with that freedom comes a challenge: how do
              you make sure you’re not overpaying or underperforming?
              <br />
              <br /> Think of it like this: You wouldn’t rent a massive office
              space for a 3-person team. The same logic applies to your cloud
              setup. Using more than you need, or not using the right tools, can
              seriously affect your bottom line
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
            <h2 className="flex-1 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              How Verdant Soft Helps You Balance Cost and Performance
            </h2>
            <p className="flex-1 texl-lg xl:text-xl text-start lg:text-end">
              Here’s how we approach cloud optimization at Verdant Soft. It’s
              not one-size-fits-all it’s about understanding your business and
              building the right solution around it.
            </p>
          </div>
          <Image
            src={StrongBrandImg2}
            alt="strong-brand-img2"
            className="w-full h-[300px] lg:h-[400px] object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-10 lg:gap-20 justify-content">
          {MID_CONTENT.map((content, index) => (
            <div key={index} className="flex flex-col ">
              <div className="flex flex-col gap-3 min-h-70 xl:min-h-50">
                <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
                  {content.title}
                </h3>
                <p className="texl-md xl:text-xl">{content.description}</p>
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

        {/* <div className="flex flex-col gap-10 lg:gap-20 w-full">
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
        </div> */}
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
              What Makes Verdant Soft Different?
            </h2>
            <p className="text-lg xl:text-xl">
              We don’t just &quot;move&quot; businesses to the cloud we work as
              your long-term technology partner. Whether you’re starting from
              scratch or refining an existing setup, we bring a mix of:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl">
              {DIFFERENT_LIST.map((text, index) => (
                <li key={index}>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1 flex flex-col gap-7 w-full ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl w-full md:w-10/12 lg:w-9/12 leading-tight font-semibold break-words text-green-gradient">
              Real Results Our Clients See
            </h2>
            <p className="text-lg xl:text-xl">
              With Verdant Soft’s support, businesses have:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl">
              {RESULT_LIST.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 ">
            <Image
              src={ConsistantDesignImg2}
              alt="strong-brand-img1"
              className="w-10/12 h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
