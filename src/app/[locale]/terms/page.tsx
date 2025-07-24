import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";
import Image from "next/image";
import { DottedBG } from "@/assets";
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function TermsPage() {
  return (
    <>
      <main className="relative min-h-[110vh] flex flex-col mb-28 overflow-hidden w-11/12 xl:w-10/12 mx-auto">
        <div className="hidden absolute top-40 lg:-right-10 xl:-right-10 3xl:right-0 lg:flex items-end justify-end z-20">
          <Image
            src={DottedBG}
            alt="Dotted Background"
            className="w-4/5 md:w-3/4 lg:w-2/3 2xl:w-9/12 3xl:w-11/12 5xl:w-full h-auto object-center lg:rotate-110 xl:rotate-100 3xl:rotate-90"
          />
        </div>
        <Navbar />
        <section className="max-w-11/12 lg:max-w-10/12 xl:max-w-8/12  p-6 text-gray-800 mt-24 md:mt-32 xl:mt-40 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 text-green-gradient inline-block leading-tight">
            Terms & Conditions
          </h1>

          <p className="mb-8 text-lg lg:text-xl">
            Welcome to the Verdant Soft website. These Terms and Conditions
            govern your use of our Website and the services provided by Verdant
            Soft. Please read these Terms carefully. By accessing our Website,
            you agree to be bound by these Terms.
          </p>

          <Section title="Acceptance of Terms">
            <p className="text-lg lg:text-xl">
              By accessing or using the Website, you confirm that you have read,
              understood, and agree to these Terms and Conditions. If you do not
              agree, please do not use our Website.
            </p>
          </Section>

          <Section title="Services">
            <p className="text-lg lg:text-xl">
              Verdant Soft provides IT services including, but not limited to,
              software development, consulting, support, and related services.
              Details of specific services are provided on our Website or via
              contractual agreements.
            </p>
          </Section>

          <Section title="Use of Website">
            <ul className="list-disc list-inside space-y-2 text-lg lg:text-xl">
              <li>You agree to use the Website only for lawful purposes.</li>
              <li>
                You shall not attempt to access unauthorized areas, disrupt the
                functioning, or interfere with the Website.
              </li>
              <li>
                You agree not to upload harmful, illegal, or infringing content.
              </li>
            </ul>
          </Section>

          <Section title="Intellectual Property">
            <p className="text-lg lg:text-xl">
              All content, trademarks, logos, and intellectual property on the
              Website are owned by or licensed to Verdant Soft. You may not
              reproduce, modify, distribute, or create derivative works without
              prior written consent.
            </p>
          </Section>

          <Section title="Payment and Billing">
            <ul className="list-disc list-inside space-y-2 text-lg lg:text-xl">
              <li>
                Fees for Services are specified in our agreements or on the
                Website.
              </li>
              <li>Payments shall be made according to the agreed terms.</li>
              <li>
                Late payments may attract penalties or suspension of services.
              </li>
            </ul>
          </Section>

          <Section title="Confidentiality">
            <ul className="list-disc list-inside space-y-2 text-lg lg:text-xl">
              <li>
                Both parties shall maintain confidentiality of any proprietary
                or sensitive information exchanged.
              </li>
              <li>
                Confidential information shall not be disclosed without prior
                consent unless required by law.
              </li>
            </ul>
          </Section>

          <Section title="Limitation of Liability">
            <p className="text-lg lg:text-xl">
              To the maximum extent permitted by law, Verdant Soft shall not be
              liable for any damages arising from the use or inability to use
              the Website or Services, including indirect, incidental, or
              consequential damages.
            </p>
          </Section>

          <Section title="Indemnification">
            <p className="text-lg lg:text-xl">
              You agree to indemnify and hold harmless Verdant Soft from any
              claims, damages, liabilities, costs, or expenses arising from your
              breach of these Terms or misuse of the Services.
            </p>
          </Section>

          <Section title="Termination">
            <p className="text-lg lg:text-xl">
              We reserve the right to suspend or terminate access to the Website
              or Services at our discretion, with or without notice, for
              violations of these Terms.
            </p>
          </Section>

          <Section title="Governing Law and Jurisdiction">
            <p className="text-lg lg:text-xl">
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction]. Any disputes shall be subject to
              the exclusive jurisdiction of courts located in Johar Town.
            </p>
          </Section>

          <Section title="Changes to Terms">
            <p className="text-lg lg:text-xl">
              Verdant Soft reserves the right to amend or update these Terms at
              any time. Changes will be effective upon posting on the Website.
              Continued use indicates acceptance of the updated Terms.
            </p>
          </Section>
        </section>
      </main>
      <FooterSection />
    </>
  );
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
