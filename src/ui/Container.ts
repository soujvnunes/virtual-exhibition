import styled from "styled-components";
import { getResponsiveTheme } from "utils/theme";

const Container = styled.div`
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  ${getResponsiveTheme({
    paddingRight: "gapout",
    paddingLeft: "gapout",
  })}
`;

Container.displayName = "Container";
export default Container;
