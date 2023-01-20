import styled from "styled-components";
import { getResponsiveTheme } from "utils/theme";

const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  ${getResponsiveTheme({
    paddingRight: "grid.margin",
    paddingLeft: "grid.margin",
  })}
`;

Container.displayName = "Container";
export default Container;
