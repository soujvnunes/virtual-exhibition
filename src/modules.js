import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import {
  BAR_HEIGHT,
  HEADING_TYPE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  REDUCER_HEIGHT,
} from "./constants";

export function toKebabCase({ value = null } = {}) {
  return String(value)
    .toLowerCase()
    .replace(/[\s|']/g, (match) => ({ " ": "-", "'": "_" }[match]));
}

export function _(breakpoint = "sm down") {
  const mediaQuery = breakpoint.split(" ").map((media) => media);
  const { media, query } = { media: mediaQuery[0], query: mediaQuery[1] };

  if (query === "up") {
    return useMediaQuery(({ breakpoints }) => breakpoints.up(media));
  }

  return useMediaQuery(({ breakpoints }) => breakpoints.down(media));
}

export function theme({ type } = {}) {
  const typography = {
    fontFamily: [
      "'Lucida Sans Unicode', -apple-system, BlinkMacSystemFont,	'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans'",
    ].join(", "),
    setValue(props, value) {
      while (props.length) {
        this[props.pop()] = value;
      }
    },
  };

  typography.setValue(
    ["h1", "h2", "h3", "h4", "h5", "h6", "button"],
    HEADING_TYPE,
  );

  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type,
        primary: {
          main: PRIMARY_COLOR,
        },
        secondary: {
          main: SECONDARY_COLOR,
        },
      },
      typography,
      mixins: {
        toolbar: {
          minHeight: BAR_HEIGHT,
        },
      },
      props: {
        MuiToolbar: {
          disableGutters: true,
        },
      },
    }),
  );
}

export function reducer(state, action) {
  switch (action.type) {
    case REDUCER_HEIGHT:
      return { height: action.payload };
    default:
      throw new Error();
  }
}
