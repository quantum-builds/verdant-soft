import Image from "next/image";
import {
  AliBabaIcon,
  AnsibleIcon,
  AWSIcon,
  AzureIcon,
  BashIcon,
  BitBucketIcon,
  CircleCiIcon,
  CloudDevOpsServiceBG,
  CloudFormationIcon,
  DataLogIcon,
  DigitalOceanIcon,
  DockerIcon,
  DynatraceIcon,
  ElasticSearchIcon,
  GCPIcon,
  GitHubIcon,
  GitLabIcon,
  GoIcon,
  GrafanaIcon,
  JavaSriptIcon,
  JenkinsIcon,
  KubernetesIcon,
  LinuxIcon,
  OpenShiftIcon,
  PowerShellIcon,
  PrometheousIcon,
  PythonIcon,
  TeraFormIcon,
  WindowsIcon,
} from "@/assets";
import Navbar from "./../../components/Navbar";
import FooterSection from "./../../components/sections/FooterSection";
import WorkFlowSection from "../components/WorkFlowSection";
import FAQSection from "./../../components/sections/FAQSection";
import { IUseCase } from "@/common";
import TechnologiesSection from "../components/TechnologiesSection";

const STEPS = [
  {
    step: 1,
    color: "#C72C91",
    description: "Plan & Develop",
  },
  {
    step: 2,
    color: "#0565FF",
    description: "Build & Test",
  },
  {
    step: 3,
    color: "#FF8800",
    description: "Integrate & Deploy",
  },
  {
    step: 4,
    color: "#4AA047",
    description: "Release",
  },
  {
    step: 5,
    color: "#1BBFCC",
    description: "Operate & Monitor",
  },
  {
    step: 6,
    color: "#5B57C2",
    description: "Feedback & Improve",
  },
];

const USE_CASES: IUseCase[] = [
  {
    title: "Clouds",
    technologies: [
      { title: "AWS", image: AWSIcon },
      { title: "Azure", image: AzureIcon },
      { title: "GCP", image: GCPIcon },
      { title: "Digital Ocean", image: DigitalOceanIcon },
      { title: "Alibaba", image: AliBabaIcon },
    ],
  },
  {
    title: "CICD",
    technologies: [
      { title: "GitHub", image: GitHubIcon },
      { title: "BitBucket", image: BitBucketIcon },
      { title: "GitLab", image: GitLabIcon },
      { title: "Jenkins", image: JenkinsIcon },
      { title: "CircleCI", image: CircleCiIcon },
    ],
  },
  {
    title: "Containerization & Orchestration",
    technologies: [
      { title: "Docker", image: DockerIcon },
      { title: "Kubernetes", image: KubernetesIcon },
      { title: "OpenShift", image: OpenShiftIcon },
    ],
  },
  {
    title: "IAC",
    technologies: [
      { title: "Terraform", image: TeraFormIcon },
      { title: "CloudFormation", image: CloudFormationIcon },
      { title: "Ansible", image: AnsibleIcon },
    ],
  },
  {
    title: "Monitoring & Logging",
    technologies: [
      { title: "DataDog", image: DataLogIcon },
      { title: "Prometheous", image: PrometheousIcon },
      { title: "Grafana", image: GrafanaIcon },
      { title: "ElasticSearch", image: ElasticSearchIcon },
      { title: "Dynatrace", image: DynatraceIcon },
    ],
  },
  {
    title: "Operating System",
    technologies: [
      { title: "Linux", image: LinuxIcon },
      { title: "Windows", image: WindowsIcon },
    ],
  },
  {
    title: "Scripting & Automation",
    technologies: [
      { title: "Bash", image: BashIcon },
      { title: "Powsershell", image: PowerShellIcon },
      { title: "Python", image: PythonIcon },
      { title: "JavaScript", image: JavaSriptIcon },
      { title: "Go", image: GoIcon },
    ],
  },
];

export default function CloudDevopsPage() {
  return (
    <main className="flex flex-col  overflow-hidden">
      <Navbar />
      <section className="min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-2/3 object-cover"
            src={CloudDevOpsServiceBG}
            alt="hero background"
          />
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>

        <div className="relative z-10 w-full px-4 mt-[70vh] 5xl:mt-[73vh] mb-20">
          <div className="bg-white max-w-7xl mx-auto rounded-xl p-5 lg:p-8 xl:p-10">
            <div className="flex flex-col items-center gap-2 lg:gap-7  w-full ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 text-footer-black inline-block leading-tight">
                <span className="text-green-gradient">Cloud &</span> DevOps
              </h1>
              <p className="text-lg lg:text-xl text-center">
                Verdant Soft offers expert DevOps and cloud solutions to boost
                your application&apos;s performance, scalability, and
                reliability. We specialize in automation, CI/CD, and
                infrastructure as code to streamline deployment and reduce
                errors. Our tailored cloud management ensures secure,
                cost-effective, and scalable environments. Partner with us to
                accelerate innovation, minimize downtime, and stay ahead of the
                competition.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WorkFlowSection steps={STEPS} />
      <TechnologiesSection
        title="<highlight>DevOps </highlight>Tools & Integrations"
        useCases={USE_CASES}
      />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
