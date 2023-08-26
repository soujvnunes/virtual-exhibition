import { createGlobalStyle } from "styled-components";

export const theme = {
  channel: {
    background: "var(--channel-background)",
    foreground: "var(--channel-foreground)",
    main: "var(--channel-main)",
    accent: "var(--channel-accent)",
    success: "var(--channel-success)",
    error: "var(--channel-error)",
    warning: "var(--channel-warning)",
  },
  alpha: {
    primary: "var(--alpha-primary)",
    backdrop: "var(--alpha-backdrop)",
    secondary: "var(--alpha-secondary)",
    tertiary: "var(--alpha-tertiary)",
    shadow: "var(--alpha-shadow)",
    opaque: "var(--alpha-opaque)",
  },
  size: {
    x3s: "var(--size-x3s)",
    x2s: "var(--size-x2s)",
    xs: "var(--size-xs)",
    sm: "var(--size-sm)",
    md: "var(--size-md)",
    lg: "var(--size-lg)",
    xl: "var(--size-xl)",
    x2l: "var(--size-x2l)",
    x3l: "var(--size-x3l)",
    x4l: "var(--size-x4l)",
    x5l: "var(--size-x5l)",
    x6l: "var(--size-x6l)",
  },
  kerning: {
    tighter: "var(--kerning-tighter)",
    tight: "var(--kerning-tight)",
    wide: "var(--kerning-wide)",
  },
  weight: {
    regular: "var(--weight-regular)",
    bold: "var(--weight-bold)",
    bolder: "var(--weight-bolder)",
    heavy: "var(--weight-heavy)",
  },
  media: {
    desktop: "@media (min-width: 1024px)",
    dark: "@media (prefers-color-scheme: dark)",
    reduce: "@media (prefers-reduced-motion: reduce)",
  },
} as const;
export const CSSThemeVars = createGlobalStyle`
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

    --size-x3s: 0.5rem;
    --size-x2s: var(--size-x3s);
    --size-xs: 1rem;
    --size-sm: var(--size-xs);
    --size-md: 1.5rem;
    --size-lg: 1.75rem;
    --size-xl: 2rem;
    --size-x2l: 2.25rem;
    --size-x3l: 2.5rem;
    --size-x4l: 2.75rem;
    --size-x5l: 3rem;
    --size-x6l: 3.25rem;

    --kerning-tighter: 0.75;
    --kerning-tight: 1;
    --kerning-wide: 1.5;

    --weight-regular: 400;
    --weight-bold: 500;
    --weight-bolder: 600;
    --weight-heavy: 700;
    ${(props) => props.theme.media.dark} {
      --channel-background: 26 15 26;
      --channel-foreground: 255 255 255;
      --channel-accent: 255 204 255; 
      --channel-success: 51 153 255;
      --channel-error: 204 0 0;
      --channel-warning: 204 204 119;
    }
    ${(props) => props.theme.media.desktop} {
      --size-x3s: 0.75rem;
      --size-x2s: 1rem;
      --size-xs: 1.5rem;
      --size-sm: 2rem;
      --size-md: var(--size-sm);
      --size-lg: 2.25rem;
      --size-xl: 3rem;
      --size-x2l: 3.25rem;
      --size-x3l: 4rem;
      --size-x4l: 4.25rem;
      --size-x5l: 5rem;
      --size-x6l: 5.25rem;
    }
  }
`;
