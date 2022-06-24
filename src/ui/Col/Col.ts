import styled, { css } from "styled-components";
import { ColEdges, ColProps } from "types";
import Flex from "ui/Flex";
import { token as t } from "utils";

const getColSize = (col: number) => (100 * col) / 12;
const getCol = (col: ColEdges, media?: "md" | "lg") => css`
  ${media && t(media)} {
    margin-left: ${col.start && `${getColSize(col.start)}%`};
    margin-right: ${col.end && `${getColSize(col.end)}%`};
    flex-basis: ${col.mid && `${getColSize(col.mid)}%`};
    flex-grow: ${col.mid && 0};
    max-width: ${col.mid && `${getColSize(col.mid)}%`};
  }
`;
const Col = styled(Flex).attrs({ as: "li" })<ColProps>`
  padding-left: ${t("padding")};
  padding-top: ${t("padding")};
  ${(props) => props.$sm && getCol(props.$sm)};
  ${(props) => props.$md && getCol(props.$md, "md")};
  ${(props) => props.$lg && getCol(props.$lg, "lg")};
`;

Col.displayName = "Col";
export default Col;
