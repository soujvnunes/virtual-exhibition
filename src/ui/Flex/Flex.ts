import styled, { css, DefaultTheme } from "styled-components";
import { FlexKs, FlexProps, Props } from "types";
import { token as t } from "utils";
import flexProps from "./flexProps";

const getProp = (prop: unknown): Props => ({
  ...(typeof prop === "string" ? { sm: prop } : {}),
  ...(typeof prop === "object" ? prop : {}),
});
const getPropPair = (key: string, value?: string) => ({
  [key]: value,
});
const getFlex =
  (key: FlexKs) => (props: FlexProps & { theme: DefaultTheme }) => {
    const prop = getProp(props[`$${key}`]);

    return Object.keys(prop).reduce((prev, _curr) => {
      const curr = _curr as "md" | "lg";

      return css`
        ${prev};
        ${t(curr)} {
          ${getPropPair(key, prop[curr])}
        } ;
      `;
    }, {});
  };
const Flex = styled.div<FlexProps>`
  ${flexProps.reduce(
    (prev, curr) =>
      css`
        ${prev};
        ${getFlex(curr)};
      `,
    {},
  )};
`;

Flex.displayName = "Flex";
export default Flex;
