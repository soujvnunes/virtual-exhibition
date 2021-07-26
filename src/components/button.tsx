import { forwardRef } from "react";
import styled from "styled-components";
import ButtonBase, { ButtonBaseProps, ButtonBaseRef } from "./button-base";

export interface ButtonProps extends ButtonBaseProps {
  foundation: "top" | "right" | "bottom" | "left";
}

export const ButtonRoot = styled(ButtonBase)({
  paddingInline: "1rem",
  height: "2rem",
  backgroundColor: "transparent",
  borderRadius: "1rem",
  display: "inline-flex",
  alignItems: "center",
  font: "inherit",
  borderWidth: "0rem",
  borderStyle: "none",
  borderColor: "transparent",
});
const Button = forwardRef<ButtonBaseRef, ButtonProps>(function Button(
  params,
  ref,
) {
  return <ButtonRoot ref={ref} {...params} />;
});

Button.displayName = "Button";
export default Button;
