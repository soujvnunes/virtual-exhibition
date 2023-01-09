import { createGlobalStyle } from "styled-components";
import type { DefaultTheme } from "styled-components";

const colorProps = ["color", "backgroundColor"] as const;

type Alphas = keyof DefaultTheme["alpha"];
type Channels = "text" | "background" | "main" | "accent";
type Colors = `${Channels}.${Alphas}`;
type Sizes = "sm" | "md" | "lg";

type ColorProps = typeof colorProps[number];
type Placements = Capitalize<"" | "top" | "right" | "bottom" | "left">;
type SizeProps = `margin${Placements}` | `padding${Placements}`;

export function getTheme<T extends DefaultTheme = DefaultTheme>(
  styles: Partial<Record<ColorProps, Colors>> &
    Partial<Record<SizeProps, Sizes>>,
) {
  return ({ theme }: { theme: T }) =>
    Object.keys(styles).reduce((newStyles, styleKey) => {
      if (styleKey === "color" || styleKey === "backgroundColor") {
        const styleValue = styles[styleKey]?.split(".");

        if (!styleValue) return {};

        const [channel, alpha] = styleValue as [Channels, Alphas];

        return {
          ...newStyles,
          [styleKey]: {
            text: `rgb(${theme.channel.white} / ${theme.alpha[alpha]})`,
            background: `rgb(${theme.channel.pink.lighter} / ${theme.alpha[alpha]})`,
            main: `rgb(${theme.channel.pink.base} / ${theme.alpha[alpha]})`,
            accent: `rgb(${theme.channel.pink.dark} / ${theme.alpha[alpha]})`,
          }[channel],
          [theme.media.dark]: {
            [styleKey]: {
              text: `rgb(${theme.channel.black} / ${theme.alpha[alpha]})`,
              background: `rgb(${theme.channel.pink.darker} / ${theme.alpha[alpha]})`,
              main: null,
              accent: `rgb(${theme.channel.pink.lighter} / ${theme.alpha[alpha]})`,
            }[channel],
          },
        };
      }

      const styleValue = styles[styleKey as SizeProps];

      if (!styleValue) return {};

      return {
        ...newStyles,
        [styleKey]: {
          sm: theme.size.xs,
          md: theme.size.sm,
          lg: theme.size.md,
        }[styleValue],
        [theme.media.tablet]: {
          [styleKey]: {
            sm: theme.size.sm,
            md: theme.size.md,
            lg: theme.size.lg,
          }[styleValue],
        },
        [theme.media.desktop]: {
          [styleKey]: {
            sm: theme.size.md,
            md: theme.size.lg,
            lg: theme.size.xl,
          }[styleValue],
        },
      };
    }, {});
}
export const theme = {
  channel: {
    pink: {
      lighter: "255 246 255",
      light: "255 204 255",
      base: "255 153 255",
      dark: "204 102 204",
      darker: "26 15 26",
    },
    white: "255 255 255",
    black: "51 51 51",
  },
  alpha: {
    primary: 1,
    secondary: 0.6,
    tertiary: 0.2,
    backdrop: 0.8,
    shadow: 0.16,
    opaque: 0,
  },
  size: {
    x6s: 0,
    x5s: 1,
    x4s: 2,
    x3s: "0.25rem",
    x2s: "0.5rem",
    xs: "0.75rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2.5rem",
    xl: "4rem",
    x2l: "6.5rem",
    x3l: "10.5rem",
    x4l: 272,
    x5l: 440,
    x6l: 710,
  },
  kerning: {
    base: 1.5,
    heading: 1,
  },
  media: {
    tablet: "@media (min-width: 640px)",
    desktop: "@media (min-width: 1280px)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
} as const;

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-size: ${(p) => p.theme.size.sm};
    line-height: 1.5;
    color-scheme: light dark; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${getTheme({
      color: "text.primary",
      backgroundColor: "background.primary",
    })}
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd,
  ul,
  ol {
    margin: ${(p) => p.theme.size.x6s};
  }
  ul,
  ol {
    padding: ${(p) => p.theme.size.x6s};
    list-style: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  iframe,
  img {
    max-width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 16/9;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
