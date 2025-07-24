"use client";
import { VerdantGreenLogo } from "@/assets";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface NavOption {
  label: string;
  href?: string;
  hash?: string;
}

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavOption[] = [
    { label: t("projects"), hash: "projects" },
    // { name: t("services"), hash: "services" },
    { label: t("features"), hash: "features" },
    { label: t("workflow"), hash: "workflow" },
    { label: t("blog"), hash: "blog" },
  ];

  const handleNavigation = (option: NavOption) => {
    if (option.href) {
      router.push(option.href);
      setIsMobileMenuOpen(false);
      return;
    }

    const targetPath = "/";
    const targetHash = `#${option.hash}`;

    if (pathname === targetPath && option.hash) {
      const el = document.getElementById(option.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (option.hash) {
      router.push(`${targetPath}${targetHash}`);
    }

    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray backdrop-blur-sm font-inter">
      <div className="max-w-11/12  mx-auto ">
        <div className="flex items-center justify-between h-16 md:h-20  ">
          <Link className="flex items-center gap-2" href={"/"}>
            <Image src={VerdantGreenLogo} alt="logo-white" />
          </Link>
          <div className="hidden lg:flex items-center lg:space-x-6 xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className=" hover:text-[#56aeff] transition-colors duration-200 text-lg scroll-smooth block w-fit"
              >
                {item.label}
              </button>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="hidden lg:flex bg-black text-white lg:px-6 lg:py-2 xl:px-7 xl:py-3 rounded-lg items-center transition-all duration-200 text-xl hover:bg-green-gradient"
          >
            {t("getInTouch")}
          </Link>

          <button
            className=" lg:hidden text-black p-2 "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray  backdrop-blur-lg border-y-1 border-gray-200  ">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="block text-black hover:text-[#56aeff] transition-colors duration-200 text-lg font-medium py-2"
                  onClick={() => handleNavigation(item)}
                >
                  {item.label}
                </button>
              ))}
              <a
                className="w-full  bg-black hover:bg-green-gradient text-white cursor-pointer px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium mt-4  text-lg font-inter"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                href={"/contact-us"}
              >
                {t("getInTouch")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
