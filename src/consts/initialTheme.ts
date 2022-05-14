const INITIAL_THEME = {
  borderRadius: "var(--size-md)",
  borderWidth: "var(--size-1)",
  palette: {
    inherit: "var(--color-inherit)",
    current: "var(--color-current)",
    transparent: "var(--color-transparent)",
    light: "rgb(var(--gray-100) / var(--color-alpha, 1))",
    dark: "rgb(var(--gray-900) / var(--color-alpha, 1))",
    main: {
      xlight: "rgb(var(--pink-200) / var(--color-alpha, 1))",
      lighter: "rgb(var(--pink-300) / var(--color-alpha, 1))",
      light: "rgb(var(--pink-400) / var(--color-alpha, 1))",
      DEFAULT: "rgb(var(--pink-500) / var(--color-alpha, 1))",
      dark: "rgb(var(--pink-600) / var(--color-alpha, 1))",
      darker: "rgb(var(--pink-700) / var(--color-alpha, 1))",
      xdark: "rgb(var(--pink-800) / var(--color-alpha, 1))",
    },
    error: {
      DEFAULT: "rgb(var(--red-500) / var(--color-alpha, 1))",
      dark: "rgb(var(--red-600) / var(--color-alpha, 1))",
    },
    warning: {
      DEFAULT: "rgb(var(--yellow-500) / var(--color-alpha, 1))",
      dark: "rgb(var(--yellow-600) / var(--color-alpha, 1))",
    },
    success: {
      DEFAULT: "rgb(var(--blue-500) / var(--color-alpha, 1))",
      dark: "rgb(var(--blue-600) / var(--color-alpha, 1))",
    },
  },
  typography: {
    sm: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--size-sm)",
      lineHeight: "var(--kerning-flow)",
    },
    md: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--size-md)",
      lineHeight: "var(--kerning-flow)",
    },
    lg: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--size-lg)",
      lineHeight: "var(--kerning-flow)",
    },
    xl: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--size-x3l)",
      lineHeight: "var(--kerning-heading)",
    },
    x2l: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--size-x4l)",
      lineHeight: "var(--kerning-heading)",
    },
    x3l: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--size-x5l)",
      lineHeight: "var(--kerning-heading)",
    },
    x4l: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--size-x6l)",
      lineHeight: "var(--kerning-heading)",
    },
    x5l: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--size-x7l)",
      lineHeight: "var(--kerning-heading)",
    },
  },
  media: {
    md: "@media screen and (min-width: 40rem)",
    lg: "@media screen and (min-width: 80rem)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
  spacing: {
    auto: "var(--size-auto)",
    0: "var(--size-0)",
    1: "var(--size-1)",
    x3s: "var(--size-x3s)",
    x2s: "var(--size-x2s)",
    xs: "var(--size-xs)",
    sm: "var(--size-sm)",
    md: "var(--size-md)",
    lg: "var(--size-xl)",
    xl: "var(--size-x2l)",
    x2l: "var(--size-x5l)",
    x3l: "var(--size-x8l)",
  },
} as const;

export default INITIAL_THEME;
