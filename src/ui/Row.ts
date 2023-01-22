import styled from "styled-components";
import { getResponsiveTheme } from "utils/theme";

const Row = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  ${getResponsiveTheme({
    width: "area",
    marginTop: "-gapin",
    marginLeft: "-gapin",
  })}
`;

Row.displayName = "Row";
export default Row;
