"use client";
import { useRouter } from "next/navigation";

export default function SendResume() {
  const router = useRouter();

  const handleCLick = () => {
    router.push("/career/send-your-resume");
  };

  return (
    <div className="relative bg-gray w-full h-[290px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h3 className="text-green-gradient text-3xl lg:text-4xl 3xl:text-[40px] 5xl:text-[45px] text-center font-semibold mb-4">
          Couldn’t Find Your Position?
        </h3>
        <div className="flex items-center justify-center">
          <button
            onClick={handleCLick}
            className="cursor-pointer w-fit bg-footer-black hover:bg-green-gradient text-white  px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium mt-4 text-lg btn-3"
            style={{ "--clr": "#16a34a" } as React.CSSProperties}
          >
            <span>Send Your Resume</span>

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
      </div>
    </div>
  );
}
