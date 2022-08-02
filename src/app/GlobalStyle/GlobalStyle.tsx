import { useMemo } from "react";
import {
  createGlobalStyle,
  css,
  DefaultTheme,
  ThemeProvider,
  ThemeProviderProps,
} from "styled-components";
import { getToken } from "utils";

/* CSS Reset adapted from https://dev.to/hankchizljaw/a-modern-css-reset-6p3 */
const reset = css`
  html {
    box-sizing: border-box;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  ul,
  ol {
    padding: 0;
    list-style: none;
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
    margin: 0;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  img {
    max-width: 100%;
    display: block;
  }
  article > * + * {
    margin-left: 1em;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
const vars = css`
  :root {
    --color-primary: var(--channel-pink-500);
    --color-secondary: var(--channel-pink-600);
    --color-tertiary: var(--channel-pink-300);
    --color-background: var(--channel-pink-200);
    --color-foreground: var(--channel-gray-900);
    --color-error: var(--channel-red-600);
    --color-warning: var(--channel-yellow-600);
    --color-success: var(--channel-blue-600);
    --action-focus: var(--alpha-focus);
    --action-default: var(--alpha-default);
    --action-hover: var(--alpha-hover);
    --action-disable: var(--alpha-disable);
    ${getToken("media.dark")} {
      --color-secondary: var(--channel-pink-400);
      --color-tertiary: var(--channel-pink-700);
      --color-background: var(--channel-pink-800);
      --color-foreground: var(--channel-gray-100);
      --color-error: var(--channel-red-500);
      --color-warning: var(--channel-yellow-500);
      --color-success: var(--channel-blue-500);
    }
    --text-overline: var(--size-12);
    --text-body: var(--size-16);
    --text-subtitle: var(--size-20);
    --text-subhead: var(--size-40);
    --text-headline: var(--size-48);
    --grid-padding: var(--size-08);
    --grid-margin: var(--size-16);
    ${getToken("media.md")} {
      --text-subhead: var(--size-44);
      --text-headline: var(--size-56);
      --grid-padding: var(--size-12);
      --grid-margin: var(--size-24);
    }
    ${getToken("media.lg")} {
      --text-subhead: var(--size-48);
      --text-headline: var(--size-64);
      --grid-padding: var(--size-16);
      --grid-margin: var(--size-32);
    }
  }
`;
const globals = css`
  body {
    font-size: ${getToken("text.body")};
    font-family: ${getToken("text.sans")};
    background-color: rgb(${getToken("color.background")});
    color: rgb(${getToken("color.foreground")});
    color-scheme: light;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    ${getToken("media.dark")} {
      color-scheme: dark;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;
const GlobalStyledFactory = createGlobalStyle`${reset}${vars}${globals}`;

export const theme = {
  color: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    tertiary: "var(--color-tertiary)",
    background: "var(--color-background)",
    foreground: "var(--color-foreground)",
    error: "var(--color-error)",
    warning: "var(--color-warning)",
    success: "var(--color-success)",
  },
  action: {
    focus: "var(--action-focus)",
    default: "var(--action-default)",
    hover: "var(--action-hover)",
    disable: "var(--action-disable)",
  },
  text: {
    sans: "var(--type-sans)",
    serif: "var(--type-serif)",
    overline: "var(--text-overline)",
    body: "var(--text-body)",
    subtitle: "var(--text-subtitle)",
    subhead: "var(--text-subhead)",
    headline: "var(--text-headline)",
  },
  media: {
    md: "@media (min-width: 40rem)",
    lg: "@media (min-width: 80rem)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
  size: {
    2: "var(--size-02)",
    4: "var(--size-04)",
    8: "var(--size-08)",
    12: "var(--size-12)",
    16: "var(--size-16)",
    20: "var(--size-20)",
    24: "var(--size-24)",
    32: "var(--size-32)",
    40: "var(--size-40)",
    44: "var(--size-44)",
    48: "var(--size-48)",
    56: "var(--size-56)",
    64: "var(--size-64)",
    96: "var(--size-96)",
  },
  grid: {
    padding: "var(--grid-padding)",
    margin: "var(--grid-margin)",
  },
} as const;

export default function GlobalStyle({
  children,
}: Omit<ThemeProviderProps<DefaultTheme>, "theme">) {
  const themeMemo = useMemo(() => theme, []);

  return (
    <ThemeProvider theme={themeMemo}>
      <GlobalStyledFactory />
      {children}
    </ThemeProvider>
  );
}
