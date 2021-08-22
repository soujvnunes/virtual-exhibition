import { Devices } from "defs/use-device.d";
import useBreakpoint from "./use-breakpoint";

function useDevice(breakpoints: Record<Devices, string | number>): Devices {
  const sm = useBreakpoint(breakpoints.sm);
  const md = useBreakpoint(breakpoints.md);
  const lg = useBreakpoint(breakpoints.lg);
  const xl = useBreakpoint(breakpoints.xl);

  return (xl && "xl") || (lg && "lg") || (md && "md") || (sm && "sm") || "xs";
}

export default useDevice;
