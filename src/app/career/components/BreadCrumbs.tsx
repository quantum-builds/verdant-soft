"use client";

import Image from "next/image";
import { ArrowBlack } from "@/assets";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (item: BreadcrumbItem) => {
    if (!item.href) return;

    if (pathname.includes("resume-submitted") && item.href === "/career") {
      router.back();
      router.back();
      return;
    }

    if (
      pathname.includes("resume-submitted") &&
      (item.href.startsWith("/career/apply-now") ||
        item.href.startsWith("/career/send-your-resume"))
    ) {
      router.back();
      return;
    }

    router.push(item.href);
  };

  return (
    <nav className={cn("flex items-center space-x-2 text-sm ", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <Image
              src={ArrowBlack}
              alt="Arrow"
              className="w-4 lg:w-6 h-4 lg:h-6 mr-2"
            />
          )}
          <span
            className={cn(
              "transition-colors text-xl lg:text-2xl font-medium cursor-pointer",
              item.isActive
                ? "text-green-gradient"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => handleClick(item)}
          >
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}
