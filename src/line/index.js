import { LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function Line(props) {
  return <LinearProgress variant="determinate" {...props} />;
}

export default withStyles(({ palette, spacing }) => ({
  root: {
    height: spacing(0.25),
    width: "100%",
  },
  colorPrimary: {
    backgroundColor: palette.action.disabled,
  },
  bar: {
    backgroundColor: palette.text.primary,
  },
}))(Line);
