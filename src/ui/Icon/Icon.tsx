import { memo } from "react";
import styled from "styled-components";
import { getToken as g, mapIcons } from "utils";

const Icon = styled.svg.attrs(({ children }) => ({
  children:
    typeof children === "string" ? (
      <path d={mapIcons[children as keyof typeof mapIcons]} />
    ) : (
      children
    ),
  focusable: "false",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
}))`
  fill: currentColor;
  width: ${g(24)};
  height: ${g(24)};
`;

Icon.displayName = "Icon";
export default memo(Icon);
