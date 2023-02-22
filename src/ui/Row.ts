import styled from "styled-components";

const Row = styled.ul`
  display: flex;
  width: calc(100% + ${({ theme }) => theme.size.x2s});
  margin-top: calc(-1 * ${({ theme }) => theme.size.x2s});
  margin-left: calc(-1 * ${({ theme }) => theme.size.x2s});
`;

Row.displayName = "Row";
export default Row;
