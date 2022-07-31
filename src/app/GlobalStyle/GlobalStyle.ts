import { createGlobalStyle, css } from "styled-components";
import { getToken as g } from "utils";

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
    ${g("dark")} {
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
    ${g("md")} {
      --text-subhead: var(--size-44);
      --text-headline: var(--size-56);
      --grid-padding: var(--size-12);
      --grid-margin: var(--size-24);
    }
    ${g("lg")} {
      --text-subhead: var(--size-48);
      --text-headline: var(--size-64);
      --grid-padding: var(--size-16);
      --grid-margin: var(--size-32);
    }
  }
`;
const globals = css`
  body {
    line-height: 1.5em;
    font-size: ${g("body")};
    font-family: ${g("sans")};
    background-color: rgb(${g("background")});
    color: rgb(${g("foreground")});
    color-scheme: light;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    ${g("dark")} {
      color-scheme: dark;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;

export default createGlobalStyle`${reset}${vars}${globals}`;
