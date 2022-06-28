import styled, { css, DefaultTheme } from "styled-components";
import { FlexKs, FlexProps } from "types";
import { token as t } from "utils";
import flexProps from "./flexProps";

const getPropPair = (key: string, value: string) => ({ [key]: value });
const getFlex =
  (key: FlexKs) => (props: FlexProps & { theme: DefaultTheme }) => {
    const val = props[`$${key}`];
    const newVal = {
      ...(typeof val === "string" ? { sm: `${val}` } : null),
      ...(typeof val === "object" ? val : null),
    };
    const resVal = Object.keys(newVal);

    return resVal.reduce(
      (prev, curr) =>
        css`
          ${prev};
          ${t(curr)} {
            ${getPropPair(key, newVal[curr])}
          } ;
        `,
      {},
    );
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
