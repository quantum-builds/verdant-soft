"use client";
import { X } from "lucide-react";
import { useState } from "react";

interface CTAButtonProps {
  text: string;
}

export default function CTAButton({ text }: CTAButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="relative w-44 h-12 text-center border border-black hover:border-none font-medium cursor-pointer rounded-xl text-lg overflow-hidden group transition-all duration-200 ease-in-out"
      >
        <span className="absolute inset-0 w-0 group-hover:w-full bg-green-gradient transition-all duration-300 ease-in-out z-0" />
        <span className="relative z-10 text-black group-hover:text-white transition-colors duration-200 ease-in-out">
          {text}
        </span>
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
