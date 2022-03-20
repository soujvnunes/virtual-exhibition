import { ComponentPropsWithRef, forwardRef } from "react";
import { IconLogos } from "./Icon";

const Logos = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
  (props, ref) => (
    <div ref={ref} className="flex items-center" {...props}>
      <IconLogos size="lg" />
      <h1 className="font-serif leading-none italic">
        Exposição <span className="block -ml-sm">Virtual</span>
      </h1>
    </div>
  ),
);

Logos.displayName = "Logos";
export default Logos;
