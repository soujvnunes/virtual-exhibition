import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const HEIGHT = 2;

const useStyles = makeStyles(({ spacing, transitions, palette }) => ({
  root: ({ variant, color }) => ({
    height:
      (variant === "large" && spacing(8)) ||
      (variant === "medium" && spacing(4)),
    backgroundColor:
      ((variant === "large" || color === "primary") && palette.text.primary) ||
      ((variant === "medium" || color === "disabled") && palette.divider),
    width: spacing(0.25),
    transition: transitions.create(["height", "background-color"]),
    ...(variant === "small" && {
      height: spacing(HEIGHT),
      position: "absolute",
      left: -2,
      top: `calc(50% - ${spacing(HEIGHT / 2)}px)`,
    }),
  }),
}));

function NavRule({ variant, unrendered, color, ...props }) {
  const { root } = useStyles({ variant, color });

  if (unrendered) {
    return null;
  }

  return <Divider classes={{ root }} {...props} />;
}

NavRule.propTypes = {
  variant: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "disabled"]),
  unrendered: PropTypes.bool,
};

NavRule.defaultProps = {
  variant: "medium",
  color: "disabled",
  unrendered: false,
};

export default NavRule;
