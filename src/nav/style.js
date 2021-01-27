import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    top: "auto",
    bottom: 0,
    justifyContent: "center",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: 160,
      bottom: 0,
      left: 0,
      backgroundImage:
        "linear-gradient(rgba(48, 48, 48, 0.2), rgba(48, 48, 48, 1), rgba(48, 48, 48, 1))",
    },
  },
}));
