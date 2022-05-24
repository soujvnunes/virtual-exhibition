import { ComponentPropsWithRef, forwardRef } from "react";
import styled, { token } from "styled-components";

const Root = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 80rem;
  padding-right: ${token("margin")};
  padding-left: ${token("margin")};
`;
const Container = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
  (props, ref) => <Root ref={ref} {...props} />,
);

export default Object.assign(Container, { Root });
