import styled from "styled-components";
import { getToken } from "utils";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 80rem;
  padding-right: ${getToken("grid.margin")};
  padding-left: ${getToken("grid.margin")};
`;

Container.displayName = "Container";
export default Container;
