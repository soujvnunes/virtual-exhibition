import { IconButton as MuiIconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { DISPATCH_UPDATE_ANIMATE_SCROLL } from "../../constants";
import { useConsumer } from "../../library/modules";

function IconButton(props) {
  const { dispatch } = useConsumer();

  function handleMouseEnter() {
    dispatch({ type: DISPATCH_UPDATE_ANIMATE_SCROLL, payload: true });
  }
  function handleMouseLeave() {
    dispatch({ type: DISPATCH_UPDATE_ANIMATE_SCROLL, payload: false });
  }

  return (
    <MuiIconButton
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}

export default withStyles(({ palette }) => ({
  root: {
    border: `2px solid rgba(${
      {
        dark: "255, 255, 255, 0.23",
        light: "0, 0, 0, 0.23",
      }[palette.type]
    })}`,
    padding: 10,
  },
}))(IconButton);
