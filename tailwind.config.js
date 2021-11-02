const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "media",
  theme: {
    extend: {
      margin: {
        gutter: "1em",
      },
    },
    screens: {
      sm: "30rem",
      md: "60rem",
      lg: "90rem",
      xl: "120rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      main: {
        DEFAULT: "#39f",
        dark: "#039",
      },
      accent: {
        DEFAULT: "#fcf",
        dark: "#939",
      },
      success: {
        DEFAULT: "#6f3",
        dark: "#090",
      },
      warning: {
        DEFAULT: "#fc0",
        dark: "#960",
      },
      error: {
        DEFAULT: "#f33",
        dark: "#900",
      },
      black: "#333",
      gray: "#f5f5f5",
      white: "#fff",
      a11y: "#ff0",
    },
    fontFamily: {
      sans: ["futura-pt", ...fontFamily.sans],
    },
    fontSize: {
      "075": "0.75rem",
      100: "1rem",
      125: "1.25rem",
      150: "1.5rem",
      200: "2rem",
      225: "2.25rem",
      250: "2.5rem",
      275: "2.75rem",
      325: "3.25rem",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundOpacity: ["active"],
      textOpacity: ["focus"],
      fontSmoothing: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
