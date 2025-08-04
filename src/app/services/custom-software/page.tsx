import Navbar from "./../../components/Navbar";
import Image from "next/image";
import {
  AmazonAuroraIcon,
  DjangoIcon,
  DottedBG,
  ExpressIcon,
  JsIcon,
  KonvaIcon,
  KotlinIcon,
  MongoDbIcon,
  MySqlIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  PhpIcon,
  PythonIcon,
  ReactIcon,
  SqLiteIcon,
  VueIcon,
} from "@/assets";
import FooterSection from "./../../components/sections/FooterSection";
import { IUseCase } from "@/common";
import WorkFlowSection from "../components/WorkFlowSection";
import TechnologiesSection from "../components/TechnologiesSection";
import FAQSection from "./../../components/sections/FAQSection";

const STEPS = [
  {
    step: 1,
    color: "#C72C91",
    description: "Planning & Requirement Analysis",
  },
  {
    step: 2,
    color: "#0565FF",
    description: "Design",
  },
  {
    step: 3,
    color: "#FF8800",
    description: "Development",
  },
  {
    step: 4,
    color: "#4AA047",
    description: "Testing",
  },
  {
    step: 5,
    color: "#1BBFCC",
    description: "Deployment",
  },
  {
    step: 6,
    color: "#5B57C2",
    description: "Maintenance & Updates",
  },
];

const USE_CASES: IUseCase[] = [
  {
    title: "Frontend",
    technologies: [
      { title: "JavaScript", image: JsIcon },
      { title: "Kotlin", image: KotlinIcon },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { title: "Node", image: NodeIcon },
      { title: "Python", image: PythonIcon },
      { title: "Php", image: PhpIcon },
    ],
  },
  {
    title: "Frameworks",
    technologies: [
      { title: "React", image: ReactIcon },
      { title: "Vue", image: VueIcon },
      { title: "Next", image: NextIcon },
      { title: "Django", image: DjangoIcon },
      { title: "Nest", image: NestIcon },
      { title: "Express", image: ExpressIcon },
      { title: "Konva", image: KonvaIcon },
    ],
  },
  {
    title: "DataBase",
    technologies: [
      { title: "MySql", image: MySqlIcon },
      { title: "MongoDb", image: MongoDbIcon },
      { title: "Amazon Aurora", image: AmazonAuroraIcon },
      { title: "SQLite", image: SqLiteIcon },
    ],
  },
];

export default function CustomSoftwarePage() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Navbar />

      <section className="relative w-11/12 xl:w-10/12 mx-auto min-h-[70vh] mb-20">
        <div className="hidden absolute top-40 lg:-right-10 xl:-right-10 3xl:right-0 lg:flex items-end justify-end z-20">
          <Image
            src={DottedBG}
            alt="Dotted Background"
            className="w-4/5 md:w-3/4 lg:w-2/3 2xl:w-9/12 3xl:w-11/12 5xl:w-full h-auto object-center lg:rotate-110 xl:rotate-100 3xl:rotate-90"
          />
        </div>
        <div className="max-w-11/12 lg:max-w-3/5 xl:max-w-1/2  mt-24 md:mt-32 xl:mt-40">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 text-footer-black inline-block leading-tight">
            <span className="text-green-gradient">Web</span> Development
          </h1>
          <p>
            At Verdant Soft, we are passionate about delivering innovative and
            customized web development solutions that empower your business to
            thrive in the digital landscape. Our expert team of designers,
            developers, and strategists collaborates closely with you to craft
            websites that are not only visually stunning but also highly
            functional and tailored to your unique needs.
            <br />
            <br /> We specialize in creating seamless, responsive websites that
            provide an exceptional user experience across all devices—desktops,
            tablets, and smartphones. Our solutions leverage the latest
            technologies and industry best practices to ensure your website is
            fast, secure, and scalable, helping you stay ahead of the
            competition.
            <br />
            <br /> From initial concept and design to development, testing, and
            deployment, Verdant Soft is committed to delivering high-quality,
            professional websites that reflect your brand’s identity and values.
            We also offer ongoing support and maintenance to keep your website
            current, secure, and optimized for performance.
            <br />
            <br /> Partner with Verdant Soft to elevate your online presence
            with a custom web solution designed specifically for your business.
            Let us help you attract more visitors, generate leads, and achieve
            your growth objectives in today’s digital-first world.
          </p>
        </div>
      </section>
      <WorkFlowSection steps={STEPS} />
      <TechnologiesSection
        title="<highlight>Web </highlight>Developement Technologies"
        useCases={USE_CASES}
      />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
