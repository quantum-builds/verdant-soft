"use client";
import { useRouter } from "@/i18n/navigation";
import { X } from "lucide-react";
import { useState } from "react";

interface CTAButtonProps {
  text: string;
  link: string;
}

export default function CTAButton({ text, link }: CTAButtonProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (link === "/contact-us") {
      setIsOpen(true);
    } else {
      router.push(link);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="w-44 h-12 text-center border border-black font-medium cursor-pointer rounded-xl text-lg hover:bg-green-gradient hover:border-transparent hover:text-white transition-all duration-200 ease-in-out"
        onClick={handleClick}
      >
        {text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white py-10 lg:p-10 rounded-xl mx-1 md:mx-10 lg:mx-0 w-full max-w-3xl relative shadow-2xl  h-[600px] md:h-[500px]">
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black cursor-pointer hover:bg-gray-100 rounded p-1"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <iframe
              src="https://calendly.com/tahacheema29"
              className="w-full h-full border-0 bg-white"
              title="Calendly Scheduling"
            />
          </div>
        </div>
      )}
    </>
  );
}
