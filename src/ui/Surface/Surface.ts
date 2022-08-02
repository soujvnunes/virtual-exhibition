import styled from "styled-components";
import { getToken } from "utils";

const Surface = styled.div`
  display: flex;
  border: 1px solid
    rgb(${getToken("color.primary")} / ${getToken("action.hover")});
  border-radius: ${getToken("size.16")};
  color: rgb(${getToken("color.secondary")});
`;

Surface.displayName = "Surface";
export default Surface;
