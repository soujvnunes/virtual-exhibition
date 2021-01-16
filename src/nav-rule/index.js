import { Divider } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";

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
