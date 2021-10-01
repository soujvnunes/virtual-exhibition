import { Devices } from "defs/use-device.d";
import useMedia from "./use-media";

function useDevice(breakpoints: Record<Devices, string | number>): Devices {
  const sm = useMedia(`(min-width: ${breakpoints.sm})`);
  const md = useMedia(`(min-width: ${breakpoints.md})`);
  const lg = useMedia(`(min-width: ${breakpoints.lg})`);
  const xl = useMedia(`(min-width: ${breakpoints.xl})`);

  return (xl && "xl") || (lg && "lg") || (md && "md") || (sm && "sm") || "xs";
}

export default useDevice;
