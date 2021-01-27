import { makeStyles } from "@material-ui/core";

export default makeStyles(({ spacing, mixins }) => ({
  root: {
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    position: "relative",
    paddingTop: spacing(mixins.toolbar.minHeight / 8),
    paddingBottom: spacing(mixins.toolbar.minHeight / 8),
  },
}));
