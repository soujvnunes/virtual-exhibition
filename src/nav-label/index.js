import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function NavLabel({ htmlFor, ...props }) {
  return (
    <Typography
      variant="button"
      color="textSecondary"
      component="label"
      {...{ htmlFor, ...props }}
    />
  );
}

NavLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
};

export default withStyles(({ spacing }) => ({
  root: {
    position: "absolute",
    marginTop: spacing(-3),
    top: 0,
  },
}))(NavLabel);
