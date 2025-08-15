"use client";

import { BackIcon } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div
      className="flex items-center cursor-pointer order-1 md:order-2 justify-end"
      onClick={handleBack}
    >
      <Image src={BackIcon} alt="back-icon" className="w-5 h-3 " />
      <span className="text-xl lg:text-2xl text-footer-black font-semibold leading-none">
        Back
      </span>
    </div>
  );
}
