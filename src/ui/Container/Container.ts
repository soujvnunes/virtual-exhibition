import styled from "styled-components";
import { getToken } from "utils";

const Container = styled.div`
  max-width: 80rem;
  margin-right: ${getToken("grid.margin")};
  margin-left: ${getToken("grid.margin")};
  ${getToken("media.lg")} {
    margin-right: auto;
    margin-left: auto;
  }
`;

Container.displayName = "Container";
export default Container;
