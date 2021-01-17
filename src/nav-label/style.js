import { makeStyles } from "@material-ui/core";

export default makeStyles(({ spacing, transitions }) => ({
  root: {
    position: "absolute",
    marginTop: ({ size }) => spacing(size === "large" ? -4 : -3),
    top: 0,
    transition: transitions.create(["margin-top", "font-size"]),
  },
}));
