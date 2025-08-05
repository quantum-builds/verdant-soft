"use client";
import { VerdantGreenLogo } from "@/assets";
import { NavOption } from "@/common";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);

  const servicesList: NavOption[] = [
    { label: "Custom Software Development", href: "/services/custom-software" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "IT Team Outsourcing", href: "/services/it-team-outsourcing" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
  ];

  const navItems: (NavOption & { children?: NavOption[] })[] = [
    { label: "Case Studies", hash: "case-studies" },
    { label: "Services", children: servicesList },
    { label: "FAQs", hash: "faqs" },
    { label: "Blogs", hash: "blogs" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (option: NavOption) => {
    if (option.href) {
      router.push(option.href);
    } else if (option.hash) {
      const targetPath = "/";
      const targetHash = `#${option.hash}`;

      if (pathname === targetPath) {
        const el = document.getElementById(option.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`${targetPath}${targetHash}`);
      }
    }

    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray backdrop-blur-sm font-inter">
      <div className="w-11/12 xl:w-10/12 mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link className="flex items-center gap-2" href={"/"}>
            <Image src={VerdantGreenLogo} alt="logo-white" />
          </Link>

          {/* Desktop Nav */}
          <div
            ref={isMobileMenuOpen ? undefined : dropdownRef}
            className="hidden lg:flex items-center lg:space-x-6 xl:space-x-10 relative"
          >
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1 hover:text-green-gradient  text-lg transition-colors duration-200 cursor-pointer">
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0  bg-white shadow-lg rounded-lg z-50">
                      <div className="flex flex-col min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href!}
                            onClick={() => setActiveDropdown(null)}
                            className="group relative px-6 py-4 text-black hover:text-green-gradient transition-colors duration-200 text-lg whitespace-nowrap text-start cursor-pointer"
                          >
                            {child.label}
                            <span className="absolute left-6 bottom-2 h-[2px] w-0 bg-green-gradient transition-all duration-300 group-hover:w-[calc(100%-3rem)]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="hover:text-green-gradient text-lg transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Contact CTA */}
          <Link
            href="/contact-us"
            className="hidden lg:flex bg-footer-black text-white lg:px-6 lg:py-2 xl:px-5 xl:py-3 rounded-lg items-center gap-3 transition-all duration-200 text-xl hover:bg-green-gradient btn-3"
            style={{ "--clr": "#16a34a" } as React.CSSProperties}
          >
            <span>Get in Touch</span>
            <span className="button__icon-wrapper">
              <svg
                width="10"
                className="button__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
              <svg
                width="10"
                className="button__icon-svg button__icon-svg--copy"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 max-w-10/12 mx-auto bg-gray backdrop-blur-lg border-y border-gray-200 z-40">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) =>
                item.children ? (
                  <div key={index} className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full text-black font-medium text-lg"
                    >
                      {item.label}
                      {activeDropdown === item.label ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavigation(child)}
                            className="block w-full text-left text-black hover:text-green-gradient transition duration-200 text-base py-1"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={index}
                    className="block text-black hover:text-green-gradient transition-colors duration-200 text-lg font-medium py-2"
                    onClick={() => handleNavigation(item)}
                  >
                    {item.label}
                  </button>
                )
              )}

              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-footer-black hover:bg-green-gradient text-white cursor-pointer px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium mt-4 text-lg btn-3"
                style={{ "--clr": "#16a34a" } as React.CSSProperties}
              >
                <span>Get in Touch</span>

                <span className="button__icon-wrapper">
                  <svg
                    width="10"
                    className="button__icon-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    />
                  </svg>
                  <svg
                    width="10"
                    className="button__icon-svg button__icon-svg--copy"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
