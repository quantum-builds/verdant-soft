import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CustomDropdownProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}

export function CustomDropdown({
  label,
  options,
  value,
  onChange,
  required,
  error,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionSelect = (optionLabel: string) => {
    onChange(optionLabel);
    setIsOpen(false);
  };

  return (
    <div className="relative space-y-2" ref={dropdownRef}>
      <div
        className={cn(
          "border-green-gradient h-[70px] rounded-[16px] px-6 flex items-center justify-between cursor-pointer bg-transparent",
          error && "error"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={cn("text-lg", !value && "text-gray-400")}>
          {value || (
            <>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </>
          )}
        </span>

        <svg
          className={cn(
            "w-5 h-5 transition-transform",
            isOpen ? "rotate-180" : "rotate-0"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute left-0 top-full mt-1 w-full max-h-[170px] overflow-y-auto rounded-[16px] border border-gray-200 shadow-lg bg-white z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-lg"
              onClick={() => handleOptionSelect(option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
