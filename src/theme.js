import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const font = {
  fontFamily: ["Georgia, 'Times New Roman', Times, serif"].join(", "),
  fontWeight: 900,
};

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#EA2934",
    },
    secondary: {
      main: "#3F9CF9",
    },
  },
  typography: {
    fontFamily: [
      "'Lucida Sans Unicode', -apple-system, BlinkMacSystemFont,	'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans'",
    ].join(", "),
    h2: { ...font, textTransform: "uppercase" },
    button: font,
  },
});

theme = responsiveFontSizes(theme);

// eslint-disable-next-line import/prefer-default-export
export { theme };
