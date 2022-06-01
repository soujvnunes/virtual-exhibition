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
const Button = styled(({ children, ...props }: Props) => (
  <ButtonBase {...props}>
    {props.$iconStart && <WrapStart>{props.$iconStart}</WrapStart>}
    {children}
    {props.$iconEnd && <WrapEnd>{props.$iconEnd}</WrapEnd>}
  </ButtonBase>
))`
  padding-top: ${(props) =>
    props.$iconStart || props.$iconEnd ? g("8") : g("12")};
  padding-bottom: ${(props) =>
    props.$iconStart || props.$iconEnd ? g("8") : g("12")};
  padding-right: ${(props) => (props.$iconEnd ? g("12") : g("24"))};
  padding-left: ${(props) => (props.$iconStart ? g("12") : g("24"))};
`;

Button.displayName = "Button";
export default Button;
