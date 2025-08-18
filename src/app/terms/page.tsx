import Navbar from "./../components/Navbar";
import FooterSection from "./../components/sections/FooterSection";
import TableOfContents from "./../components/TableOfContents";
import { Section } from "../components/SectionComponent";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Services" },
  { id: "use", label: "Use of Website" },
  { id: "ip", label: "Intellectual Property" },
  { id: "billing", label: "Payment & Billing" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "termination", label: "Termination" },
  { id: "law", label: "Governing Law and Jurisdiction" },
  { id: "changes", label: "Changes to Terms" },
];

export default function TermsPage() {
  return (
    <>
      <main className="relative min-h-[110vh] flex flex-col mb-28 overflow-hidden mx-auto">
        <Navbar />
        <div className="bg-green-gradient flex flex-col text-center justify-center mt-20 md:mt-24 xl:mt-28 py-8 mb-18">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white inline-block leading-tight">
            Terms & Conditions
          </h1>
          <p className="mb-8 text-md md:text-lg lg:text-xl text-center text-white w-11/12 md:w-10/12 lg:w-8/12 xl:w-1/2 mx-auto">
            Welcome to the Verdant Soft website. These Terms and Conditions
            govern your use of our Website and the services provided by Verdant
            Soft. Please read these Terms carefully. By accessing our Website,
            you agree to be bound by these Terms.
          </p>
        </div>

        <div className="text-gray-800 mt-5 md:mt-8 xl:mt-12 w-10/12 xl:w-9/12 mx-auto flex gap-24 2xl:gap-32">
          {/* Main Content */}
          <section className="w-full lg:w-8/12">
            <Section id="acceptance" title="Acceptance of Terms">
              <p className="text-md md:text-lg lg:text-xl">
                By accessing or using the Website, you confirm that you have
                read, understood, and agree to these Terms and Conditions. If
                you do not agree, please do not use our Website.
              </p>
            </Section>

            <Section id="services" title="Services">
              <p className="text-md md:text-lg lg:text-xl">
                Verdant Soft provides IT services including, but not limited to,
                software development, consulting, support, and related services.
                Details of specific services are provided on our Website or via
                contractual agreements.
              </p>
            </Section>

            <Section id="use" title="Use of Website">
              <ul className="list-disc list-inside space-y-2 text-lg lg:text-xl">
                <li>You agree to use the Website only for lawful purposes.</li>
                <li>
                  You shall not attempt to access unauthorized areas, disrupt
                  the functioning, or interfere with the Website.
                </li>
                <li>
                  You agree not to upload harmful, illegal, or infringing
                  content.
                </li>
              </ul>
            </Section>

            <Section id="ip" title="Intellectual Property">
              <p className="text-md md:text-lg lg:text-xl">
                All content, trademarks, logos, and intellectual property on the
                Website are owned by or licensed to Verdant Soft. You may not
                reproduce, modify, distribute, or create derivative works
                without prior written consent.
              </p>
            </Section>

            <Section id="billing" title="Payment and Billing">
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

            <Section id="confidentiality" title="Confidentiality">
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

            <Section id="liability" title="Limitation of Liability">
              <p className="text-md md:text-lg lg:text-xl">
                To the maximum extent permitted by law, Verdant Soft shall not
                be liable for any damages arising from the use or inability to
                use the Website or Services, including indirect, incidental, or
                consequential damages.
              </p>
            </Section>

            <Section id="indemnification" title="Indemnification">
              <p className="text-md md:text-lg lg:text-xl">
                You agree to indemnify and hold harmless Verdant Soft from any
                claims, damages, liabilities, costs, or expenses arising from
                your breach of these Terms or misuse of the Services.
              </p>
            </Section>

            <Section id="termination" title="Termination">
              <p className="text-md md:text-lg lg:text-xl">
                We reserve the right to suspend or terminate access to the
                Website or Services at our discretion, with or without notice,
                for violations of these Terms.
              </p>
            </Section>

            <Section id="law" title="Governing Law and Jurisdiction">
              <p className="text-md md:text-lg lg:text-xl">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction]. Any disputes shall be
                subject to the exclusive jurisdiction of courts located in Johar
                Town.
              </p>
            </Section>

            <Section id="changes" title="Changes to Terms">
              <p className="text-md md:text-lg lg:text-xl">
                Verdant Soft reserves the right to amend or update these Terms
                at any time. Changes will be effective upon posting on the
                Website. Continued use indicates acceptance of the updated
                Terms.
              </p>
            </Section>
          </section>

          {/* Sidebar TOC */}
          <TableOfContents sections={sections} />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
