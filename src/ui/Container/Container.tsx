import { forwardRef } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";

const Root = styled.div(({ theme }) => ({
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "80rem",
  paddingRight: theme.grid.margin,
  paddingLeft: theme.grid.margin,
}));
const Container = forwardRef<
  HTMLDivElement,
  StyledComponentPropsWithRef<"div">
>((props, ref) => <Root ref={ref} {...props} />);

export default Object.assign(Container, { Root });
