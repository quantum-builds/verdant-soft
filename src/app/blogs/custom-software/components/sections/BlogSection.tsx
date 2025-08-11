import Navbar from "@/app/components/Navbar";
import {
  CustomSoftwareImage1,
  CustomSoftwareImage2,
  CustomSoftwareImage3,
  CustomSoftwareImage4,
  CustomSoftwareImage5,
} from "@/assets";
import Image from "next/image";

const MID_CONTENT = [
  {
    title: "Tailored to Your Needs",
    description:
      "No unnecessary features. No awkward workarounds. Just a solution built for the way your business actually operates.<br/> At Verdant Soft, we start by understanding your process, goals, and challenges then design software that fits like a glove.",
  },
  {
    title: "Smarter Scaling",
    description:
      "As your business grows, your software should too. We build with scalability in mind, so you don’t have to start from scratch every time you hit a new milestone.<br/> Whether it’s adding new users, modules, or integrations, custom software evolves with you.",
  },
  {
    title: "Modern Architecture: Containers & Microservices",
    description:
      "Need your CRM to talk to your invoicing tool? Want your ERP synced with your website? Custom software makes seamless integration possible saving time, reducing errors, and increasing efficiency.<br/> Our development team at Verdant Soft ensures your software works harmoniously with the tools you already use.",
  },
  {
    title: "Competitive Advantage",
    description:
      "When your tools are custom-built to match your operations, your team works smarter and faster. That means better customer experiences, improved productivity, and a true edge over competitors using cookie-cutter solutions.",
  },
  {
    title: "Increased Security & Control",
    description:
      "With custom development, you have full control over security features, data storage, and user access. No surprise updates, and no relying on a third-party vendor’s roadmap.<br/> At Verdant Soft, we build with security-first architecture and follow best practices from day one.",
  },
];

const DIFFERENT_LIST = [
  "Analyze their workflow and identify inefficiencies",
  "Design intuitive, user-friendly interfaces",
  "Build scalable, cloud-ready software",
  "Test, deploy, and support long after launch",
];

const RESULT_LIST = [
  "Increased team productivity and reduced manual work",
  "Faster decision-making with better data visibility",
  "Cost savings from automating repetitive tasks",
  "Stronger customer retention through tailored user experiences",
];

