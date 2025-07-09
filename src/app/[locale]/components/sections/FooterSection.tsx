import { VerdantLightLogo, VerdantLogo } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface TextLinks {
  text: string;
  link: string;
}

export default function FooterSection() {
  const t = useTranslations("FooterSection");

  const NAVIGATION_LINKS: TextLinks[] = [
    {
      text: t("Navigation.projects"),
      link: "#projects",
    },
    {
      text: t("Navigation.services"),
      link: "#services",
    },
    {
      text: t("Navigation.features"),
      link: "#features",
    },
    {
      text: t("Navigation.workflow"),
      link: "#workflow",
    },
    {
      text: t("Navigation.contact"),
      link: "#contact",
    },
  ];

  const PAGES_LINKS: TextLinks[] = [
    {
      text: t("Links.privacy"),
      link: "/privacy",
    },
    {
      text: t("Links.terms"),
      link: "/terms",
    },
  ];

  const SOCIAL_LINKS: TextLinks[] = [
    { text: "Twitter", link: "www.twitter.com" },
    { text: "Instagram", link: "www.instagram.com" },
  ];

  return (
    <div className="overflow-hidden relative h-[70vh] bg-black py-14">
      {/* Left Logo */}
      <div className="absolute top-[45%] left-0 -translate-y-2/3 -translate-x-1/4 opacity-10 pointer-events-none z-0 h-[160vh]">
        <Image
          src={VerdantLogo}
          alt="Verdant background left"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Logo */}
      <div className="absolute top-[45%] right-0 -translate-y-2/3  translate-x-8/12 opacity-10 pointer-events-none z-0 h-[160vh]">
        <Image
          src={VerdantLogo}
          alt="Verdant background right"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-4 lg:w-11/12 mx-auto flex flex-col justify-between h-full">
        <div className="h-20 flex justify-between">
          <div className="flex gap-12">
            {NAVIGATION_LINKS.map((naviagtionLink, index) => (
              <a
                href={naviagtionLink.link}
                key={index}
                className="text-white text-xl"
              >
                {naviagtionLink.text}
              </a>
            ))}
          </div>
          <div className="flex gap-12">
            {SOCIAL_LINKS.map((socialLink, index) => (
              <a
                href={socialLink.link}
                key={index}
                className="text-white text-xl"
              >
                {socialLink.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <p className="w-10/12 lg:w-2/3 xl:w-1/2 text-2xl lg:text-4xl xl:text-7xl font-semibold text-[#707070]">
            {t("headline")}
          </p>
          <p className="w-10/12 lg:w-2/3 xl:w-1/2 text-2xl lg:text-4xl xl:text-7xl font-semibold text-white">
            {t("subheadline")}
          </p>
        </div>
        <div className="h-20 flex justify-between">
          <div className="flex-1">
            <Image
              src={VerdantLightLogo}
              alt="logo-white"
              className="cursor-pointer"
              width={260}
              height={60}
            />
          </div>
          <div className="flex-1 flex justify-center items-center gap-12">
            {PAGES_LINKS.map((pageLink, index) => (
              <a
                href={pageLink.link}
                key={index}
                className="text-white text-xl whitespace-nowrap leading-none"
              >
                {pageLink.text}
              </a>
            ))}
          </div>

          <div className="flex-1 flex justify-end gap-12 font-semibold">
            <div className="flex flex-col gap-1">
              <p className="text-[#707070] text-xl">{t("Contact.email")}</p>
              <p className="text-white text-2xl">query@verdantsoft.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#707070] text-xl">{t("Contact.phone")}</p>
              <p className="text-white text-2xl">+92 000 000 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
