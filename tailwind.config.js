module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}", "./public/**/*.html"],
  darkMode: "[data-mode='dark']",
  theme: {
    extend: {
      colors: {
        fuchsia: {
          950: "#210022",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export {};
