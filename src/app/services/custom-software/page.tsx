import Navbar from "../../components/Navbar";
import Image from "next/image";
import {
  AmazonAuroraIcon,
  CustomSoftwareServiceBG,
  DjangoIcon,
  ECommerce,
  ExpressIcon,
  JsIcon,
  KonvaIcon,
  KotlinIcon,
  MongoDbIcon,
  MySqlIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  ParkingApplication,
  PhpIcon,
  PythonIcon,
  ReactIcon,
  RealEstate,
  SqLiteIcon,
  Step1Line,
  Step2Line,
  Step3Line,
  Step4Line,
  Step5Line,
  Step6Line,
  VueIcon,
} from "@/assets";
import FooterSection from "../../components/sections/FooterSection";
import { IUseCase } from "@/common";
import WorkFlowSection from "../components/WorkFlowSection";
import TechnologiesSection from "../components/TechnologiesSection";
import FAQSection from "../../components/sections/FAQSection";
import CaseStudySection from "../components/CaseStudySection";

const STEPS = [
  {
    step: 1,
    color: "#C72C91",
    title: "Requirement Analysis",
    lineImage: Step1Line,
    description:
      "Requirement analysis is the process of identifying, understanding, and documenting stakeholder needs to guide system development.",
  },
  {
    step: 2,
    color: "#0565FF",
    title: "Design & Planning",
    lineImage: Step2Line,
    description:
      "Design & planning involve systematically creating and organizing ideas, strategies, and solutions to achieve specific goals effectively.",
  },
  {
    step: 3,
    color: "#FF8800",
    title: "Development",
    lineImage: Step3Line,
    description:
      "The Development Phase involves coding, integrating, and building the software according to design specifications to create a functional product.",
  },
  {
    step: 4,
    color: "#4AA047",
    title: "Testing",
    lineImage: Step4Line,
    description:
      "Custom software testing is tailored testing designed to verify that unique software features meet specific business requirements and quality standards.",
  },
  {
    step: 5,
    color: "#1BBFCC",
    title: "Deployment",
    lineImage: Step5Line,
    description:
      "Launch the website to a live server, configure hosting, and ensure everything is functioning correctly in the production environment.",
  },
  {
    step: 6,
    color: "#5B57C2",
    title: "Maintenance & Updates",
    lineImage: Step6Line,
    description:
      "Monitor performance, fix bugs, update content, and add new features as needed for continuous improvement.",
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

const POINTS_LIST = [
  "We create tailored solutions specifically designed to meet your unique business needs.",
  "Our applications are built to grow with your business and adapt to changing requirements.",
  "We focus on streamlining workflows to improve productivity and operational performance.",
  "Our solutions empower your organization to innovate, expand, and stay competitive.",
];

const CASE_STUDIES = [
  {
    title: "E-commerce Platform",
    link: "/case-study/e-commerce",
    image: ECommerce,
  },
  {
    title: "Real Estate Platform",
    link: "/case-study/real-estate",
    image: RealEstate,
  },
  {
    title: "Parking Application",
    link: "/case-study/parking-app",
    image: ParkingApplication,
  },
];

export default function CustomSoftwarePage() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Navbar />

      <section className=" w-11/12 xl:w-10/12 mx-auto  mb-20">
        <div className="w-full md:max-w-3/5 lg:max-w-3/5 xl:max-w-1/2 mt-24 md:mt-32 xl:mt-40 h-fit relative">
          <div className="w-auto h-[400px] md:h-[600px] lg:h-[700px] 5xl:h-[750px] flex justify-center items-center rounded-2xl overflow-hidden   mb-6">
            <Image
              src={CustomSoftwareServiceBG}
              alt="custom-software-img4"
              className="relative w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="hidden md:block absolute -right-[60%] lg:-right-1/2 xl:-right-[80%] top-[8%] xl:top-[15%]   bg-white shadow-2xl px-10 py-20 w-[calc(90%)] lg:w-[calc(70%)] xl:w-[calc(100%)] rounded-2xl border-gradient-right-rounded z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-footer-black inline-block leading-tight">
              <span className="text-green-gradient">Custom Software</span>{" "}
              Development
            </h1>
            <ul className="list-disc pl-6 space-y-5 text-lg xl:text-xl">
              {POINTS_LIST.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>

          <h1 className="md:hidden text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-footer-black inline-block leading-tight">
            <span className="text-green-gradient">Custom Software</span>{" "}
            Development
          </h1>
          <ul className="md:hidden list-disc pl-6 space-y-3 text-lg xl:text-xl">
            {POINTS_LIST.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </section>

      <WorkFlowSection steps={STEPS} />
      <TechnologiesSection
        title="<highlight>Custom Software </highlight>Developement Technologies"
        useCases={USE_CASES}
      />
      <div className="min-h-[70vh] 3xl:min-h-[50vh] w-11/12 xl:w-10/12  mx-auto mb-28 flex flex-col gap-12 overflow-hidden">
        {/* <p className="font-semibold text-2xl">[02 Case Studies]</p> */}
        <div className="w-full ">
          <h2 className="w-11/12 md:w-[57%] lg:w-[55%] xl:w-3/5 2xl:w-7/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl  font-semibold  break-words text-footer-black">
            Projects <span className="text-green-gradient">Highlights</span>
          </h2>
        </div>
        <CaseStudySection caseStuies={CASE_STUDIES} />
      </div>
      <FAQSection />
      <FooterSection />
    </main>
  );
}
