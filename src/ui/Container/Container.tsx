import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";

const Root = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 80rem;
  padding-right: ${({ theme }) => theme.grid.margin};
  padding-left: ${({ theme }) => theme.grid.margin};
`;
const Container = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
  (props, ref) => <Root ref={ref} {...props} />,
);

export default Object.assign(Container, { Root });
