"use client";
import { useState, useRef, useEffect } from "react";

interface BookAMettingProps {
  text: string;
}

export default function BookAMeeting({ text }: BookAMettingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

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
        // href="/contact-us"
        className="cursor-pointer flex bg-footer-black text-white px-6 py-3 rounded-lg  gap-3 transition-all duration-200 text-xl hover:bg-green-gradient btn-3"
        style={{ "--clr": "#16a34a" } as React.CSSProperties}
        onClick={handleClick}
      >
        <span>{text}</span>
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
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className=" w-full max-w-4xl relative shadow-2xl  h-[600px] md:h-[600px]"
          >
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
