import { createGlobalStyle } from "styled-components";

export const theme = {
  channel: {
    pink: {
      lighter: "",
      light: "",
      base: "",
      dark: "",
      darker: "",
    },
    white: "",
    black: "",
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
    0: 0,
    1: 1,
    2: 2,
    4: 4,
    8: 8,
    xs: 12,
    sm: 16,
    md: 24,
    lg: 40,
    xl: 64,
  },
  media: {
    desktop: "@media (min-width: 1024px)",
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
    background-color: ${(p) => p.theme.color.background()};
    color: ${(p) => p.theme.color.text()};
    font-size: ${(p) => p.theme.size(16, { pxInRem: true })};
    line-height: 1.5;
    color-scheme: light dark;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    margin: 0px;
  }
  ul,
  ol {
    padding: 0px;
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
