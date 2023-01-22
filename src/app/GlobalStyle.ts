import { createGlobalStyle } from "styled-components";
import { getResponsiveTheme } from "utils/theme";

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
    line-height: ${({ theme }) => theme.kerning.DEFAULT};
    color-scheme: light dark; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${getResponsiveTheme({
      color: "text.primary",
      backgroundColor: "background.primary",
      fontSize: "md",
    })}
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
    margin: ${({ theme }) => theme.value[0]};
  }
  ul,
  ol {
    padding: ${({ theme }) => theme.value[0]};
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
