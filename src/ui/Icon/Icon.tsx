import { ICON_MAP } from "consts";
import styled from "styled-components";
import { token as g } from "utils";

const Icon = styled.svg.attrs(({ children }) => ({
  children:
    typeof children === "string" ? (
      <path d={ICON_MAP[children as keyof typeof ICON_MAP]} />
    ) : (
      children
    ),
  focusable: "false",
  ariaHidden: "true",
  viewBox: "0 0 24 24",
}))`
  fill: currentColor;
  width: ${g("24")};
  height: ${g("24")};
`;

Icon.displayName = "Icon";
export default Icon;
