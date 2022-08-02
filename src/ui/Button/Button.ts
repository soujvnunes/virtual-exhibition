import styled, { StyledComponentPropsWithRef } from "styled-components";
import { getToken } from "utils";
import Surface from "ui/Surface";
import Text from "ui/Text";

type ButtonProps =
  | ({ href?: string } & StyledComponentPropsWithRef<"a">)
  | ({ href?: undefined } & StyledComponentPropsWithRef<"button">);

const ButtonTextStyle = styled(Text).attrs({
  $variant: "overline",
  $weight: 700,
})`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.167;
  text-decoration: ${(props) => props.href && "none"};
`;
const Button = styled(Surface).attrs((props: ButtonProps) => ({
  as: ButtonTextStyle,
  forwardedAs: props.href ? "a" : "button",
}))<ButtonProps>`
  align-items: center;
  background-color: transparent;
  height: calc(${getToken("size.32")} + ${getToken("size.8")});
  padding: 0 ${getToken("size.24")} 0 ${getToken("size.24")};

  &:focus {
    outline: 0;
  }
`;

Button.displayName = "Button";
export default Button;
