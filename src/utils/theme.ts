import { css } from "styled-components";
import type { DefaultTheme } from "styled-components";

type CalorAlphas = keyof DefaultTheme["alpha"];
type ColorChannels =
  | "text"
  | "background"
  | "main"
  | "accent"
  | "warning"
  | "error"
  | "info";
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
type SizeSigns = "" | "-";
type SizeValues =
  | `${SizeSigns}typography.${SizeTypography}`
  | `${SizeSigns}grid.${SizeGrid}`;

type Styles = {
  [K in ColorProps]?: ColorValues;
} & {
  [K in SizeProps]?: SizeValues;
};
type StylesProps = keyof Styles;

function rgb(alpha: number) {
  return (channel: string) => `rgb(${channel} / ${alpha})`;
}
function testAbs(key: string) {
  return (value: string | number) =>
    /-/.test(key)
      ? typeof value === "number"
        ? -Math.abs(value)
        : `-${value}`
      : value;
}
function isColor(prop: string): prop is ColorProps {
  return (
    prop === "color" || prop === "backgroundColor" || prop === "borderColor"
  );
}
export function getResponsiveTheme(styles: Styles) {
  return css(({ theme }) =>
    Object.keys(styles).reduce((newStyles, prop) => {
      const style = styles[prop as StylesProps];

      if (!style) return newStyles;

      if (isColor(prop)) {
        const [channel, alphaValue] = styles[prop]?.split(".") as [
          ColorChannels,
          CalorAlphas,
        ];
        const color = rgb(theme.alpha[alphaValue]);

        return {
          ...newStyles,
          [prop]: {
            text: color(theme.channel.black),
            background: color(theme.channel.pink.lighter),
            main: color(theme.channel.pink.DEFAULT),
            accent: color(theme.channel.pink.dark),
            info: color(theme.channel.blue.DEFAULT),
            warning: color(theme.channel.yellow.DEFAULT),
            error: color(theme.channel.red.DEFAULT),
          }[channel],
          ...(channel !== "main" && {
            [theme.media.dark]: {
              // @ts-expect-error Media types cannot be used to destruct object
              ...newStyles[theme.media.dark],
              [prop]: {
                text: color(theme.channel.white),
                background: color(theme.channel.pink.darker),
                accent: color(theme.channel.pink.lighter),
                info: color(theme.channel.blue.dark),
                warning: color(theme.channel.yellow.dark),
                error: color(theme.channel.red.dark),
              }[channel],
            },
          }),
        };
      }

      const [key, value] = style.split(".") as [
        SizeKeys,
        SizeTypography | SizeGrid,
      ];
      const abs = testAbs(key);

      return {
        ...newStyles,
        [prop]: {
          width: `calc(100% - ${theme.spacing.x2s}px)`,
          padding: abs(theme.spacing.x2s),
          margin: abs(theme.spacing.sm),
          h1: abs(48),
          h2: abs(44),
          h3: abs(40),
          h4: abs(36),
          h5: abs(32),
          h6: abs(28),
          body4: abs(24),
          body3: abs(20),
          body2: abs(16),
          body1: abs(12),
        }[value],
        ...((value === "width" ||
          value === "padding" ||
          value === "margin" ||
          value === "h1" ||
          value === "h2" ||
          value === "h3" ||
          value === "h4") && {
          [theme.media.md]: {
            // @ts-expect-error Media types cannot be used to destruct object
            ...newStyles[theme.media.md],
            [prop]: {
              width: `calc(100% - ${theme.spacing.xs}px)`,
              padding: abs(theme.spacing.xs),
              margin: abs(theme.spacing.md),
              h1: abs(56),
              h2: abs(52),
              h3: abs(44),
              h4: abs(40),
            }[value],
          },
          [theme.media.lg]: {
            // @ts-expect-error Media types cannot be used to destruct object
            ...newStyles[theme.media.lg],
            [prop]: {
              width: `calc(100% - ${theme.spacing.sm}px)`,
              padding: abs(theme.spacing.sm),
              margin: abs(theme.spacing.lg),
              h1: abs(64),
              h2: abs(60),
              h3: abs(48),
              h4: abs(40),
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
    red: {
      DEFAULT: "255 51 51",
      dark: "204 0 0",
    },
    blue: {
      DEFAULT: "51 153 255",
      dark: "0 102 187",
    },
    yellow: {
      DEFAULT: "255 238 170",
      dark: "204 204 119",
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
