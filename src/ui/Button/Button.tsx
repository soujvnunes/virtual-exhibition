import { ReactNode } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import ButtonBase from "../ButtonBase";
import { token as g } from "utils";

interface Props extends StyledComponentPropsWithRef<"button"> {
  $iconStart?: ReactNode;
  $iconEnd?: ReactNode;
}

const IconWrapper = styled.span<{ $edge: "start" | "end" }>`
  margin-right: ${(props) => props.$edge === "start" && g("12")};
  margin-left: ${(props) => props.$edge === "end" && g("12")};
  display: inherit;
`;
const ButtonRoot = styled(ButtonBase)<Props>`
  padding-top: ${(props) =>
    props.$iconStart || props.$iconEnd ? g("8") : g("12")};
  padding-bottom: ${(props) =>
    props.$iconStart || props.$iconEnd ? g("8") : g("12")};
  padding-right: ${(props) => (props.$iconEnd ? g("12") : g("24"))};
  padding-left: ${(props) => (props.$iconStart ? g("12") : g("24"))};
`;

export default function Button({ children, ...props }: Props) {
  return (
    <ButtonRoot {...props}>
      {props.$iconStart && (
        <IconWrapper $edge="start">{props.$iconStart}</IconWrapper>
      )}
      {children}
      {props.$iconEnd && (
        <IconWrapper $edge="end">{props.$iconEnd}</IconWrapper>
      )}
    </ButtonRoot>
  );
}
Button.displayName = "Button";
