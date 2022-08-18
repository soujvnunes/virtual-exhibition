import {
  cssVarState,
  cssVarColor,
  cssVarsSizeProp,
  theme,
  cssVarTone,
} from "./GlobalStyle.util";

export type CSSVarColor = keyof typeof cssVarColor;

export type CSSVarState = keyof typeof cssVarState;

export type CSSVarTone = keyof typeof cssVarTone;

export type CSSVarsSize = typeof cssVarsSizeProp[number];

export type CSSVarsSizes = (string | null)[];

export type Theme = typeof theme;

export type ThemeMedia = keyof Theme["media"];

export type ThemeMediaQuery = Exclude<
  ThemeMedia,
  "light" | "dark" | "idle" | "motion"
>;
