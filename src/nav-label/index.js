import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";

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
