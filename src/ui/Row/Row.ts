import styled from "styled-components";
import { getToken } from "utils";

const Row = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% + ${getToken("grid.padding")});
  margin-top: calc(${getToken("grid.padding")} * -1);
  margin-left: calc(${getToken("grid.padding")} * -1);
`;

Row.displayName = "Row";
export default Row;
