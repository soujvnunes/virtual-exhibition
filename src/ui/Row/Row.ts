import styled from "styled-components";

const Row = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% + ${(p) => p.theme.size(8)});
  margin-top: ${(p) => p.theme.size(8, { negative: true })};
  margin-left: ${(p) => p.theme.size(8, { negative: true })};
  ${(p) => p.theme.media.md} {
    width: calc(100% + ${(p) => p.theme.size(12)});
    margin-top: ${(p) => p.theme.size(12, { negative: true })};
    margin-left: ${(p) => p.theme.size(12, { negative: true })};
  }
  ${(p) => p.theme.media.lg} {
    width: calc(100% + ${(p) => p.theme.size(16)});
    margin-top: ${(p) => p.theme.size(16, { negative: true })};
    margin-left: ${(p) => p.theme.size(16, { negative: true })};
  }
`;

Row.displayName = "Row";
export default Row;
