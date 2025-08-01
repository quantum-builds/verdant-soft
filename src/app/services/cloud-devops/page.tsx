import Image from "next/image";
import {
  AliBabaIcon,
  AnsibleIcon,
  AWSIcon,
  AzureIcon,
  BashIcon,
  BitBucketIcon,
  CircleCiIcon,
  CloudFormationIcon,
  DataLogIcon,
  DigitalOceanIcon,
  DockerIcon,
  DottedBG,
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

      <section className="relative w-11/12 xl:w-10/12 mx-auto min-h-[80vh] mb-20">
        <div className="hidden absolute top-40 lg:-right-10 xl:-right-10 3xl:right-0 lg:flex items-end justify-end z-20">
          <Image
            src={DottedBG}
            alt="Dotted Background"
            className="w-4/5 md:w-3/4 lg:w-2/3 2xl:w-9/12 3xl:w-11/12 5xl:w-full h-auto object-center lg:rotate-110 xl:rotate-100 3xl:rotate-90"
          />
        </div>
        <div className="max-w-11/12 lg:max-w-3/5 xl:max-w-1/2   mt-24 md:mt-32 xl:mt-40">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 text-green-gradient inline-block leading-tight">
            <span className="text-green-gradient">Cloud &</span> DevOps
          </h1>
          <p className="text-lg">
            At Verdant Soft, we specialize in delivering seamless DevOps and
            cloud solutions designed to optimize your application&apos;s
            performance, scalability, and reliability. Our team of experienced
            professionals works closely with your organization to create
            tailored strategies that streamline your development, deployment,
            and management processes.
            <br />
            <br /> Our DevOps services focus on integrating development and
            operations teams through automation, continuous integration and
            delivery (CI/CD), and infrastructure as code. This approach reduces
            deployment times, minimizes errors, and accelerates your
            time-to-market, ensuring your applications are always running
            efficiently and reliably.
            <br />
            <br /> In addition, our cloud solutions are crafted to meet your
            unique business needs. We provide comprehensive cloud
            management—including migration, infrastructure setup, security, and
            ongoing maintenance—to maximize your cloud investment. Our experts
            ensure your cloud environment is scalable, secure, and
            cost-effective, enabling your business to adapt quickly to changing
            demands.
            <br />
            <br /> By leveraging our expertise in automation, monitoring, and
            cloud architecture, we help you achieve a high level of operational
            excellence, reduce downtime, and enhance user experience. Whether
            you&apos;re migrating to the cloud, optimizing existing
            infrastructure, or implementing continuous deployment pipelines,
            Verdant Soft is committed to delivering solutions that drive your
            business forward.
            <br />
            <br />
            Let us help you unlock the full potential of DevOps and cloud
            technology, enabling your organization to innovate faster, operate
            more efficiently, and stay ahead of the competition.
          </p>
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
