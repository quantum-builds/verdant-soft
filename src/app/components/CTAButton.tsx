"use client";
import { useState, useRef, useEffect } from "react";

interface CTAButtonProps {
  text: string;
}

export default function CTAButton({ text }: CTAButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

  // Close modal when clicking outside the modal content
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="relative w-50 h-12 z-[30] flex justify-center items-center border border-black font-medium cursor-pointer rounded-xl text-lg overflow-hidden group transition-all duration-200 ease-in-out hover:bg-green-gradient hover:border-none hover:text-white btn-3 gap-2"
        style={{ "--clr": "#16a34a" } as React.CSSProperties}
      >
        <span>{text}</span>

        <span className="button__icon-wrapper2">
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
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className=" w-full max-w-4xl relative shadow-2xl  h-[600px] md:h-[600px]"
          >
            {/* <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black cursor-pointer hover:bg-gray-100 rounded p-1"
              aria-label="Close modal"
            >
              <X size={24} />
            </button> */}
            <iframe
              src="https://calendly.com/verdant-soft-info/"
              className="w-full h-full border-0 bg-white"
              title="Calendly Scheduling"
            />
          </div>
        </div>
      )}
    </>
  );
}
