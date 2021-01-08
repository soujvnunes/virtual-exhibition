import PropTypes from "prop-types";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useMemo } from "react";
import Theme from "./theme";

function Provider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () => createMuiTheme(Theme(prefersDarkMode))[prefersDarkMode],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
