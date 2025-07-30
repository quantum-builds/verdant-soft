import Image from "next/image";
import Navbar from "./../components/Navbar";
import FooterSection from "./../components/sections/FooterSection";
import { DottedBG } from "@/assets";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-green-gradient mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <main className="relative min-h-[110vh] flex flex-col mb-28 overflow-hidden w-11/12 xl:w-10/12 mx-auto">
        <Navbar />
        <div className="hidden absolute top-40 lg:-right-10 xl:-right-10 3xl:right-0 lg:flex items-end justify-end z-20">
          <Image
            src={DottedBG}
            alt="Dotted Background"
            className="w-4/5 md:w-3/4 lg:w-2/3 2xl:w-9/12 3xl:w-11/12 5xl:w-full h-auto object-center lg:rotate-110 xl:rotate-100 3xl:rotate-90"
          />
        </div>
        <section className=" max-w-11/12 lg:max-w-10/12 xl:max-w-8/12 p-6 text-gray-800 mt-24 md:mt-32 xl:mt-40">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 text-green-gradient inline-block leading-tight">
            Privacy Policy
          </h1>

          <p className="mb-8 text-lg lg:text-xl">
            Welcome to the Verdant Soft website. At Verdant Soft, we are
            committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our Website.
          </p>

          <Section title="Information We Collect">
            <p className="text-lg lg:text-xl mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg lg:text-xl">
              <li>
                <span className="font-semibold">Personal Information:</span>{" "}
                Name, email address, phone number, billing information, and
                other unique personal identifiers.
              </li>
              <li>
                <span className="font-semibold">Usage Data:</span> Information
                about your interactions with our Website, including IP address,
                browser type, referring/exit pages, and other usage details.
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

          <Section title="How We Use Your Information">
            <p className="text-lg lg:text-xl mb-4">
              We use the collected data to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg lg:text-xl">
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

          <Section title="Sharing Your Information">
            <p className="text-lg lg:text-xl mb-4">
              We do not sell, rent, or trade your personal information. We may
              share your data with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg lg:text-xl">
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

          <Section title="Cookies and Tracking Technologies">
            <p className="text-lg lg:text-xl">
              Our Website uses cookies to enhance your experience. You can
              manage your cookie preferences through your browser settings.
              Disabling cookies may affect your user experience.
            </p>
          </Section>

          <Section title="Data Security">
            <p className="text-lg lg:text-xl">
              We implement appropriate technical and organizational measures to
              protect your personal data from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </Section>

          <Section title="Your Rights">
            <p className="text-lg lg:text-xl mb-4">
              Depending on your jurisdiction, you may have rights such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg lg:text-xl">
              <li>Access to your personal data.</li>
              <li>Correction of inaccurate data.</li>
              <li>Withdrawal of consent.</li>
              <li>Deletion of your data.</li>
              <li>Data portability.</li>
            </ul>
            <p className="text-lg lg:text-xl mt-4">
              To exercise these rights, please contact us at the information
              below.
            </p>
          </Section>

          <Section title="Data Retention">
            <p className="text-lg lg:text-xl">
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy unless a
              longer retention period is required by law.
            </p>
          </Section>

          <Section title="Children’s Privacy">
            <p className="text-lg lg:text-xl">
              Our Website and Services are not directed to children under the
              age of 13. We do not knowingly collect personal information from
              children.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p className="text-lg lg:text-xl">
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with an updated “Effective Date.” We encourage
              you to review this policy regularly.
            </p>
          </Section>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
