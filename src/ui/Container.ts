import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ theme }) => theme.grid.area};
  padding-left: ${({ theme }) => theme.grid.margin};
  padding-right: ${({ theme }) => theme.grid.margin};
  margin-left: auto;
  margin-right: auto;
`;

Container.displayName = "Container";
export default Container;
