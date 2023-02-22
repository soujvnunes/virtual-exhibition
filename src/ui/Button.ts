import styled from "styled-components";
import type { StyledComponentPropsWithRef } from "styled-components";
import Text from "./Text";

type ButtonProps =
  | ({ href?: string } & StyledComponentPropsWithRef<"a">)
  | ({ href?: undefined } & StyledComponentPropsWithRef<"button">);

const Button = styled(Text).attrs<ButtonProps>(({ href }) => ({
  $variant: "label",
  as: href ? "a" : "button",
}))<ButtonProps>`
  display: inline-flex;
  align-items: center;
  height: ${({ theme }) => theme.size.xl};
  border: 1px solid
    ${({ theme }) => `rgb(${theme.channel.main} / ${theme.alpha.secondary})`};
  border-radius: ${({ theme }) => theme.size.x2s};
  padding: 0px ${({ theme }) => theme.size.xs};
  background-color: transparent;
  color: rgb(${({ theme }) => theme.channel.accent});
  text-decoration: ${({ href }) => href && "none"};
`;

Button.displayName = "Button";
export default Button;
