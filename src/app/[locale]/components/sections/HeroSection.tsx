import { useTranslations } from "next-intl";
import Navbar from "../Navbar";
import CTAButton from "../CTAButton";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const CTAS = [
    {
      text: t("primaryCTA"),
      link: "/",
    },
    {
      text: t("secondaryCTA"),
      link: "/",
    },
  ];
  return (
    <div className="relative min-h-[70vh] md:min-h-screen flex flex-col space-y-6 overflow-hidden bg-white mb-28">
      {/* Blurred color background blobs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#63aff5] rounded-full blur-[300px] z-0" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#85f3f1] rounded-full blur-[300px] z-0" />

      {/* Content above blur */}
      <Navbar />
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-5 mt-20 md:mt-24 xl:mt-28 mx-6 lg:mx-10 xl:mx-14 mb-5 bg-gray rounded-3xl">
        <p className="text-2xl md:text-3xl xl:text-6xl font-bold leading-tight font-inter w-1/2 2xl:w-1/2 mx-auto text-center">
          {t.rich("headline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </p>
        <p className="text-md xl:text-xl leading-tight w-2/3 lg:w-1/2 xl:w-1/3 mx-auto text-center">
          {t.rich("subheadline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </p>
        <div className="flex justify-between w-1/2 lg:w-[40%] xl:w-1/5">
          {CTAS.map((cta, index) => (
            <CTAButton key={index} text={cta.text} link={cta.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
