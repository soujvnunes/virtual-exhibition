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
    line-height: 1.5;
    color-scheme: light dark; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${getResponsiveTheme({
      color: "text.primary",
      backgroundColor: "background.primary",
      fontSize: "typography.body2",
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
    margin: ${({ theme }) => theme.spacing.x6s};
  }
  ul,
  ol {
    padding: ${({ theme }) => theme.spacing.x6s};
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
