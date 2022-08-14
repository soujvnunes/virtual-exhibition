import {
  getColor,
  mapAlpha,
  mapColor,
  mapSize,
  theme,
} from "./GlobalStyle.util";

export type Color = typeof mapColor[number];

export type Alpha = typeof mapAlpha[number];

export type Colors = Record<Color, ReturnType<typeof getColor>>;

export type Size = typeof mapSize[number];

export type Theme = typeof theme;

export type ThemeMedia = keyof Theme["media"];

export type ThemeMediaQuery = Exclude<
  ThemeMedia,
  "light" | "dark" | "idle" | "motion"
>;
