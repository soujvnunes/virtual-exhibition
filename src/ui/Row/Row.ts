import styled from "styled-components";
import { getToken as t } from "utils";

const Row = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% + ${t("padding")});
  margin-top: calc(${t("padding")} * -1);
  margin-left: calc(${t("padding")} * -1);
  margin-bottom: 0;
  padding-left: 0;
`;

Row.displayName = "Row";
export default Row;
