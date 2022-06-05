import styled from "styled-components";
import ButtonBase from "../ButtonBase";
import { token as g } from "utils";
import { $ButtonProps, ButtonProps } from "types";

const IconWrapper = styled.span<{ $edge: "start" | "end" }>`
  margin-right: ${(props) => props.$edge === "start" && g("12")};
  margin-left: ${(props) => props.$edge === "end" && g("12")};
  display: inherit;
`;
const ButtonRoot = styled(ButtonBase)<$ButtonProps>`
  padding-top: ${(props) =>
    props.$iconStart || props.$iconEnd ? g("8") : g("12")};
  padding-bottom: ${(props) =>
    props.$iconStart || props.$iconEnd ? g("8") : g("12")};
  padding-right: ${(props) => (props.$iconEnd ? g("12") : g("24"))};
  padding-left: ${(props) => (props.$iconStart ? g("12") : g("24"))};
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
