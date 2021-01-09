import { Button as MuiButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function Button(props) {
  return <MuiButton {...props} />;
}

export default withStyles(({ spacing, palette }) => ({
  root: {
    borderRadius: spacing(3),
    minHeight: spacing(6),
    letterSpacing: 2.618,
  },
  outlined: {
    padding: spacing(0, 3),
  },
  endIcon: {
    marginRight: spacing(-1.5),
  },
  iconSizeMedium: {
    "& > *:first-child": {
      fontSize: spacing(0, 3),
    },
  },
  label: {
    color: palette.text.secondary,
  },
}))(Button);
