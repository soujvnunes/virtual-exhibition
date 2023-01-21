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
    /^-/.test(key)
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
): value is "width" | "padding" | "margin" | "h1" | "h2" | "h3" | "h4" {
  return (
    value === "width" ||
    value === "padding" ||
    value === "margin" ||
    value === "h1" ||
    value === "h2" ||
    value === "h3" ||
    value === "h4"
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
              // @ts-expect-error Media types cannot be used to destruct object
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

      const [key, value] = style.split(".") as [
        SizeKeys,
        SizeTypography | SizeGrid,
      ];
      const abs = testAbs(key);

      return {
        ...newStyles,
        [prop]: {
          width: `calc(100% - ${theme.value[8]}px)`,
          padding: abs(theme.value[8]),
          margin: abs(theme.value[16]),
          h1: abs(theme.value[48]),
          h2: abs(theme.value[44]),
          h3: abs(theme.value[40]),
          h4: abs(theme.value[36]),
          h5: abs(theme.value[32]),
          h6: abs(theme.value[28]),
          body4: abs(theme.value[24]),
          body3: abs(theme.value[20]),
          body2: abs(theme.value[16]),
          body1: abs(theme.value[12]),
        }[value],
        ...(isValueResponsive(value) && {
          [theme.media.md]: {
            // @ts-expect-error Media types cannot be used to destruct object
            ...newStyles[theme.media.md],
            [prop]: {
              width: `calc(100% - ${theme.value[12]}px)`,
              padding: abs(theme.value[12]),
              margin: abs(theme.value[24]),
              h1: abs(theme.value[56]),
              h2: abs(theme.value[52]),
              h3: abs(theme.value[44]),
              h4: abs(theme.value[40]),
            }[value],
          },
          [theme.media.lg]: {
            // @ts-expect-error Media types cannot be used to destruct object
            ...newStyles[theme.media.lg],
            [prop]: {
              width: `calc(100% - ${theme.value[16]}px)`,
              padding: abs(theme.value[16]),
              margin: abs(theme.value[32]),
              h1: abs(theme.value[64]),
              h2: abs(theme.value[60]),
              h3: abs(theme.value[48]),
              h4: abs(theme.value[40]),
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
    1536: "1536px",
    768: "768px",
    384: "384px",
    96: "96px",
    // /\ big enough values to need resize by a11y tools
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
    // \/ small enough values to need resize by a11y tools
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
    DEFAULT: "", // sm, light, idle...
    md: "@media (min-width: 640px)",
    lg: "@media (min-width: 1280px)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
} as const;
