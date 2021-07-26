import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";

export interface ButtonBaseProps extends ComponentPropsWithRef<"button"> {
  variant: "contained" | "outlined" | "text";
}
export type ButtonBaseRef = HTMLButtonElement;

export const ButtonBaseRoot = styled.button<{
  $props: { variant: ButtonBaseProps["variant"] };
}>(({ $props }) => ({
  paddingInline: "1rem",
  height: "2rem",
  backgroundColor: "transparent",
  borderRadius: "1rem",
  display: "inline-flex",
  alignItems: "center",
  font: "inherit",
  ...{
    contained: {
      borderWidth: "0rem",
      borderStyle: "none",
      borderColor: "transparent",
    },
    outlined: {},
    text: {},
  }[$props.variant],
}));
const ButtonBase = forwardRef<ButtonBaseRef, ButtonBaseProps>(
  function ButtonBase({ variant = "text", ...params }, ref) {
    return <ButtonBaseRoot ref={ref} $props={{ variant }} {...params} />;
  },
);

ButtonBase.displayName = "ButtonBase";
export default ButtonBase;
