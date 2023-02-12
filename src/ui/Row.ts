import styled from "styled-components";

const Row = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  width: calc(100% + ${({ theme }) => theme.grid.padding});
  margin-top: calc(-1 * ${({ theme }) => theme.grid.padding});
  margin-left: calc(-1 * ${({ theme }) => theme.grid.padding});
`;

Row.displayName = "Row";
export default Row;
