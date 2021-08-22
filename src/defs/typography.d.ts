import { sizes, variants, weights } from "libs";
import { DefaultTheme, StyledComponentProps } from "styled-components";

export type $Props = {
  noGutters?: boolean;
  gutterBottom?: boolean;
  variant?: typeof variants[number];
  weight?: typeof weights[number];
  size?: keyof typeof sizes;
  device: "xl" | "lg" | "md" | "sm" | "xs";
};
export type Props = StyledComponentProps<
  "span",
  DefaultTheme,
  $Props,
  any,
  any
>;
export type Ref = HTMLSpanElement;
