import { IconButton as MuiIconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function IconButton(props) {
  return <MuiIconButton {...props} />;
}

export default withStyles(({ palette }) => ({
  root: {
    border: `1px solid ${palette.action.disabled}`,
    boxSizing: "border-box",
  },
}))(IconButton);
