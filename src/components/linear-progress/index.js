import {
  LinearProgress as MuiLinearProgress,
  withStyles,
} from "@material-ui/core";

function LinearProgress(props) {
  return <MuiLinearProgress {...props} />;
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
    transition: ({ disableAnimation }) => disableAnimation && "none",
  },
}))(LinearProgress);
