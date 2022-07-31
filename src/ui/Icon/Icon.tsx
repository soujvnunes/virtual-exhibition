import { memo } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import { getToken as g } from "utils";
import mapIcons from "utils/mapIcons";

const IconRoot = styled.svg.attrs({
  focusable: "false",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
})`
  fill: currentColor;
  width: ${g(24)};
  height: ${g(24)};
`;
const createIcon = (name: string, path: string) => {
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
};
const A11y = createIcon("A11y", mapIcons.A11y);
const Exit = createIcon("Exit", mapIcons.Exit);

export default Object.assign(IconRoot, { A11y, Exit });
