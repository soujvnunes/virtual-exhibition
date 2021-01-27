import { makeStyles } from "@material-ui/core";

export default makeStyles(({ spacing, palette }) => ({
  h6: {
    marginTop: spacing(1.5),
  },
  progress: {
    flex: 1,
  },
  overline: {
    display: "block",
    color: palette.text.disabled,
  },
  control: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginTop: spacing(2),
    borderRadius: spacing(3),
  },
}));
