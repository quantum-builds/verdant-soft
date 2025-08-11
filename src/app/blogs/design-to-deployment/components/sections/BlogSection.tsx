import Navbar from "@/app/components/Navbar";
import {
  DesignToDevImage1,
  DesignToDevImage2,
  DesignToDevImage3,
  DesignToDevImage4,
} from "@/assets";
import Image from "next/image";

const MID_CONTENT = [
  {
    title: "Phase 1: Understanding & UX/UI Design",
    description: `
      Every great product starts with understanding the problem.<br/>
      We kick off with discovery sessions to dive deep into your business, your users, and your goals.
      From there, our UI/UX designers create wireframes and prototypes to map out the user journey.<br/><br/>
      <ul>
        <li><strong>Focus:</strong> Clear navigation, intuitive interfaces, user-first design</li>
        <li><strong>Tools:</strong> Figma, Adobe XD, user personas, moodboards</li>
      </ul>
      At this stage, we ensure the look and feel of the product aligns perfectly with both user expectations and business objectives.
    `,
  },
  {
    title: "Phase 2: Development & Engineering",
    description: `
      Once the design is approved, our developers get to work turning those ideas into a fully functioning product.
      At Verdant Soft, we use modern web technologies and best practices to build clean, efficient, and scalable code.<br/><br/>
      <ul>
        <li><strong>Frontend:</strong> React, Vue, HTML/CSS, Tailwind</li>
        <li><strong>Backend:</strong> Node.js, Laravel, Django, custom APIs</li>
        <li><strong>Database:</strong> MySQL, PostgreSQL, MongoDB</li>
      </ul>
      Our DevOps team works alongside developers to set up continuous integration, automated testing, and scalable deployment pipelines.
      Everything is built to grow with your business.
    `,
  },
  {
    title: "Phase 3: Testing & Feedback Loops",
    description: `
      Before launch, we run extensive testing—because the last thing anyone wants is bugs in production.<br/><br/>
      <ul>
        <li><strong>Functional Testing</strong></li>
        <li><strong>Performance Testing</strong></li>
        <li><strong>Cross-Browser & Cross-Device Testing</strong></li>
      </ul>
      We also include feedback loops with clients to tweak and refine any last-minute user flows or design interactions.
    `,
  },
  {
    title: "Phase 4: Deployment & Launch",
    description: `
      When everything’s ready, we push to production using cloud platforms like AWS, Azure, or Vercel.
      Our DevOps team ensures the deployment is secure, automated, and monitorable from day one.<br/><br/>
      <ul>
        <li><strong>CI/CD Pipelines</strong></li>
        <li><strong>Version Control with Git</strong></li>
        <li><strong>Staging Environments for Previews</strong></li>
      </ul>
      We also provide training, documentation, and post-launch support, so you're never left guessing how to use or manage your new digital product.
    `,
  },
];

const BRING_LIST = [
  "We're collaborative you’re part of the process at every step",
  "We’re full-cycle strategy, design, development, deployment",
  "We prioritize performance, usability, and scalability",
  "Our solutions are tailored no one-size-fits-all shortcuts",
];

const RESULT_LIST = [
  "Increased user retention through better UX",
  "Reduced development time with optimized DevOps pipelines",
  "Higher system performance with custom backend architecture",
  "Seamless third-party integrations tailored to each business",
];

