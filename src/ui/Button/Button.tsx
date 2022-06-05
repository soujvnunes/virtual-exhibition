import styled from "styled-components";
import ButtonBase from "ui/ButtonBase";
import { token as g } from "utils";
import { $ButtonProps, ButtonProps } from "types";

const IconWrapper = styled.svg<{ $edge: "start" | "end" }>`
  margin-right: ${(props) => props.$edge === "start" && g("12")};
  margin-left: ${(props) => props.$edge === "end" && g("12")};
  display: inherit;
`;
const ButtonRoot = styled((props) => (
  <ButtonBase $align="center" {...props} />
))<$ButtonProps>`
  padding-right: ${(props) => (props.$iconEnd ? g("12") : g("24"))};
  padding-left: ${(props) => (props.$iconStart ? g("12") : g("24"))};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: ${g("overline")};
  font-weight: 700;
  line-height: 1.167;
`;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonRoot {...props}>
      {props.$iconStart && <IconWrapper as={props.$iconStart} $edge="start" />}
      {children}
      {props.$iconEnd && <IconWrapper as={props.$iconEnd} $edge="end" />}
    </ButtonRoot>
  );
}
Button.displayName = "Button";
