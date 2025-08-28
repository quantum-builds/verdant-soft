"use client";
import { useCallback } from "react";

interface TableOfContentsProps {
  sections: {
    id: string;
    label: string;
  }[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      }
    },
    []
  );

  return (
    <aside className="hidden lg:block lg:w-3/12 xl:w-1/4 sticky top-28 h-fit p-4 rounded-lg bg-gray">
      <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3 text-green-gradient">
        Table of Contents
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-md md:text-lg xl:text-xl font-medium">
        {sections.map((section) => (
          <li key={section.id} className="flex items-start gap-2">
            {/* Gradient dot */}
            <span className="text-green-gradient leading-none mt-1">•</span>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className="text-green-gradient hover:underline"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
