import styled, { css } from "styled-components";
import { FlexKs, FlexProps } from "types";
import { getProps } from "utils";
import flexProps from "./flexProps";

const Flex = styled.div<FlexProps>`
  ${flexProps.reduce(
    (prev, curr) =>
      css`
        ${prev};
        ${getProps<FlexKs, FlexProps>(curr)};
      `,
    {},
  )};
`;

Flex.displayName = "Flex";
export default Flex;
