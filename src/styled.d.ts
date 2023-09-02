import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    channel: {
      background: "var(--channel-background)";
      foreground: "var(--channel-foreground)";
      main: "var(--channel-main)";
      accent: "var(--channel-accent)";
      success: "var(--channel-success)";
      error: "var(--channel-error)";
      warning: "var(--channel-warning)";
    };
    alpha: {
      primary: "var(--alpha-primary)";
      backdrop: "var(--alpha-backdrop)";
      secondary: "var(--alpha-secondary)";
      tertiary: "var(--alpha-tertiary)";
      shadow: "var(--alpha-shadow)";
      opaque: "var(--alpha-opaque)";
    };
    size: {
      x3s: "var(--size-x3s)";
      x2s: "var(--size-x2s)";
      xs: "var(--size-xs)";
      sm: "var(--size-sm)";
      md: "var(--size-md)";
      lg: "var(--size-lg)";
      xl: "var(--size-xl)";
      x2l: "var(--size-x2l)";
      x3l: "var(--size-x3l)";
      x4l: "var(--size-x4l)";
      x5l: "var(--size-x5l)";
      x6l: "var(--size-x6l)";
    };
    kerning: {
      tighter: "var(--kerning-tighter)";
      tight: "var(--kerning-tight)";
      wide: "var(--kerning-wide)";
    };
    weight: {
      regular: "var(--weight-regular)";
      bold: "var(--weight-bold)";
      bolder: "var(--weight-bolder)";
      heavy: "var(--weight-heavy)";
    };
    media: {
      desktop: "@media (min-width: 1024px)";
      dark: "@media (prefers-color-scheme: dark)";
      reduce: "@media (prefers-reduced-motion: reduce)";
    };
  }
}
