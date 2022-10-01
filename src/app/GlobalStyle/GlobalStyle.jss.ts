import { createGlobalStyle, css } from "styled-components";
import { cssVarColors, cssVarsSizes } from "./GlobalStyle.util";

export const CssReset = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    text-size-adjust: 100%;
    color-scheme: light dark;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
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
export const CssVars = createGlobalStyle<{ cssVars: string }>`
  :root {
    ${(props) => props.cssVars}
  }
`;
export const cssGlobals = css`
  body {
    font-size: ${(p) => p.theme.size(16, { pxInRem: true })};
    background-color: ${(p) => p.theme.color.background()};
    color: ${(p) => p.theme.color.text()};
  }
`;
