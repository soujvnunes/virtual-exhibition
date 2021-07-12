import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";

export default function NavLabel({ size, ...props }) {
  const { root } = useStyles({ size });

  return (
    <Typography
      classes={{ root }}
      color={{ large: "textPrimary" }[size] || "textSecondary"}
      component="label"
      variant={{ medium: "button", large: "h6" }[size]}
      {...props}
    />
  );
}
NavLabel.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
};
NavLabel.defaultProps = {
  size: "medium",
};
