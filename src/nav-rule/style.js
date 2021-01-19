import { makeStyles } from "@material-ui/core";

const HEIGHT = 2;

export default makeStyles(({ spacing, transitions, palette }) => ({
  root: ({ size, color }) => ({
    height:
      (size === "large" && spacing(8)) || (size === "medium" && spacing(4)),
    backgroundColor:
      ((size === "large" || color === "primary") && palette.text.primary) ||
      ((size === "medium" || color === "disabled") && palette.divider),
    width: spacing(0.25),
    transition: transitions.create(["height", "background-color"]),
    ...(size === "small" && {
      height: spacing(HEIGHT),
      position: "absolute",
      left: -2,
      top: `calc(50% - ${spacing(HEIGHT / 2)}px)`,
    }),
  }),
}));
