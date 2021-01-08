export default function Theme(prefersDarkMode) {
  return {
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#EA2934",
      },
      secondary: {
        main: "#3F9CF9",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: "1rem",
        },
      },
    },
  };
}
