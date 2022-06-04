import { ICON_MAP } from "consts";
import { memo } from "react";
import styled from "styled-components";
import { CreateIcon, IconProps } from "types";
import { token as g } from "utils";

const IconRoot = styled.svg`
  fill: currentColor;
  width: ${g("24")};
  height: ${g("24")};
`;
const createIcon: CreateIcon<IconProps> = (name, paths) => {
  function Icon({ children, ...props }: IconProps) {
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
const A11y = createIcon("A11y", ICON_MAP.A11y);
const Exit = createIcon("Exit", ICON_MAP.Exit);
const Logos = createIcon("Logos", ICON_MAP.Logos);

export default Object.assign(createIcon, { A11y, Exit, Logos });
