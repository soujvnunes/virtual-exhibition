import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    position: "absolute",
    marginTop: ({ size }) => spacing(size === "large" ? -4 : -3),
    top: 0,
  },
}));

function NavLabel({ htmlFor, size, ...props }) {
  const { root } = useStyles({ size });
  const variant = (size === "large" && "h6") || (size === "medium" && "button");

  return (
    <Typography
      classes={{ root }}
      color={size === "large" ? "textPrimary" : "textSecondary"}
      component="label"
      {...{ htmlFor, variant, ...props }}
    />
  );
}

NavLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["medium", "large"]),
};

NavLabel.defaultProps = {
  size: "medium",
};

export default NavLabel;
