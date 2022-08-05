import { theme } from "app";

export type Theme = typeof theme;

export type ThemeMedia = keyof Theme["media"];

export type ThemeMediaQuery = Exclude<
  ThemeMedia,
  "light" | "dark" | "idle" | "motion"
>;

export type PropsWithAs<P extends Record<string, unknown>> = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<P>;
} & P;
