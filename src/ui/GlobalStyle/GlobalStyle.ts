import { normalize } from "polished";
import { createGlobalStyle, css } from "styled-components";
import { token as g } from "utils";

export default createGlobalStyle`${css`
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
    ${g("dark")} {
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
    --text-subhead: var(--base-size-40);
    --text-headline: var(--base-size-48);
    --grid-padding: var(--base-size-08);
    --grid-margin: var(--base-size-16);
    ${g("md")} {
      --text-subhead: var(--base-size-44);
      --text-headline: var(--base-size-56);
      --grid-padding: var(--base-size-12);
      --grid-margin: var(--base-size-24);
    }
    ${g("lg")} {
      --text-subhead: var(--base-size-48);
      --text-headline: var(--base-size-64);
      --grid-padding: var(--base-size-16);
      --grid-margin: var(--base-size-32);
    }
  }
  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    box-sizing: border-box;
    ${g("dark")} {
      color-scheme: dark;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  body {
    line-height: 1.5em;
    font-size: ${g("body")};
    font-family: ${g("sans")};
    background-color: rgb(${g("default")});
    color: rgb(${g("text")});
  }
`}`;
