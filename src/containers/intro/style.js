import { makeStyles } from "@material-ui/core";

export default makeStyles(({ mixins, spacing }) => ({
  grid: {
    marginBottom: spacing(mixins.toolbar.minHeight / 8),
  },
  logos: {
    width: "inherit",
    height: "inherit",
  },
}));
