import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

function Provider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
