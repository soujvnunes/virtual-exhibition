const PALETTE_STATES = ["enabled", "hovered", "disabled"] as const;
const PALETTE_COLORS = [
  "primary",
  "secondary",
  "surface",
  "background",
  "text",
  "error",
  "warning",
  "success",
];
const INITIAL_THEME = {
  palette(state: typeof PALETTE_STATES[number]) {
    const renderState = {
      enabled: "var(--base-color-alpha-enabled)",
      hovered: "var(--base-color-alpha-hovered)",
      disabled: "var(--base-color-alpha-disabled)",
    }[state];
    const renderColor = PALETTE_COLORS.reduce((acc, cur) => {
      return {
        ...acc,
        [cur]:
          typeof this === "function"
            ? `rgb(var(--palette-${cur}) / ${renderState})`
            : "rgb(var(--palette-${cur})",
      };
    }, {});

    // TODO: Type-readonly this
    return renderColor;
  },
  font: {
    sans: "var(--base-font-sans)",
    serif: "var(--base-font-serif)",
  },
  typography: {
    sm: "var(--base-spacing-sm)",
    md: "var(--base-spacing-md)",
    lg: "var(--base-spacing-lg)",
    xl: "var(--base-spacing-x3l)",
    x2l: "var(--base-spacing-x4l)",
    x3l: "var(--base-spacing-x5l)",
    x4l: "var(--base-spacing-x6l)",
    x5l: "var(--base-spacing-x7l)",
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
} as const;

export default INITIAL_THEME;
