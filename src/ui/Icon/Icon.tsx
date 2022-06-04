import { ICONS } from "consts";
import { memo } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import { token as g } from "utils";

const IconRoot = styled.svg`
  fill: currentColor;
  width: ${g("24")};
  height: ${g("24")};
`;

const createIcon = (
  name: keyof typeof ICONS,
  paths: React.SVGProps<SVGPathElement>,
) => {
  function Icon({ children, ...props }: StyledComponentPropsWithRef<"svg">) {
    return (
      <IconRoot
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        {...props}
      >
        {paths}
      </IconRoot>
    );
  }

  Icon.displayName = `Icon${name}`;

  return memo(Icon);
};
const A11y = createIcon("A11y", ICONS.A11y);
const Exit = createIcon("Exit", ICONS.Exit);
const Logos = createIcon("Logos", ICONS.Logos);

export default Object.assign(createIcon, { A11y, Exit, Logos });
