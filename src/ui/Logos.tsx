import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";
import { getTheme as g } from "utils";
import { IconLogos as UiIconLogos } from "./Icon";

const IconLogos = styled(UiIconLogos)`
  width: ${g("48")};
  height: ${g("48")};
`;
const Logos = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
  (props, ref) => (
    <div ref={ref} className="flex items-center" {...props}>
      <IconLogos />
      <h1 className="font-serif leading-none italic">
        Exposição <span className="block -ml-sm">Virtual</span>
      </h1>
    </div>
  ),
);

Logos.displayName = "Logos";
export default Logos;
