import styled from "styled-components";
import { getToken } from "utils";

const Surface = styled.div`
  display: flex;
  border: 1px solid ${getToken("main.secondary")};
  border-radius: ${getToken("size.16")};
  color: ${getToken("color.accent")};
`;

Surface.displayName = "Surface";
export default Surface;
