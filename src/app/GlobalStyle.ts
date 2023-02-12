import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --alpha-primary: 1;
    --alpha-backdrop: 0.61;
    --alpha-secondary: 0.4;
    --alpha-tertiary: 0.2;
    --alpha-shadow: 0.16;
    --alpha-opaque: 0.09;

    --channel-background: 255 246 255;
    --channel-foreground: 51 51 51;
    --channel-main: 255 153 255;
    --channel-accent: 204 102 204; 
    --channel-success: 0 102 187;
    --channel-error: 255 51 51;
    --channel-warning: 255 238 170;

    --sizing-sm: 8px;
    --sizing-md: 1rem;
    --sizing-lg: 1rem;
    --sizing-xl: 1.5rem;
    --sizing-x2l: 1.75rem;
    --sizing-x3l: 2rem;
    --sizing-x4l: 2.25rem;
    --sizing-x5l: 2.5rem;
    --sizing-x6l: 2.75rem;

    --grid-padding: 8px;
    --grid-margin: 16px;
    --grid-area: 1538px;

    --kerning-tight: 1;
    --kerning-wide: 1.5;

    --weight-regular: 400;
    --weight-bold: 500;
    --weight-bolder: 600;
    --weight-heavy: 700;
    ${({ theme }) => theme.media.dark} {
      --channel-background: 26 15 26;
      --channel-foreground: 255 255 255;
      --channel-accent: 255 204 255; 
      --channel-success: 51 153 255;
      --channel-error: 204 0 0;
      --channel-warning: 204 204 119;
    }
    ${({ theme }) => theme.media.md} {
      --sizing-sm: 10px;
      --sizing-lg: 1.25rem;
      --sizing-xl: 1.75rem;
      --sizing-x2l: 2rem;
      --sizing-x3l: 2.5rem;
      --sizing-x4l: 2.75rem;
      --sizing-x5l: 2.25rem;
      --sizing-x6l: 3.5rem;
      
      --grid-padding: 12px;
      --grid-margin: 24px;
    }
    ${({ theme }) => theme.media.lg} {
      --sizing-sm: 12px;
      --sizing-lg: 1.5rem;
      --sizing-xl: 2rem;
      --sizing-x2l: 2.25rem;
      --sizing-x3l: 3rem;
      --sizing-x4l: 3.25rem;
      --sizing-x5l: 4rem;
      --sizing-x6l: 4.25rem;

      --grid-padding: 16px;
      --grid-margin: 32px;
    }
  }
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
    font-size: ${({ theme }) => theme.sizing.md};
    line-height: ${({ theme }) => theme.kerning.wide};
    color-scheme: light dark; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
