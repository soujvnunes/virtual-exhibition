const { red, blue, fuchsia } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
const sm = "30rem";

module.exports = {
  purge: [],
  darkMode: "media",
  theme: {
    extend: {},
    screens: {
      xs: { max: sm },
      sm,
      md: "60rem",
      lg: "90rem",
      xl: "120rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      error: red,
      primary: blue,
      secondary: fuchsia,
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