export default function BlogSection() {
  return (
    <section className="relative flex flex-col space-y-6 overflow-hidden bg-white mb-28 text-black">
      <Navbar />
      <div className="min-h-[30vh] mt-18 md:mt-16 xl:mt-24  w-11/12 xl:w-10/12  mx-auto flex flex-col gap-16 lg:gap-20  overflow-hidden">
        <h1 className="whitespace-nowrap text-[90px] md:text-[100px] lg:text-[130px] xl:text-[120px] 3xl:text-[145px] 4xl:text-[160px] 5xl:text-[170px] leading-tight font-semibold text-end break-words text-light-green-gradient">
          Blogs
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-26 xl:gap-30 3xl:gap-40 w-full">
          <div className="flex-1 flex flex-col gap-7 lg:gap-10 w-full">
            <h2 className="max-w-3xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
              ⁠How Our Team Builds Digital Products: From Design to Deployment
            </h2>
            <p className="texl-lg xl:text-xl max-w-3xl">
              Bringing a digital product to life—from the first sketch to a
              live, working platform is an exciting journey. At Verdant Soft, we
              make that journey smooth, strategic, and collaborative.
              <br />
              <br />
              Whether we’re building a web app, SaaS platform, or internal
              business tool, our goal is the same: to deliver a digital product
              that’s functional, scalable, and delightful to use.
              <br />
              So, how do we do it? Here’s a behind-the-scenes look at how our
              team takes a product from idea to deployment and beyond.
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full min-h-[250px]  md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] flex justify-center items-center rounded-2xl overflow-hidden ">
              <Image
                src={DesignToDevImage1}
                alt="custom-software-img1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 lg:gap-30 justify-content">
          {MID_CONTENT.map((content, index) => (
            <div key={index} className="flex flex-col gap-7 xl:gap-10">
              <div className="flex flex-col gap-10 min-h-70 xl:min-h-50">
                <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
                  {content.title}
                </h3>
                <div
                  className="text-md xl:text-xl [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full min-h-[100px] md:min-h-[200px] lg:min-h-[300px] xl:min-h-[400px] flex justify-center items-center rounded-2xl overflow-hidden opacity-50 grayscale-100 transition-all duration-300 ease-in-out">
          <Image
            src={DesignToDevImage2}
            alt="custom-software-img3"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-30 3xl:gap-40 w-full">
          <div className="flex flex-col  justify-between gap-10 lg:gap-20 w-full">
            <div className="flex-1 flex flex-col gap-7 w-full max-w-3xl">
              <h2 className="text-2xl md:text-3xl xl:text-4xl w-full md:w-10/12 lg:w-9/12 leading-tight font-semibold break-words text-green-gradient">
                What Sets Verdant Soft Apart{" "}
              </h2>
              <p className="text-lg xl:text-xl">
                Here’s what clients love about working with us:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl">
                {BRING_LIST.map((text, index) => (
                  <li key={index}>
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="w-full  min-h-[200px] md:h-[400px] lg:h-[500px] 5xl:h-[550px]flex justify-center items-center rounded-2xl overflow-hidden">
                <Image
                  src={DesignToDevImage3}
                  alt="design-to-dev-image4"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col  justify-between gap-10 lg:gap-20 w-full">
            <div className="flex-1 flex flex-col gap-7 w-full max-w-3xl">
              <h2 className=" text-2xl md:text-3xl xl:text-4xl w-full md:w-10/12 lg:w-9/12 leading-tight font-semibold break-words text-green-gradient">
                Real Results from Verdant Soft Projects
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-lg xl:text-xl ">
                {RESULT_LIST.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="w-full  min-h-[200px] md:h-[400px] lg:h-[500px] 5xl:h-[550px] flex justify-center items-center rounded-2xl overflow-hidden">
                <Image
                  src={DesignToDevImage4}
                  alt="design-to-dev-image4"
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
                Building a digital product isn’t just about writing code it’s
                about solving problems, improving lives, and supporting business
                growth.
              </p>
              <p className="flex-1 texl-lg xl:text-xl lg:text-end max-w-4xl">
                At Verdant Soft, we bring together designers, developers, and
                DevOps engineers to deliver end-to-end solutions that not only
                work but work beautifully.
              </p>
            </div>
          </div>
          {/* <div className="flex-1">
            <div className="w-full h-full min-h-[100px] md:min-h-[200px] lg:min-h-[300px] xl:min-h-[400px] flex justify-center items-center rounded-2xl overflow-hidden">
              <Image
                src={DesignToDevImage5}
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
