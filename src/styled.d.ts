import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: "var(--color-primary)";
      secondary: "var(--color-secondary)";
      tertiary: "var(--color-tertiary)";
      background: "var(--color-background)";
      foreground: "var(--color-foreground)";
      error: "var(--color-error)";
      warning: "var(--color-warning)";
      success: "var(--color-success)";
    };
    action: {
      focus: "var(--action-focus)";
      default: "var(--action-default)";
      hover: "var(--action-hover)";
      disable: "var(--action-disable)";
    };
    text: {
      sans: "var(--type-sans)";
      serif: "var(--type-serif)";
      overline: "var(--text-overline)";
      body: "var(--text-body)";
      subtitle: "var(--text-subtitle)";
      subhead: "var(--text-subhead)";
      headline: "var(--text-headline)";
    };
    media: {
      md: "@media (min-width: 40rem)";
      lg: "@media (min-width: 80rem)";
      dark: "@media (prefers-color-scheme: dark)";
      motion: "@media (prefers-reduced-motion: no-preference)";
    };
    size: {
      2: "var(--size-02)";
      4: "var(--size-04)";
      8: "var(--size-08)";
      12: "var(--size-12)";
      16: "var(--size-16)";
      20: "var(--size-20)";
      24: "var(--size-24)";
      32: "var(--size-32)";
      40: "var(--size-40)";
      44: "var(--size-44)";
      48: "var(--size-48)";
      56: "var(--size-56)";
      64: "var(--size-64)";
      96: "var(--size-96)";
    };
    grid: {
      padding: "var(--grid-padding)";
      margin: "var(--grid-margin)";
    };
  }
}