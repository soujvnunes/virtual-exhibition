import { IconButton as MuiIconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function IconButton(props) {
  return <MuiIconButton {...props} />;
}

const borderColor = (type) => {
  switch (type) {
    case "dark":
      return "255, 255, 255, 0.23";
    default:
      return "0, 0, 0, 0.23";
  }
};

export default withStyles(({ palette }) => ({
  root: {
    border: `2px solid rgba(${borderColor(palette.type)})}`,
    padding: 10,
  },
}))(IconButton);
