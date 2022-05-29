import { normalize } from "polished";
import { useMemo } from "react";
import {
  createGlobalStyle,
  css,
  DefaultTheme,
  ThemeProvider,
  ThemeProviderProps,
} from "styled-components";
import { getTheme as g } from "utils";

const THEME = {
  color: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    tertiary: "var(--color-tertiary)",
    default: "var(--color-default)",
    text: "var(--color-text)",
    error: "var(--color-error)",
    warning: "var(--color-warning)",
    success: "var(--color-success)",
  },
  action: {
    focus: "var(--action-focus)",
    hover: "var(--action-hover)",
    disable: "var(--action-disable)",
  },
  text: {
    sans: "var(--base-type-sans)",
    serif: "var(--base-type-serif)",
    overline: "var(--text-overline)",
    body: "var(--text-body)",
    subtitle: "var(--text-subtitle)",
    title: "var(--text-title)",
    headline: "var(--text-headline)",
  },
  media: {
    md: "@media screen and (min-width: 40rem)",
    lg: "@media screen and (min-width: 80rem)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
  size: {
    2: "var(--base-size-02)",
    4: "var(--base-size-04)",
    8: "var(--base-size-08)",
    12: "var(--base-size-12)",
    16: "var(--base-size-16)",
    24: "var(--base-size-24)",
    32: "var(--base-size-32)",
    48: "var(--base-size-48)",
    96: "var(--base-size-96)",
  },
  grid: {
    padding: "var(--grid-padding)",
    margin: "var(--grid-margin)",
  },
} as const;

const GlobalStyleFactory = createGlobalStyle`${css`
  ${normalize()}
  :root {
    --color-primary: var(--base-channel-pink-500);
    --color-secondary: var(--base-channel-pink-600);
    --color-tertiary: var(--base-channel-pink-300);
    --color-default: var(--base-channel-pink-200);
    --color-text: var(--base-channel-gray-900);
    --color-error: var(--base-channel-red-600);
    --color-warning: var(--base-channel-yellow-600);
    --color-success: var(--base-channel-blue-600);
    --action-focus: var(--base-alpha-focus);
    --action-default: var(--base-alpha-default);
    --action-hover: var(--base-alpha-hover);
    --action-disable: var(--base-alpha-disable);
    ${g("media.dark")} {
      --color-secondary: var(--base-channel-pink-400);
      --color-tertiary: var(--base-channel-pink-700);
      --color-default: var(--base-channel-pink-800);
      --color-text: var(--base-channel-gray-100);
      --color-error: var(--base-channel-red-500);
      --color-warning: var(--base-channel-yellow-500);
      --color-success: var(--base-channel-blue-500);
    }
    --text-overline: var(--base-size-12);
    --text-body: var(--base-size-16);
    --text-subtitle: var(--base-size-20);
    --text-title: var(--base-size-40);
    --text-headline: var(--base-size-48);
    --grid-padding: var(--base-size-08);
    --grid-margin: var(--base-size-16);
    ${g("media.md")} {
      --text-title: var(--base-size-44);
      --text-headline: var(--base-size-56);
      --grid-padding: var(--base-size-12);
      --grid-margin: var(--base-size-24);
    }
    ${g("media.lg")} {
      --text-title: var(--base-size-48);
      --text-headline: var(--base-size-64);
      --grid-padding: var(--base-size-16);
      --grid-margin: var(--base-size-32);
    }
  }
  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    ${g("media.dark")} {
      color-scheme: dark;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  body {
    line-height: 1.5em;
    font-size: ${g("text.body")};
    font-family: ${g("text.sans")};
    background-color: rgb(${g("color.default")});
    color: rgb(${g("color.text")});
  }
`}`;

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
