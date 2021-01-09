import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { HEADING_TYPE } from "./constants";

export function toKebabCase({ value = null } = {}) {
  return String(value)
    .toLowerCase()
    .replace(/[\s|']/g, (match) => ({ " ": "-", "'": "_" }[match]));
}

export function theme({ type } = {}) {
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type,
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
        h2: { ...HEADING_TYPE, textTransform: "uppercase" },
        button: HEADING_TYPE,
      },
    }),
  );
}
