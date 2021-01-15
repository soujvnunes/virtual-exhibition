import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const HEIGHT = 2;

const useStyles = makeStyles(({ spacing, transitions, palette }) => ({
  root: ({ size, color }) => ({
    height:
      (size === "large" && spacing(8)) || (size === "medium" && spacing(4)),
    backgroundColor:
      ((size === "large" || color === "primary") && palette.text.primary) ||
      ((size === "medium" || color === "disabled") && palette.divider),
    width: spacing(0.25),
    transition: transitions.create(["height", "background-color"]),
    ...(size === "small" && {
      height: spacing(HEIGHT),
      position: "absolute",
      left: -2,
      top: `calc(50% - ${spacing(HEIGHT / 2)}px)`,
    }),
  }),
}));

function NavRule({ size, unrendered, color, ...props }) {
  const { root } = useStyles({ size, color });

  if (unrendered) {
    return null;
  }

  return <Divider classes={{ root }} {...props} />;
}

NavRule.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "disabled"]),
  unrendered: PropTypes.bool,
};

NavRule.defaultProps = {
  size: "medium",
  color: "disabled",
  unrendered: false,
};

export default NavRule;
