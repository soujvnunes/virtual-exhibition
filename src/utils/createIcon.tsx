import { memo } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import g from "utils/getToken";

const IconRoot = styled.svg.attrs({
  focusable: "false",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
})`
  fill: currentColor;
  width: ${g(24)};
  height: ${g(24)};
`;

function createIcon(name: string, path: string) {
  function Icon(
    props: Omit<
      StyledComponentPropsWithRef<"svg">,
      "focusable" | "aria-hidden" | "viewBox"
    >,
  ) {
    return (
      <IconRoot {...props}>
        <path d={path} />
      </IconRoot>
    );
  }

  Icon.displayName = `Icon${name}`;

  return memo(Icon, Object.is);
}

export default createIcon;
export { IconRoot };
