import { IconButton as MuiIconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";
import { DISPATCH_UPDATE_ANIMATE_SCROLL } from "../constants";
import { useConsumer } from "../modules";

function IconButton({ variant, ...props }) {
  const [, dispatch] = useConsumer();
  const { root } = useStyles({ variant });

  function handleMouseEnter() {
    dispatch({ type: DISPATCH_UPDATE_ANIMATE_SCROLL, payload: true });
  }
  function handleMouseLeave() {
    dispatch({ type: DISPATCH_UPDATE_ANIMATE_SCROLL, payload: false });
  }

  return (
    <MuiIconButton
      className={root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}

IconButton.propTypes = {
  variant: PropTypes.oneOf(["outlined"]),
};

IconButton.defaultProps = {
  variant: null,
};

export default IconButton;
