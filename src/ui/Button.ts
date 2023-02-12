import styled from "styled-components";
import type { StyledComponentPropsWithRef } from "styled-components";
import Text from "./Text";

type ButtonProps =
  | ({ href?: string } & StyledComponentPropsWithRef<"a">)
  | ({ href?: undefined } & StyledComponentPropsWithRef<"button">);

const Button = styled(Text).attrs<ButtonProps>(({ href }) => ({
  $variant: "label",
  ...(href && {
    as: "a",
  }),
}))<ButtonProps>`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizing.x3l};
  border: 1px solid
    ${({ theme }) => `rgb(${theme.channel.main} / ${theme.alpha.secondary})`};
  border-radius: ${({ theme }) => theme.sizing.md};
  padding: 0px ${({ theme }) => theme.sizing.lg};
  background-color: transparent;
  color: rgb(${({ theme }) => theme.channel.accent});
  text-decoration: ${({ href }) => {
    if (href) return "none";
  }};
`;

Button.displayName = "Button";
export default Button;
