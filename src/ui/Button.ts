import styled from "styled-components";
import type { StyledComponentPropsWithRef } from "styled-components";
import Surface from "ui/Surface";
import Text from "ui/Text";

export type ButtonProps =
  | ({ href?: string } & StyledComponentPropsWithRef<"a">)
  | ({ href?: undefined } & StyledComponentPropsWithRef<"button">);

const Button = styled(Text).attrs((props: ButtonProps) => ({
  as: Surface,
  $variant: "overline",
  $weight: 700,
  forwardedAs: props.href ? "a" : "button",
}))<ButtonProps>`
  align-items: center;
  background-color: transparent;
  height: ${(p) => p.theme.size(40)};
  padding: 0 ${(p) => p.theme.size(24)};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.167;
  text-decoration: ${(props) => props.href && "none"};
  &:focus {
    outline: 0;
  }
`;

Button.displayName = "Button";
export default Button;
