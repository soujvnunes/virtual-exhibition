import { DefaultTheme, StyledComponentPropsWithRef } from "styled-components";

export type $Props = {
  foundation?: "top" | "right" | "bottom" | "left";
};
export type Props = StyledComponentPropsWithRef<
  "button",
  DefaultTheme,
  $Props,
  any,
  any
>;
export type Ref = HTMLButtonElement;
