import Image from "next/image";
import EmailForm from "../../components/EmailForm";
import { DottedBG } from "@/assets";
import Navbar from "../../components/Navbar";

const INFO = [
  {
    title: "Location",
    content: "Square, Tashkent 10009, Lahore, Pakistan",
  },
  {
    title: "Email",
    content: "hello@verdentsoft.com",
  },
  {
    title: "Phone",
    content: "+92 000 0000 000",
  },
];
export default function ContactUsForm() {
  return (
    <section className="min-h-[110vh] flex flex-col mb-28 overflow-hidden">
      <Navbar />
      <div className="flex  flex-col md:flex-row items-start justify-between mt-24 md:mt-32 xl:mt-40  w-11/12 mx-auto gap-10">
        <div className="flex-1 flex-col gap-3 md:gap-4 lg:gap-6 w-11/12 xl:w-3/4 2xl:w-3/5 mx-auto">
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 w-11/12 xl:w-3/4 2xl:w-3/5 mx-auto ">
            <p className="text-xl lg:text-2xl xl:text-3xl font-semibold">
              Let’s Work Together
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-green-gradient font-semibold">
              Connect Us!
            </h2>
            <p className="text-[#666666] text-sm md:text-md">
              Let’s create something amazing together! Reach out I’d love to
              hear about your project and ideas.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={DottedBG}
              alt="Dotted Background"
              width={600}
              height={400}
              className=" object-center"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start h-full gap-12">
          <p className="font-medium text-2xl lg:text-3xl xl:text-[40px] leading-tight ">
            You can reach us by phone or mail, or you can just drop by the
            office.
          </p>
          {INFO.map((info, index) => (
            <div key={index} className="flex  gap-5">
              <p className="text-lg lg:text-xl xl:text-2xl font-semibold w-16 lg:w-20 xl:w-30">
                {info.title}
              </p>
              <p className="text-md lg:text-lg xl:text-xl text-[#666666]">
                {info.content}
              </p>
            </div>
          ))}
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
