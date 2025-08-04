import Navbar from "@/app/components/Navbar";
import {
  ConsistantDesignImg2,
  StrongBrandImg1,
  StrongBrandImg2,
  StrongBrandImg3,
  StrongBrandImg4,
} from "@/assets";
import Image from "next/image";

const MID_CONTENT = [
  {
    title: "Tailored to Your Needs",
    description:
      "No unnecessary features. No awkward workarounds. Just a solution built for the way your business actually operates.<br/>At Verdant Soft, we start by understanding your process, goals, and challenges—then design software that fits like a glove.",
    image: StrongBrandImg3,
  },
  {
    title: "Scalable and Future-Ready",
    description:
      "As your business grows, your software should too. We build with scalability in mind, so you don’t have to start from scratch every time you hit a new milestone.<br/>Whether it’s adding new users, modules, or integrations, custom software evolves with you.",
    image: StrongBrandImg4,
  },
  {
    title: "Better Integration with Your Ecosystem",
    description:
      "Need your CRM to talk to your invoicing tool? Want your ERP synced with your website? Custom software makes seamless integration possible—saving time, reducing errors, and increasing efficiency.<br/>Our development team at Verdant Soft ensures your software works harmoniously with the tools you already use.",
    image: StrongBrandImg4,
  },
  {
    title: "Competitive Advantage",
    description:
      "When your tools are custom-built to match your operations, your team works smarter and faster. That means better customer experiences, improved productivity, and a true edge over competitors using cookie-cutter solutions.",
    image: StrongBrandImg4,
  },
  {
    title: "Increased Security & Control",
    description:
      "With custom development, you have full control over security features, data storage, and user access. No surprise updates, and no relying on a third-party vendor’s roadmap.<br/>At Verdant Soft, we build with security-first architecture and follow best practices from day one.",
    image: StrongBrandImg4,
  },
];

const BRING_LIST = [
  "Analyze their workflow and identify inefficiencies",
  "Design intuitive, user-friendly interfaces",
  "Build scalable, cloud-ready software",
  "Test, deploy, and support long after launch",
];

const IMPACT_LIST = [
  "Increased team productivity and reduced manual work",
  "Faster decision-making with better data visibility",
  "Cost savings from automating repetitive tasks",
  "Stronger customer retention through tailored user experiences",
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
          <div className="flex-1">
            <Image
              src={StrongBrandImg1}
              alt="strong-brand-img1"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 flex flex-col gap-10 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              Optimizing Cost and Performance in Cloud Architecture
            </h2>
            <p className="texl-lg xl:text-xl">
              When you&apos;re running a business in today’s digital-first
              world, the right technology can make or break your success. But
              off-the-shelf software doesn’t always give you what you need and
              that’s where custom software development comes in.
              <br />
              <br /> At Verdant Soft, we specialize in designing and building
              software that’s tailored to each client’s unique goals,
              challenges, and workflows. Whether you’re looking to improve
              internal operations, create a better user experience, or scale
              faster, custom development gives you the power to do more with
              fewer limitations.
              <br />
              <br /> Let’s take a closer look at why investing in custom
              software is a smart move.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1 flex flex-col gap-10 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              Off-the-Shelf vs. Custom: What’s the Difference?
            </h2>
            <p className="texl-lg xl:text-xl">
              Off-the-shelf software is like a one-size-fits-all suit it might
              do the job, but it rarely fits perfectly. You often end up paying
              for features you don’t use and missing the ones you actually need.
              <br />
              <br />
              Custom software, on the other hand, is designed just for your
              business. It’s built around your workflows, goals, and users
              meaning it works the way you work.
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
              Why Businesses Choose Custom Software
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

        <div className="grid grid-cols-2 gap-10 lg:gap-30 justify-content">
          {MID_CONTENT.map((content, index) => (
            <div key={index} className="flex flex-col gap-7 xl:gap-10">
              <div className="flex flex-col gap-10 min-h-70 xl:min-h-50">
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
              What Verdant Soft Brings to the Table
            </h2>
            <p className="text-lg xl:text-xl">
              We don’t just write code we solve problems.
              <br />
              <br />
              Our custom software development process at Verdant Soft is
              collaborative, flexible, and focused on your success. We help
              businesses:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl">
              {BRING_LIST.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
            <p className=" text-lg xl:text-xl">
              Whether it’s a web app, internal dashboard, customer portal, or
              mobile platform, we bring the expertise to build it right.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 w-full">
          <div className="flex-1 flex flex-col gap-7 w-full ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl w-full md:w-10/12 lg:w-9/12 leading-tight font-semibold break-words text-green-gradient">
              Real-World Impact
            </h2>
            <p className="text-lg xl:text-xl">
              Companies that work with Verdant Soft for custom development have
              seen:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl">
              {IMPACT_LIST.map((text, index) => (
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
