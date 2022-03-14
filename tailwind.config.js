const { withAlpha } = require("./tailwind.utils");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}", "./public/**/*.html"],
  darkMode: "media",
  theme: {
    extend: {},
    colors: {
      inherit: "var(--color-inherit)",
      current: "var(--color-current)",
      transparent: "var(--color-transparent)",
      light: withAlpha("var(--gray-100)"),
      dark: withAlpha("var(--gray-900)"),
      main: {
        xlight: withAlpha("var(--pink-200)"),
        lighter: withAlpha("var(--pink-300)"),
        light: withAlpha("var(--pink-400)"),
        DEFAULT: withAlpha("var(--pink-500)"),
        dark: withAlpha("var(--pink-600)"),
        darker: withAlpha("var(--pink-700)"),
        xdark: withAlpha("var(--pink-800)"),
      },
      error: {
        DEFAULT: withAlpha("var(--red-500)"),
        dark: withAlpha("var(--red-600)"),
      },
      warning: {
        DEFAULT: withAlpha("var(--yellow-500)"),
        dark: withAlpha("var(--yellow-600)"),
      },
      success: {
        DEFAULT: withAlpha("var(--blue-500)"),
        dark: withAlpha("var(--blue-600)"),
      },
    },
    fontFamily: {
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
    },
    fontSize: {
      sm: ["var(--size-sm)", { lineHeight: "var(--kerning-paragraph)" }],
      md: ["var(--size-md)", { lineHeight: "var(--kerning-paragraph)" }],
      lg: ["var(--size-lg)", { lineHeight: "var(--kerning-paragraph)" }],
      xl: ["var(--size-x3l)", { lineHeight: "var(--kerning-heading)" }],
      x2l: ["var(--size-x4l)", { lineHeight: "var(--kerning-heading)" }],
      x3l: ["var(--size-x5l)", { lineHeight: "var(--kerning-heading)" }],
      x4l: ["var(--size-x6l)", { lineHeight: "var(--kerning-heading)" }],
      x5l: ["var(--size-x7l)", { lineHeight: "var(--kerning-heading)" }],
    },
    screens: {
      md: "40rem",
      lg: "80rem",
    },
    spacing: {
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
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
