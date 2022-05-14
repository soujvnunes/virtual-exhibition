import styled from "styled-components";

export const ContainerRoot = styled.div(({ theme }) => ({
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
