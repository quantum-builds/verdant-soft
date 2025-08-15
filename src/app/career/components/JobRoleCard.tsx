"use client";
import { useRouter } from "next/navigation";

interface JobRoleCardProps {
  role: string;
  type: string;
  city: string;
  link: string;
}

export default function JobRoleCard({ ...props }: JobRoleCardProps) {
  const router = useRouter();

  return (
    <div className="p-8 bg-[#F3F3F3] flex flex-col gap-8 rounded-2xl">
      <div className="flex justify-end gap-4">
        {[props.city, props.type].map((item, index) => (
          <div
            key={index}
            className="bg-white py-2.5 px-5 text-lg text-pure-black rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 ">
        {[props.role, "Verdant Soft"].map((item, index) => (
          <p
            key={index}
            className={`text-2xl font-medium ${
              index == 1 ? "text-green-gradient" : "text-pure-black"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
      <button
        className="cursor-pointer w-fit flex bg-green-gradient text-white px-5 2xl:px-6 py-2.5 2xl:py-3 rounded-lg items-center gap-3 transition-all duration-200 text-xl  btn-3"
        style={{ "--clr": "#16a34a" } as React.CSSProperties}
        onClick={() => router.push(props.link)}
      >
        <span>Apply Now</span>
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
    </div>
  );
}
