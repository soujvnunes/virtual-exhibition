import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    position: "absolute",
    marginTop: ({ variant }) => spacing(variant === "large" ? -4 : -3),
    top: 0,
  },
}));

function NavLabel({ htmlFor, variant, ...props }) {
  const { root } = useStyles({ variant });

  return (
    <Typography
      classes={{ root }}
      variant={
        (variant === "large" && "h6") || (variant === "medium" && "button")
      }
      color={variant === "large" ? "textPrimary" : "textSecondary"}
      component="label"
      {...{ htmlFor, ...props }}
    />
  );
}

NavLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["medium", "large"]),
};

NavLabel.defaultProps = {
  variant: "medium",
};

export default NavLabel;
