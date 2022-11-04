import { css } from "styled-components";
import { cssVarsSizes } from "./GlobalStyle.util";

export const cssReset = css`
  html {
    box-sizing: border-box;
    line-height: 1.5;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  ul,
  ol {
    padding: 0px;
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
    margin: 0px;
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
export const cssVars = css`
  :root {
    /** ALPHA */
    --alpha-primary: 1;
    --alpha-secondary: 0.6;
    --alpha-tertiary: 0.4;
    --alpha-quaternary: 0.2;
    --alpha-quinary: 0.15;
    /** COLOR */
    --color-text: 51 51 51;
    --color-background: 255 245 255;

    --color-main: 255 153 255;
    --color-accent: 204 102 204;

    --color-success: 102 255 51;
    --color-info: 0 102 187;
    --color-alert: 204 204 119;
    --color-error: 204 0 0;
    ${(p) => p.theme.media.dark} {
      --color-text: 255 255 255;
      --color-background: 26 15 26;

      --color-accent: 255 204 255;

      --color-success: 0 153 0;
      --color-info: 51 153 255;
      --color-alert: 255 238 170;
      --color-error: 255 51 51;
    }
    /** SIZE */
    ${cssVarsSizes}
  }
`;
export const cssGlobals = css`
  body {
    font-size: ${(p) => p.theme.size(16, { pxInRem: true })};
    background-color: ${(p) => p.theme.color.background()};
    color: ${(p) => p.theme.color.text()};
    color-scheme: light dark;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    text-size-adjust: 100%;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    ${(p) => p.theme.media.dark} {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;
