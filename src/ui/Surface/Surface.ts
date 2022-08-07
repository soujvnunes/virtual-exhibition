import styled from "styled-components";
import { getToken } from "utils";

const Surface = styled.div`
  display: flex;
  border: 1px solid ${getToken("main.pureSecondary")};
  border-radius: ${getToken("size.16")};
  color: ${getToken("main.shade")};
`;

Surface.displayName = "Surface";
export default Surface;
