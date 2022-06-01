import { ReactNode } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import ButtonBase from "../ButtonBase";
import { getTheme as g } from "utils";

interface Props extends StyledComponentPropsWithRef<"button"> {
  $iconStart?: ReactNode;
  $iconEnd?: ReactNode;
}

const WrapStart = styled.span`
  margin-right: ${g("12")};
`;
const WrapEnd = styled.span`
  margin-left: ${g("12")};
`;
const ButtonRoot = styled(ButtonBase)<Props>`
  padding-top: ${(props) =>
    props.$iconStart || props.$iconEnd ? g("8") : g("12")};
  padding-bottom: ${(props) =>
    props.$iconStart || props.$iconEnd ? g("8") : g("12")};
  padding-right: ${(props) => (props.$iconEnd ? g("12") : g("24"))};
  padding-left: ${(props) => (props.$iconStart ? g("12") : g("24"))};
`;

function Button({ children, ...props }: Props) {
  return (
    <ButtonRoot {...props}>
      {props.$iconStart && <WrapStart>{props.$iconStart}</WrapStart>}
      {children}
      {props.$iconEnd && <WrapEnd>{props.$iconEnd}</WrapEnd>}
    </ButtonRoot>
  );
}
Button.displayName = "Button";
export default Button;
