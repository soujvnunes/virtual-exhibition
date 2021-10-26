const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "media",
  theme: {
    extend: {},
    screens: {
      sm: "30rem",
      md: "60rem",
      lg: "90rem",
      xl: "120rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      main: "#39f",
      accent: "#fcf",
      success: "#6f3",
      warning: "#fc0",
      error: "#f33",
    },
    fontFamily: {
      sans: ["futura-pt", ...fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
