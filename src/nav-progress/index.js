import { LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function NavProgress({ value, ...props }) {
  return <LinearProgress variant="determinate" {...{ value, ...props }} />;
}

NavProgress.propTypes = {
  value: PropTypes.number.isRequired,
};

export default withStyles(({ palette, spacing }) => ({
  root: {
    height: spacing(0.25),
    width: "100%",
    position: "absolute",
  },
  colorPrimary: {
    backgroundColor: palette.action.disabled,
  },
  bar: {
    backgroundColor: palette.text.primary,
  },
}))(NavProgress);