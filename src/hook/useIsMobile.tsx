// import { useWindowWidth } from "./useWindowWidth"; // adjust the path if needed

// export function useIsMobile(breakpoint: number = 768): boolean {
//   const width = useWindowWidth();
//   return width <= breakpoint;
// }

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 768): boolean | null {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
