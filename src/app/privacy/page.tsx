import Image from "next/image";
import Navbar from "./../components/Navbar";
import FooterSection from "./../components/sections/FooterSection";
import { PrivacyBg } from "@/assets";
import TableOfContents from "../components/TableOfContents";
import { Section } from "../components/SectionComponent";

const sections = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-your-information", label: "How We Use Your Information" },
  { id: "sharing-your-information", label: "Sharing Your Information" },
  { id: "cookies-and-tracking", label: "Cookies and Tracking Technologies" },
  { id: "data-security", label: "Data Security" },
  { id: "your-rights", label: "Your Rights" },
  { id: "data-retention", label: "Data Retention" },
  { id: "childrens-privacy", label: "Children’s Privacy" },
  { id: "changes-to-policy", label: "Changes to This Privacy Policy" },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="relative min-h-[110vh] flex flex-col mb-28 ">
        <Navbar />

        {/* Hero Section */}
        <div className="relative z-0 flex items-center justify-center mt-20 md:mt-24 xl:mt-28 mb-18">
          <Image
            className="w-full h-[350px] md:h-[320px] xl:h-[440px] object-cover"
            src={PrivacyBg}
            alt="Privacy background"
          />
          <div className="absolute z-10 w-10/12 xl:w-9/12 mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 2xl:mb-6 text-green-gradient leading-tight">
              Privacy Policy
            </h1>
            <p className="mb-8 text-md md:text-lg lg:text-xl text-white max-w-11/12 md:max-10/12 lg:max-w-9/12 2xl:max-w-8/12 3xl:max-w-7/12">
              Welcome to the Verdant Soft website. At Verdant Soft, we are
              committed to protecting your privacy and ensuring the security of
              your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our Website.
            </p>
          </div>
        </div>

        <section className="text-gray-800 mt-5 md:mt-8 xl:mt-12 w-10/12 xl:w-9/12 mx-auto flex gap-24 2xl:gap-32">
          <div className="w-full lg:w-8/12 ">
            <Section id="information-we-collect" title="Information We Collect">
              <p className="text-md md:text-lg lg:text-xl mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-md md:text-lg lg:text-xl">
                <li>
                  <span className="font-semibold">Personal Information:</span>{" "}
                  Name, email address, phone number, billing information, and
                  other unique personal identifiers.
                </li>
                <li>
                  <span className="font-semibold">Usage Data:</span> Information
                  about your interactions with our Website, including IP
                  address, browser type, referring/exit pages, and other usage
                  details.
                </li>
                <li>
                  <span className="font-semibold">
                    Cookies and Tracking Technologies:
                  </span>{" "}
                  We use cookies to enhance user experience and analyze website
                  traffic.
                </li>
              </ul>
            </Section>
            <Section
              id="how-we-use-your-information"
              title="How We Use Your Information"
            >
              <p className="text-md md:text-lg lg:text-xl mb-4">
                We use the collected data to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-md md:text-lg lg:text-xl">
                <li>Provide, maintain, and improve our Services.</li>
                <li>Process transactions and send related information.</li>
                <li>
                  Respond to inquiries, support requests, or customer service
                  needs.
                </li>
                <li>Send marketing communications, where permitted.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </Section>
            <Section
              id="sharing-your-information"
              title="Sharing Your Information"
            >
              <p className="text-md md:text-lg lg:text-xl mb-4">
                We do not sell, rent, or trade your personal information. We may
                share your data with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-md md:text-lg lg:text-xl">
                <li>
                  Service providers that assist in operating our Website or
                  delivering our services.
                </li>
                <li>
                  Legal authorities if required by law, to protect our rights.
                </li>
                <li>Business transfers, such as mergers or acquisitions.</li>
              </ul>
            </Section>
            <Section
              id="cookies-and-tracking"
              title="Cookies and Tracking Technologies"
            >
              <p className="text-md md:text-lg lg:text-xl">
                Our Website uses cookies to enhance your experience. You can
                manage your cookie preferences through your browser settings.
                Disabling cookies may affect your user experience.
              </p>
            </Section>
            <Section id="data-security" title="Data Security">
              <p className="text-md md:text-lg lg:text-xl">
                We implement appropriate technical and organizational measures
                to protect your personal data from unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </Section>
            <Section id="your-rights" title="Your Rights">
              <p className="text-md md:text-lg lg:text-xl mb-4">
                Depending on your jurisdiction, you may have rights such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-md md:text-lg lg:text-xl">
                <li>Access to your personal data.</li>
                <li>Correction of inaccurate data.</li>
                <li>Withdrawal of consent.</li>
                <li>Deletion of your data.</li>
                <li>Data portability.</li>
              </ul>
              <p className="text-md md:text-lg lg:text-xl mt-4">
                To exercise these rights, please contact us at the information
                below.
              </p>
            </Section>
            <Section id="data-retention" title="Data Retention">
              <p className="text-md md:text-lg lg:text-xl">
                We retain your personal data only for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy unless a
                longer retention period is required by law.
              </p>
            </Section>
            <Section id="childrens-privacy" title="Children’s Privacy">
              <p className="text-md md:text-lg lg:text-xl">
                Our Website and Services are not directed to children under the
                age of 13. We do not knowingly collect personal information from
                children.
              </p>
            </Section>
            <Section
              id="changes-to-policy"
              title="Changes to This Privacy Policy"
            >
              <p className="text-md md:text-lg lg:text-xl">
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with an updated “Effective Date.” We
                encourage you to review this policy regularly.
              </p>
            </Section>
          </div>
          <TableOfContents sections={sections} />
        </section>
      </main>
      <FooterSection />
    </>
  );
}
