import styled from "styled-components";
import { token as g } from "utils";
import { ButtonProps } from "types";
import Surface from "ui/Surface";

const Button = styled(Surface).attrs((props: ButtonProps) => ({
  $align: "center",
  as: props.href ? "a" : "button",
}))<ButtonProps>`
  background-color: transparent;
  height: calc(${g("32")} + ${g("8")});
  padding: 0 ${g("24")} 0 ${g("24")};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: ${g("overline")};
  font-weight: 700;
  line-height: 1.167;
  text-decoration: ${(props) => props.href && "none"};

  &:focus {
    outline: 0;
  }
`;

Button.displayName = "Button";
export default Button;
