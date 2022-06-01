import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";
import { getTheme as g } from "utils";

const Root = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 80rem;
  padding-right: ${g("margin")};
  padding-left: ${g("margin")};
`;
const Container = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
  (props, ref) => <Root ref={ref} {...props} />,
);

export default Object.assign(Container, { Root });
