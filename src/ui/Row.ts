import styled from "styled-components";
import { getResponsiveTheme } from "utils/theme";

const Row = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  ${getResponsiveTheme({
    width: "grid.width",
    marginTop: "-grid.padding",
    marginLeft: "-grid.padding",
  })}
`;

Row.displayName = "Row";
export default Row;
