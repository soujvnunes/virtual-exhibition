import styled from "styled-components";

const Container = styled.div`
  max-width: ${(p) => p.theme.size(1280)};
  margin-right: ${(p) => p.theme.size(16)};
  margin-left: ${(p) => p.theme.size(16)};
  ${(p) => p.theme.media.md} {
    margin-right: ${(p) => p.theme.size(24)};
    margin-left: ${(p) => p.theme.size(24)};
  }
  ${(p) => p.theme.media.lg} {
    margin-right: auto;
    margin-left: auto;
  }
`;

Container.displayName = "Container";
export default Container;
