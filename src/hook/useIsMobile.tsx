import { useWindowWidth } from "./useWindowWidth"; // adjust the path if needed

export function useIsMobile(breakpoint: number = 768): boolean {
  const width = useWindowWidth();
  return width < breakpoint;
}
