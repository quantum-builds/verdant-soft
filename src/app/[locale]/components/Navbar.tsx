import { VerdantGreenLogo } from "@/assets";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navigation");

  const navItems = [
    { name: t("projects"), href: "#projects" },
    { name: t("services"), href: "#services" },
    { name: t("features"), href: "#features" },
    { name: t("workflow"), href: "#workflow" },
    { name: t("blog"), href: "#blog" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray backdrop-blur-sm font-inter">
      <div className="lg:max-w-11/12   mx-auto ">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link className="flex items-center gap-2" href={"/"}>
            <Image src={VerdantGreenLogo} alt="logo-white" />
          </Link>
          <div className="hidden lg:flex items-center lg:space-x-6 xl:space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className=" hover:text-[#56aeff] transition-colors duration-200 text-lg scroll-smooth block w-fit"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Link
            href={"/contact-us"}
            className="hidden lg:flex bg-black hover:bg-black text-white lg:px-6 lg:py-2  xl:px-7 xl:py-3 rounded-lg items-center  transition-all duration-200 text-xl "
          >
            {t("getInTouch")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
