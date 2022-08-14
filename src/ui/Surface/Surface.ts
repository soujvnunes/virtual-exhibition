import styled from "styled-components";

const Surface = styled.div`
  display: flex;
  border: 1px solid ${(p) => p.theme.color.main("secondary")};
  border-radius: ${(p) => p.theme.size(16)};
  color: ${(p) => p.theme.color.accent()};
`;

Surface.displayName = "Surface";
export default Surface;
