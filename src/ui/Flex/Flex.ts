import styled, { css } from "styled-components";
import { FlexProps } from "types";
import { token as t } from "utils";

const getCol = (col: number, query?: "md" | "lg") => css`
  ${query && t(query)} {
    flex-basis: ${(100 * col) / 12}%;
    flex-grow: 0;
    max-width: ${(100 * col) / 12}%;
  }
`;
const Flex = styled.div<FlexProps>`
  display: ${(props) => (props.$row ? "flex" : props.$display)};
  flex-direction: ${(props) => props.$direction};
  flex-flow: ${(props) => (props.$row ? "row wrap" : props.$flow)};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  align-content: ${(props) => props.$content};
  order: ${(props) => props.$order};
  flex-grow: ${(props) => props.$grow};
  flex-shrink: ${(props) => props.$shrink};
  align-self: ${(props) => props.$self};
  width: ${(props) => props.$row && "100%"};
  ${(props) =>
    typeof props.$col === "number"
      ? getCol(props.$col)
      : css`
          ${props.$col?.sm && getCol(props.$col.sm)};
          ${props.$col?.md && getCol(props.$col.md, "md")};
          ${props.$col?.lg && getCol(props.$col.lg, "lg")};
        `};
`;

Flex.displayName = "Flex";
export default Flex;
