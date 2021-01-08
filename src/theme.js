import { createMuiTheme } from "@material-ui/core/styles";

const fontFamily = ["Georgia, 'Times New Roman', Times, serif"].join(", ");

// eslint-disable-next-line import/prefer-default-export
export const theme = createMuiTheme({
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
    h2: {
      fontFamily,
    },
    button: {
      fontFamily,
      fontWeight: 900,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 24,
        minHeight: 48,
        letterSpacing: 2.618,
      },
      outlined: {
        padding: "0 24px",
      },
      endIcon: {
        marginRight: -12,
      },
      iconSizeMedium: {
        "& > *:first-child": {
          fontSize: 24,
        },
      },
    },
    MuiIconButton: {
      edgeStart: {
        marginRight: "auto",
      },
    },
    MuiToolbar: {
      regular: {
        height: 64,
      },
    },
  },
});
