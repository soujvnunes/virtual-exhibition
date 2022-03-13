const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        motion: {
          raw: "@media (prefers-reduced-motion: no-preference)",
        },
      },
    },
    screens: {
      md: "40rem",
      lg: "80rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      main: {
        light: "#FFCCFF",
        DEFAULT: "#FF99FF",
        dark: "#CC66CC",
      },
      accent: {
        DEFAULT: "#FFFFFF",
      },
      black: "#0A0A0A",
      gray: "#f5f5f5",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["futura-pt", ...fontFamily.sans],
    },
    spacing: {
      x3s: "0.125rem",
      x2s: "0.25rem",
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      x2l: "3rem",
      x3l: "8rem",
      x4l: "20rem",
      x5l: "40rem",
      x6l: "80rem",
    },
    fontSize: {
      75: "0.75rem",
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
