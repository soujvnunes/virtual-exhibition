import { normalize } from "polished";
import { useMemo } from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
  ThemeProviderProps,
} from "styled-components";

const FONTS = {
  sans: [
    "futura-pt",
    "system-ui",
    "-apple-system",
    "'Segoe UI'",
    "Roboto",
    "Ubuntu",
    "Cantarell",
    "Noto Sans",
    "sans-serif",
    "BlinkMacSystemFont",
    "Helvetica",
    "Arial",
    "sans-serif",
    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'",
  ].join(", "),
  serif: [
    "freight-display-pro",
    "Cambria",
    "'Hoefler Text'",
    "Utopia",
    "'Liberation Serif'",
    "'Nimbus Roman No9 L Regular'",
    "Times",
    "'Times New Roman'",
    "serif",
  ].join(", "),
};
const THEME = {
  palette: {
    main: "var(--palette-main)",
    accent: "var(--palette-accent)",
    surface: "var(--palette-surface)",
    background: "var(--palette-background)",
    text: "var(--palette-text)",
    error: "var(--palette-error)",
    warning: "var(--palette-warning)",
    success: "var(--palette-success)",
  },
  action: {
    focus: "var(--action-focus)",
    hover: "var(--action-hover)",
    disable: "var(--action-disable)",
  },
  typography: {
    sans: "var(--base-font-sans)",
    serif: "var(--base-font-serif)",
    body2: "var(--typography-body2)",
    body1: "var(--typography-body1)",
    subtitle: "var(--typography-subtitle)",
    title: "var(--typography-title)",
    headline: "var(--typography-headline)",
  },
  media: {
    md: "@media screen and (min-width: 40rem)",
    lg: "@media screen and (min-width: 80rem)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
  spacing: {
    2: "var(--base-spacing-02)",
    4: "var(--base-spacing-04)",
    8: "var(--base-spacing-08)",
    12: "var(--base-spacing-12)",
    16: "var(--base-spacing-16)",
    24: "var(--base-spacing-24)",
    32: "var(--base-spacing-32)",
    48: "var(--base-spacing-48)",
    96: "var(--base-spacing-96)",
  },
  grid: {
    padding: "var(--grid-padding)",
    margin: "var(--grid-margin)",
  },
} as const;
const GlobalStyleFactory = createGlobalStyle(({ theme }) => ({
  ...normalize()[0],
  ...normalize()[1],
  ":root": {
    "--base-spacing-02": "0.125rem",
    "--base-spacing-04": "0.25rem",
    "--base-spacing-08": "0.5rem",
    "--base-spacing-12": "0.75rem",
    "--base-spacing-16": "1rem",
    "--base-spacing-20": "1.25rem",
    "--base-spacing-24": "1.5rem",
    "--base-spacing-32": "2rem",
    "--base-spacing-40": "2.5rem",
    "--base-spacing-44": "2.75rem",
    "--base-spacing-48": "3rem",
    "--base-spacing-56": "3.5rem",
    "--base-spacing-64": "4rem",
    "--base-spacing-96": "6rem",
    "--base-font-sans": FONTS.sans,
    "--base-font-serif": FONTS.serif,
    "--base-color-pink-200": "255 245 255",
    "--base-color-pink-300": "255 224 255",
    "--base-color-pink-400": "255 204 255",
    "--base-color-pink-500": "255 153 255",
    "--base-color-pink-600": "204 102 204",
    "--base-color-pink-700": "68 34 68",
    "--base-color-pink-800": "26 15 26",
    "--base-color-gray-100": "255 255 255",
    "--base-color-gray-900": "51 51 51",
    "--base-color-red-500": "255 51 51",
    "--base-color-red-600": "204 0 0",
    "--base-color-blue-500": "51 153 255",
    "--base-color-blue-600": "0 102 187",
    "--base-color-yellow-500": "255 238 170",
    "--base-color-yellow-600": "204 204 119",
    "--base-alpha-focus": "1",
    "--base-alpha-hover": "0.6",
    "--base-alpha-disable": "0.4",
  },
  html: {
    "--palette-main": "var(--base-color-pink-500)",
    "--palette-accent": "var(--base-color-pink-400)",
    "--palette-surface": "var(--base-color-pink-300)",
    "--palette-background": "var(--base-color-pink-200)",
    "--palette-text": "var(--base-color-gray-100)",
    "--palette-error": "var(--base-color-red-600)",
    "--palette-warning": "var(--base-color-yellow-600)",
    "--palette-success": "var(--base-color-blue-600)",
    "--action-focus": "1",
    "--action-hover": "0.6",
    "--action-disable": "0.4",
    [theme.media.dark]: {
      "--palette-accent": "var(--base-color-pink-600)",
      "--palette-surface": "var(--base-color-pink-700)",
      "--palette-background": "var(--base-color-pink-800)",
      "--palette-text": "var(--base-color-gray-900)",
      "--palette-error": "var(--base-color-red-500)",
      "--palette-warning": "var(--base-color-yellow-500)",
      "--palette-success": "var(--base-color-blue-500)",
    },
    "--typography-body2": "var(--base-spacing-12)",
    "--typography-body1": "var(--base-spacing-16)",
    "--typography-subtitle": "var(--base-spacing-20)",
    "--typography-title": "var(--base-spacing-40)",
    "--typography-headline": "var(--base-spacing-48)",
    "--grid-padding": "--base-spacing-08",
    "--grid-margin": "var(--base-spacing-16)",
    [theme.media.md]: {
      "--typography-title": "var(--base-spacing-44)",
      "--typography-headline": "var(--base-spacing-56)",
      "--grid-padding": "--base-spacing-12",
      "--grid-margin": "var(--base-spacing-24)",
    },
    [theme.media.lg]: {
      "--typography-title": "var(--base-spacing-48)",
      "--typography-headline": "var(--base-spacing-64)",
      "--grid-padding": "--base-spacing-16",
      "--grid-margin": "var(--base-spacing-32)",
    },
  },
  body: {
    margin: 0,
    textRendering: "optimizeLegibility",
    textSizeAdjust: "100%",
    lineHeight: "1.5em",
    fontSize: theme.typography.body1,
    fontFamily: theme.typography.sans,
    backgroundColor: theme.palette.background,
    color: theme.palette.text,
    "-webkit-font-smoothing": "auto",
    "-moz-osx-font-smoothing": "auto",
    [theme.media.dark]: {
      colorScheme: "dark",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
  },
}));

function GlobalStyle({
  children,
}: Omit<ThemeProviderProps<DefaultTheme>, "theme">) {
  const theme = useMemo(() => THEME, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleFactory />
      {children}
    </ThemeProvider>
  );
}

export default Object.assign(GlobalStyle, { THEME });
