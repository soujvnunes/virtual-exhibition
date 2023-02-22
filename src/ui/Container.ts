import styled from "styled-components";

const Container = styled.div`
  max-width: 1538px;
  width: 100%;
  padding-left: ${({ theme }) => theme.size.sm};
  padding-right: ${({ theme }) => theme.size.sm};
  margin-left: auto;
  margin-right: auto;
`;

Container.displayName = "Container";
export default Container;
