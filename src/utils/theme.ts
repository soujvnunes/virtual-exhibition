import { css } from "styled-components";
import type { DefaultTheme } from "styled-components";

const minus = /^-/;

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

type SizeProps =
  | `${"margin" | "padding"}${"" | "Top" | "Right" | "Bottom" | "Left"}`
  | "width"
  | "height"
  | "fontSize";
type SizeValues = `${"" | "-"}${
  | "area"
  | "gapout"
  | "gapin"
  | "sm"
  | "md"
  | "lg"
  | `x${"" | 2 | 3 | 4 | 5 | 6 | 7}l`}`;

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
    minus.test(key)
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
function isValueResponsive(
  value: string,
): value is "area" | "gapin" | "gapout" | "x7l" | "x6l" | "x5l" | "x4l" {
  return (
    value === "area" ||
    value === "gapin" ||
    value === "gapout" ||
    value === "x7l" ||
    value === "x6l" ||
    value === "x5l" ||
    value === "x4l"
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
            text: color(theme.channel.gray.dark),
            background: color(theme.channel.pink.lighter),
            main: color(theme.channel.pink.DEFAULT),
            accent: color(theme.channel.pink.dark),
            info: color(theme.channel.blue.DEFAULT),
            warning: color(theme.channel.yellow.DEFAULT),
            error: color(theme.channel.red.DEFAULT),
          }[channel],
          ...(channel !== "main" && {
            [theme.media.dark]: {
              ...newStyles[theme.media.dark],
              [prop]: {
                text: color(theme.channel.gray.light),
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

      const value = style.replace(minus, "");
      const abs = testAbs(style);

      return {
        ...newStyles,
        [prop]: {
          area: `calc(100% + ${theme.value[8]})`,
          gapin: abs(theme.value[8]),
          gapout: abs(theme.value[16]),
          x7l: abs(theme.value[48]),
          x6l: abs(theme.value[44]),
          x5l: abs(theme.value[40]),
          x4l: abs(theme.value[36]),
          x3l: abs(theme.value[32]),
          x2l: abs(theme.value[28]),
          xl: abs(theme.value[24]),
          lg: abs(theme.value[20]),
          md: abs(theme.value[16]),
          sm: abs(theme.value[12]),
        }[value],
        ...(isValueResponsive(value) && {
          [theme.media.md]: {
            ...newStyles[theme.media.md],
            [prop]: {
              area: `calc(100% + ${theme.value[12]})`,
              gapin: abs(theme.value[12]),
              gapout: abs(theme.value[24]),
              x7l: abs(theme.value[56]),
              x6l: abs(theme.value[52]),
              x5l: abs(theme.value[44]),
              x4l: abs(theme.value[40]),
            }[value],
          },
          [theme.media.lg]: {
            ...newStyles[theme.media.lg],
            [prop]: {
              area: `calc(100% + ${theme.value[16]})`,
              gapin: abs(theme.value[16]),
              gapout: abs(theme.value[32]),
              x7l: abs(theme.value[64]),
              x6l: abs(theme.value[60]),
              x5l: abs(theme.value[48]),
              x4l: abs(theme.value[40]),
            }[value],
          },
        }),
      };
    }, {} as Record<string, Record<string, string | number>>),
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
    gray: {
      light: "255 255 255",
      dark: "51 51 51",
    },
  },
  alpha: {
    primary: 1,
    backdrop: 0.8,
    secondary: 0.6,
    tertiary: 0.2,
    shadow: 0.16,
    opaque: 0,
  },
  value: {
    256: "256px",
    192: "192px",
    128: "128px",
    96: "96px",
    64: "4rem",
    60: "3.75rem",
    56: "3.5rem",
    52: "3.25rem",
    48: "3rem",
    44: "2.75rem",
    40: "2.5rem",
    36: "2.25rem",
    32: "2rem",
    28: "1.75rem",
    24: "1.5rem",
    20: "1.25rem",
    16: "1rem",
    12: "0.75rem",
    8: "8px",
    2: "2px",
    1: "1px",
    0: "0px",
  },
  kerning: {
    DEFAULT: 1.5,
    heading: 1,
  },
  weight: {
    regular: 400,
    bold: 500,
    bolder: 600,
    heavy: 700,
  },
  media: {
    DEFAULT: "",
    md: "@media (min-width: 512px)",
    lg: "@media (min-width: 1024px)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
} as const;
