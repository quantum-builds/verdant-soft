import React from "react";

interface ListPointsProps {
  title: string;
  challenges: string[];
}

function parseHighlight(text: string) {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/g);

  return parts.map((part, index) => {
    const match = part.match(/<highlight>(.*?)<\/highlight>/);
    if (match) {
      return (
        <span key={index} className="font-semibold">
          {match[1]}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function ListPoints({ title, challenges }: ListPointsProps) {
  return (
    <div className="flex flex-col gap-16">
      <div className="h-1 bg-green-gradient w-30"></div>

      <div className="flex flex-col gap-10">
        <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
          {title}
        </h3>
        <div className="flex flex-col gap-6">
          <ul className="pl-2 lg:pl-6 space-y-5 text-lg xl:text-xl">
            {challenges.map((text, index) => (
              <li key={index} className="flex gap-4 lg:gap-8 items-start">
                <span className="mt-2 w-3 h-3 min-w-[12px] rounded-full bg-green-gradient" />
                <span className="">{parseHighlight(text)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
