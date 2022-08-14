import {
  getCSSVarsColorChannel,
  cssVarsColorAlphaProp,
  cssVarsColorChannelProp,
  cssVarsSizeProp,
  theme,
} from "./GlobalStyle.util";

export type CSSVarsColorChannel = typeof cssVarsColorChannelProp[number];

export type CSSVarsColorAlpha = typeof cssVarsColorAlphaProp[number];

export type CSSVarsColorsChannel = Record<
  CSSVarsColorChannel,
  ReturnType<typeof getCSSVarsColorChannel>
>;

export type CSSVarsSize = typeof cssVarsSizeProp[number];

export type CSSVarsSizes = (string | null)[];

export type Theme = typeof theme;

export type ThemeMedia = keyof Theme["media"];

export type ThemeMediaQuery = Exclude<
  ThemeMedia,
  "light" | "dark" | "idle" | "motion"
>;
