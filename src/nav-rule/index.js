import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const HEIGHT = 2;

const useStyles = makeStyles(({ spacing, transitions, palette }) => ({
  root: ({ small, large }) => ({
    height: spacing(large ? 8 : 4),
    backgroundColor: large ? palette.text.primary : palette.divider,
    width: spacing(0.5),
    transition: transitions.create(["height", "background-color"]),
    ...(small && {
      height: spacing(HEIGHT),
      position: "absolute",
      right: -2,
      top: `calc(50% - ${spacing(HEIGHT / 2)}px)`,
    }),
  }),
}));

function NavRule({ small, large, unrendered, ...props }) {
  const { root } = useStyles({ small, large });

  if (unrendered) {
    return null;
  }

  return <Divider classes={{ root }} {...props} />;
}

NavRule.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  unrendered: PropTypes.bool,
};

NavRule.defaultProps = {
  small: false,
  large: false,
  unrendered: false,
};

export default NavRule;
