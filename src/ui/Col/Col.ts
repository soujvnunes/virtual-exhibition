import styled, { css } from "styled-components";
import { ColProps } from "types";
import Flex from "ui/Flex";
import { token as t } from "utils";

const getColWidth = (col: number, media?: "md" | "lg") => css`
  ${media && t(media)} {
    flex-basis: ${(100 * col) / 12}%;
    flex-grow: 0;
    max-width: ${(100 * col) / 12}%;
  }
`;
const Col = styled(Flex)<ColProps>(
  (props) =>
    css`
      ${props.sm && getColWidth(props.sm)};
      ${props.md && getColWidth(props.md, "md")};
      ${props.lg && getColWidth(props.lg, "lg")};
    `,
);

Col.displayName = "Col";
export default Col;
