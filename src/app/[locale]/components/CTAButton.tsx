"use client";
import { useRouter } from "@/i18n/navigation";

interface CTAButtonProps {
  text: string;
  link: string;
}
export default function CTAButton({ text, link }: CTAButtonProps) {
  const router = useRouter();
  return (
    <button
      className="w-44 h-12 text-center border-1 border-black font-medium cursor-pointer rounded-xl"
      onClick={() => {
        router.push(link);
      }}
    >
      {text}
    </button>
  );
}
