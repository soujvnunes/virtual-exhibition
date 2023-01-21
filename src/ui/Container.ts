import styled from "styled-components";
import { getResponsiveTheme } from "utils/theme";

const Container = styled.div`
  max-width: ${({ theme }) => theme.value[1536]};
  margin-left: auto;
  margin-right: auto;
  ${getResponsiveTheme({
    paddingRight: "grid.margin",
    paddingLeft: "grid.margin",
  })}
`;

Container.displayName = "Container";
export default Container;
