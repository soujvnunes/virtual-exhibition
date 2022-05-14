import { forwardRef } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";

const Root = styled.div(({ theme }) => ({
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "80rem",
  paddingRight: theme.spacing.md,
  paddingLeft: theme.spacing.md,
  [theme.media.md]: {
    paddingRight: theme.spacing.lg,
    paddingLeft: theme.spacing.lg,
  },
  [theme.media.lg]: {
    paddingRight: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },
}));
const Container = forwardRef<
  HTMLDivElement,
  StyledComponentPropsWithRef<"div">
>((props, ref) => <Root ref={ref} {...props} />);

export default Object.assign(Container, { Root });
