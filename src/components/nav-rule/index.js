import { Divider } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";

export default function NavRule({ size, color, ...props }) {
  const { root } = useStyles({ size, color });

  return <Divider classes={{ root }} {...props} />;
}
NavRule.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "disabled"]),
};
NavRule.defaultProps = {
  size: "medium",
  color: "disabled",
};