export default function BlogSection() {
  return (
    <section className="relative flex flex-col space-y-6 overflow-hidden bg-white mb-28 text-black">
      <Navbar />
      <div className="min-h-[30vh] mt-18 md:mt-16 xl:mt-24  w-11/12 xl:w-10/12  mx-auto flex flex-col gap-16 lg:gap-28  overflow-hidden">
        <h1 className="whitespace-nowrap text-[90px] md:text-[100px] lg:text-[130px] xl:text-[120px] 3xl:text-[145px] 4xl:text-[160px] 5xl:text-[170px] leading-tight font-semibold text-end break-words text-light-green-gradient">
          Blogs
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-26 xl:gap-30 3xl:gap-40 w-full">
          <div className="flex-1 flex flex-col gap-7 lg:gap-10 w-full">
            <h2 className="max-w-3xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              Why You Should Invest in Custom Software Development
            </h2>
            <p className="texl-lg xl:text-xl max-w-3xl">
              When you&apos;re running a business in today’s digital-first
              world, the right technology can make or break your success. But
              off-the-shelf software doesn’t always give you what you need and
              that’s where custom software development comes in.
              <br />
              <br />
              At Verdant Soft, we specialize in designing and building software
              that’s tailored to each client’s unique goals, challenges, and
              workflows. Whether you’re looking to improve internal operations,
              create a better user experience, or scale faster, custom
              development gives you the power to do more with fewer limitations.
              <br />
              <br />
              Let’s take a closer look at why investing in custom software is a
              smart move.
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full min-h-[250px]  md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] flex justify-center items-center rounded-2xl overflow-hidden ">
              <Image
                src={CustomSoftwareImage1}
                alt="custom-software-img1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-26 xl:gap-30 3xl:gap-40  w-full">
          <div className="flex-1 order-2 lg:order-1">
            <div className="w-full min-h-[250px]  md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] flex justify-center items-center rounded-2xl overflow-hidden">
              <Image
                src={CustomSoftwareImage2}
                alt="custom-software-img2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex-1 flex flex-col gap-7 lg:gap-10 w-full">
            <h2 className="max-w-3xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              Off-the-Shelf vs. Custom: What’s the Difference?
            </h2>
            <p className="texl-lg xl:text-xl max-w-3xl">
              Off-the-shelf software is like a one-size-fits-all suit—it might
              do the job, but it rarely fits perfectly. You often end up paying
              for features you don’t use and missing the ones you actually need.
              <br />
              <br />
              Custom software, on the other hand, is designed just for your
              business. It’s built around your workflows, goals, and
              users—meaning it works the way you work.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight w-full max-w-3xl">
            Why Cloud Optimization Matters
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-20 justify-content">
            {MID_CONTENT.map((content, index) => (
              <div key={index} className="flex flex-col ">
                <div className="flex flex-col gap-3 max-w-3xl">
                  <h3 className="text-2xl font-semibold text-green-gradient">
                    {content.title}
                  </h3>
                  <p
                    className="texl-md xl:text-xl"
                    dangerouslySetInnerHTML={{ __html: content.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full min-h-[100px] md:min-h-[300px] lg:min-h-[600px] xl:min-h-[800px] flex justify-center items-center rounded-2xl overflow-hidden opacity-50 grayscale-100 transition-all duration-300 ease-in-out">
          <Image
            src={CustomSoftwareImage3}
            alt="custom-software-img3"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 3xl:gap-40 w-full">
          <div className="flex flex-col  justify-between gap-10 lg:gap-20 w-full">
            <div className="flex-1 flex flex-col gap-7 w-full max-w-3xl">
              <h2 className="text-2xl md:text-3xl xl:text-4xl w-full md:w-10/12 lg:w-9/12 leading-tight font-semibold break-words text-green-gradient">
                What Verdant Soft Brings to the Table
              </h2>
              <p className="text-lg xl:text-xl">
                We don’t just write code we solve problems.
                <br />
                Our custom software development process at Verdant Soft is
                collaborative, flexible, and focused on your success. We help
                businesses:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl">
                {DIFFERENT_LIST.map((text, index) => (
                  <li key={index}>
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                  </li>
                ))}
              </ul>
              <p className="text-lg xl:text-xl">
                Whether it’s a web app, internal dashboard, customer portal, or
                mobile platform, we bring the expertise to build it right.
              </p>
            </div>
            <div className="flex-1">
              <div className="w-full min-h-[200px] md:h-[400px] lg:h-[500px] 5xl:h-[550px] flex justify-center items-center rounded-2xl overflow-hidden">
                <Image
                  src={CustomSoftwareImage4}
                  alt="custom-software-img4"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col  justify-between gap-10 lg:gap-20 w-full">
            <div className="flex-1 flex flex-col gap-7 w-full max-w-3xl">
              <h2 className=" text-2xl md:text-3xl xl:text-4xl w-full md:w-10/12 lg:w-9/12 leading-tight font-semibold break-words text-green-gradient">
                Real-World Impact
              </h2>
              <p className="text-lg xl:text-xl">
                Companies that work with Verdant Soft for custom development
                have seen:{" "}
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl ">
                {RESULT_LIST.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="w-full  min-h-[200px] md:h-[400px] lg:h-[500px] 5xl:h-[550px] flex justify-center items-center rounded-2xl overflow-hidden">
                <Image
                  src={CustomSoftwareImage5}
                  alt="custom-software-img5"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  justify-between gap-10 lg:gap-20 w-full">
          <div className="flex-1 flex flex-col gap-10 w-full">
            <h2 className="max-w-3xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              Thoughts
            </h2>
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-30 3xl:gap-40 w-full">
              <p className="texl-lg xl:text-xl max-w-3xl">
                Custom software isn’t just about building something new it’s
                about building something better. It’s about making your
                operations smoother, your users happier, and your business
                stronger.
                <br />
                At Verdant Soft, we believe software should work for you, not
                the other way around.
              </p>
              <p className="flex-1 texl-lg xl:text-xl lg:text-end max-w-4xl">
                Ready to explore a custom solution for your business? Let’s
                connect. We’d love to hear your challenges and build something
                amazing together.
              </p>
            </div>
          </div>
          {/* <div className="flex-1">
            <div className="w-full h-full min-h-[100px] md:min-h-[200px] lg:min-h-[300px] xl:min-h-[400px] flex justify-center items-center rounded-2xl overflow-hidden">
              <Image
                src={CustomSoftwareImage6}
                alt="custom-software-img6"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
