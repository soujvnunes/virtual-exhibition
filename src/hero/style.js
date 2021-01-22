import { makeStyles } from "@material-ui/core";

export default makeStyles(({ spacing, palette }) => ({
  section: {
    paddingBottom: spacing(16),
  },
  h6: {
    marginTop: spacing(1.5),
  },
  progress: {
    marginTop: spacing(1.5),
  },
  overline: {
    display: "block",
    color: palette.text.disabled,
  },
}));
