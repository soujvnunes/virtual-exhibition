import { createGlobalStyle, css } from "styled-components";
import { getToken } from "utils";

/* CSS Reset adapted from https://dev.to/hankchizljaw/a-modern-css-reset-6p3 */
const reset = css`
  html {
    box-sizing: border-box;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    text-size-adjust: 100%;
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
    /** ACTION */
    --action-focus: 1;
    --action-default: 0.6;
    --action-hover: 0.4;
    --action-disable: 0.2;
    /** COLOR */
    --color-primary: 255 153 255;
    --color-secondary: 204 102 204;
    --color-tertiary: 255 224 255;
    --color-background: 255 245 255;
    --color-foreground: 51 51 51;
    --color-error: 204 0 0;
    --color-warning: 204 204 119;
    --color-success: 0 102 187;
    ${getToken("media.dark")} {
      --color-secondary: 255 204 255;
      --color-tertiary: 68 34 68;
      --color-background: 26 15 26;
      --color-foreground: 255 255 255;
      --color-error: 255 51 51;
      --color-warning: 255 238 170;
      --color-success: 51 153 255;
    }
    /** SIZE */
    --size-02: 0.125rem;
    --size-04: 0.25rem;
    --size-08: 0.5rem;
    --size-12: 0.75rem;
    --size-16: 1rem;
    --size-20: 1.25rem;
    --size-24: 1.5rem;
    --size-32: 2rem;
    --size-40: 2.5rem;
    --size-44: 2.75rem;
    --size-48: 3rem;
    --size-56: 3.5rem;
    --size-64: 4rem;
    --size-96: 6rem;
    /** GRID */
    --grid-padding: var(--size-08);
    --grid-margin: var(--size-16);
    ${getToken("media.md")} {
      --grid-padding: var(--size-12);
      --grid-margin: var(--size-24);
    }
    ${getToken("media.lg")} {
      --grid-padding: var(--size-16);
      --grid-margin: var(--size-32);
    }
    /** TEXT */
    --text-overline: var(--size-12);
    --text-body: var(--size-16);
    --text-subtitle: var(--size-20);
    --text-subhead: var(--size-40);
    --text-headline: var(--size-48);
    ${getToken("media.md")} {
      --text-subhead: var(--size-44);
      --text-headline: var(--size-56);
    }
    ${getToken("media.lg")} {
      --text-subhead: var(--size-48);
      --text-headline: var(--size-64);
    }
  }
`;
const globals = css`
  body {
    font-size: ${getToken("text.body")};
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

export default GlobalStyledFactory;
