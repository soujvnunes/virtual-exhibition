import { createGlobalStyle } from "styled-components";

const CSSPreflight = createGlobalStyle`
  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-size: 1rem;
    line-height: ${({ theme }) => theme.kerning.wide};
    color: rgb(${({ theme }) => theme.channel.foreground});
    background-color: rgb(${({ theme }) => theme.channel.background});
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
  a {
    text-decoration: none;
  }
  iframe,
  img {
    max-width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 16/9;
    vertical-align: middle;
  }
  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    text-transform: none;
    -webkit-appearance: button;
    appearance: button;
    background-color: transparent;
    background-image: none;
    cursor: pointer;
    border-width: unset;
    border-style: unset;
    border-color: unset;
    border-image: unset;
  }
`;

export default CSSPreflight;
