import styled from "styled-components";
import { getToken } from "utils";
import Surface from "ui/Surface";
import Text from "ui/Text";
import { ButtonProps } from "ui/Button";

const Button = styled(Text).attrs((props: ButtonProps) => ({
  as: Surface,
  $variant: "overline",
  $weight: 700,
  forwardedAs: props.href ? "a" : "button",
}))<ButtonProps>`
  align-items: center;
  background-color: transparent;
  height: calc(${getToken("size.32")} + ${getToken("size.8")});
  padding: 0 ${getToken("size.24")} 0 ${getToken("size.24")};
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
