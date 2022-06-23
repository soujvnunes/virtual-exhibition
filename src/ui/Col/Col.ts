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
const Col = styled(Flex).attrs({ as: "li" })<ColProps>`
  padding-left: ${t("padding")};
  padding-top: ${t("padding")};
  ${(props) => props.sm && getColWidth(props.sm)};
  ${(props) => props.md && getColWidth(props.md, "md")};
  ${(props) => props.lg && getColWidth(props.lg, "lg")};
`;

Col.displayName = "Col";
export default Col;
