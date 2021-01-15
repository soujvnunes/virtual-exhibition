import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const HEIGHT = 2;

const useStyles = makeStyles(({ spacing, transitions, palette }) => ({
  root: ({ variant }) => ({
    height: spacing((variant === "large" && 8) || (variant === "medium" && 4)),
    backgroundColor:
      (variant === "large" && palette.text.primary) ||
      (variant === "medium" && palette.divider),
    width: spacing(0.5),
    transition: transitions.create(["height", "background-color"]),
    ...(variant === "small" && {
      height: spacing(HEIGHT),
      position: "absolute",
      right: -2,
      top: `calc(50% - ${spacing(HEIGHT / 2)}px)`,
    }),
  }),
}));

function NavRule({ variant, unrendered, ...props }) {
  const { root } = useStyles({ variant });

  if (unrendered) {
    return null;
  }

  return <Divider classes={{ root }} {...props} />;
}

NavRule.propTypes = {
  variant: PropTypes.oneOf(["small", "medium", "large"]),
  unrendered: PropTypes.bool,
};

NavRule.defaultProps = {
  variant: "medium",
  unrendered: false,
};

export default NavRule;
