import styled from "styled-components";
import Flex from "ui/Flex";
import { token as t } from "utils";

const Row = styled(Flex).attrs({
  as: "ul",
  $display: "flex",
  $flow: "row wrap",
})`
  list-style-type: none;
  width: calc(100% + ${t("padding")});
  margin-top: calc(${t("padding")} * -1);
  margin-left: calc(${t("padding")} * -1);
  margin-bottom: 0;
  padding-left: 0;
`;

Row.displayName = "Row";
export default Row;
