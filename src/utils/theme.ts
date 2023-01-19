import { css } from "styled-components";
import type { DefaultTheme } from "styled-components";

type CalorAlphas = keyof DefaultTheme["alpha"];
type ColorChannels = "text" | "background" | "main" | "accent";
type ColorProps = "color" | "backgroundColor" | "borderColor";
type ColorValues = `${ColorChannels}.${CalorAlphas}`;

type SizePlacements = Capitalize<"" | "top" | "right" | "bottom" | "left">;
type SizeTypography = `h${1 | 2 | 3 | 4 | 5 | 6}` | `body${1 | 2 | 3 | 4}`;
type SizeGrid = "margin" | "padding" | "width";
type SizeProps =
  | `${"margin" | "padding"}${SizePlacements}`
  | "width"
  | "height"
  | "fontSize";
type SizeKeys = "typography" | "grid";
type SizeValues = `typography.${SizeTypography}` | `grid.${SizeGrid}`;

type Styles = {
  [K in ColorProps]?: ColorValues;
} & {
  [K in SizeProps]?: SizeValues;
};

export function getResponsiveTheme(styles: Styles) {
  return css(({ theme }) =>
    Object.keys(styles).reduce((newStyles, prop) => {
      const style = styles[prop as keyof Styles];

      if (!style) return newStyles;

      if (
        prop === "color" ||
        prop === "backgroundColor" ||
        prop === "borderColor"
      ) {
        const [channel, alpha] = style.split(".") as [
          ColorChannels,
          CalorAlphas,
        ];

        return {
          ...newStyles,
          [prop]: {
            text: `rgb(${theme.channel.white} / ${theme.alpha[alpha]})`,
            background: `rgb(${theme.channel.pink.lighter} / ${theme.alpha[alpha]})`,
            main: `rgb(${theme.channel.pink.DEFAULT} / ${theme.alpha[alpha]})`,
            accent: `rgb(${theme.channel.pink.dark} / ${theme.alpha[alpha]})`,
          }[channel],
          ...(channel !== "main" && {
            [theme.media.dark]: {
              [prop]: {
                text: `rgb(${theme.channel.black} / ${theme.alpha[alpha]})`,
                background: `rgb(${theme.channel.pink.darker} / ${theme.alpha[alpha]})`,
                accent: `rgb(${theme.channel.pink.lighter} / ${theme.alpha[alpha]})`,
              }[channel],
            },
          }),
        };
      }

      const [key, value] = style.split(".") as [
        SizeKeys,
        SizeTypography | SizeGrid,
      ];

      return {
        ...newStyles,
        [prop]: {
          width: `calc(100% + ${theme.sizing.x2s})`,
          padding: theme.spacing.x2s,
          margin: theme.spacing.sm,
          h1: 64,
          h2: 60,
          h3: 48,
          h4: 40,
          h5: 32,
          h6: 28,
          body4: 24,
          body3: 20,
          body2: 16,
          body1: 12,
        }[value],
        ...((value === "width" ||
          value === "padding" ||
          value === "margin" ||
          value === "h1" ||
          value === "h2" ||
          value === "h3" ||
          value === "h4") && {
          [theme.media.md]: {
            [prop]: {
              width: `calc(100% + ${theme.sizing.xs})`,
              padding: theme.spacing.xs,
              margin: theme.spacing.md,
              h1: 56,
              h2: 52,
              h3: 44,
              h4: 40,
            }[value],
          },
          [theme.media.lg]: {
            [prop]: {
              width: `calc(100% + ${theme.sizing.sm})`,
              padding: theme.spacing.sm,
              margin: theme.spacing.lg,
              h1: 48,
              h2: 44,
              h3: 40,
              h4: 36,
            }[value],
          },
        }),
      };
    }, {}),
  );
}

export const theme = {
  channel: {
    pink: {
      lighter: "255 246 255",
      light: "255 204 255",
      DEFAULT: "255 153 255",
      dark: "204 102 204",
      darker: "26 15 26",
    },
    white: "255 255 255",
    black: "51 51 51",
  },
  alpha: {
    primary: 1,
    backdrop: 0.8,
    secondary: 0.6,
    tertiary: 0.2,
    shadow: 0.16,
    opaque: 0,
  },
  spacing: {
    x6s: 0,
    x5s: 1,
    x4s: 2,
    x3s: 4,
    x2s: 8,
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    x2l: 64,
    x3l: 96,
    x4l: 128,
    x5l: 192,
    x6l: 256,
  },
  sizing: {
    x6s: "0rem",
    x5s: "0.0625rem",
    x4s: "0.125rem",
    x3s: "0.25rem",
    x2s: "0.5rem",
    xs: "0.75rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    x2l: "4rem",
    x3l: "6rem",
    x4l: "8rem",
    x5l: "12rem",
    x6l: "16rem",
  },
  kerning: {
    base: 1.5,
    heading: 1,
  },
  media: {
    DEFAULT: "",
    md: "@media (min-width: 640px)",
    lg: "@media (min-width: 1280px)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
} as const;
