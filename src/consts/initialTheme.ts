const INITIAL_THEME = {
  palette: {
    main: "var(--palette-main)",
    accent: "var(--palette-accent)",
    surface: "var(--palette-surface)",
    background: "var(--palette-background)",
    text: "var(--palette-text)",
    error: "var(--palette-error)",
    warning: "var(--palette-warning)",
    success: "var(--palette-success)",
  },
  action: {
    primary: "var(--base-alpha-primary)",
    secondary: "var(--base-alpha-secondary)",
    tertiary: "var(--base-alpha-tertiary)",
  },
  typography: {
    sans: "var(--base-font-sans)",
    serif: "var(--base-font-serif)",
    span: "var(--typography-span)",
    p: "var(--typography-p)",
    h4: "var(--typography-h4)",
    h3: "var(--typography-h3)",
    h2: "var(--typography-h2)",
  },
  media: {
    md: "@media screen and (min-width: 40rem)",
    lg: "@media screen and (min-width: 80rem)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
  spacing: {
    auto: "var(--base-spacing-auto)",
    0: "var(--base-spacing-0)",
    1: "var(--base-spacing-1)",
    x3s: "var(--base-spacing-x3s)",
    x2s: "var(--base-spacing-x2s)",
    xs: "var(--base-spacing-xs)",
    sm: "var(--base-spacing-sm)",
    md: "var(--base-spacing-md)",
    lg: "var(--base-spacing-xl)",
    xl: "var(--base-spacing-x2l)",
    x2l: "var(--base-spacing-x5l)",
    x3l: "var(--base-spacing-x8l)",
  },
  grid: {
    padding: "--grid-padding",
    margin: "--grid-margin",
  },
} as const;

export default INITIAL_THEME;
