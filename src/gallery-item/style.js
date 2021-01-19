import { makeStyles } from "@material-ui/core";

const backdropFilter = "saturate(160%) brightness(32%) blur(8px)";

export default makeStyles(({ spacing, palette, transitions }) => ({
  root: {
    backdropFilter,
    overflow: "hidden",
    borderRadius: spacing(3),
    borderStyle: "solid",
    borderWidth: spacing(0.25),
    borderColor: ({ hover }) =>
      hover ? palette.action.active : palette.action.disabled,
    transition: transitions.create(["border-color"]),
  },
  cardMedia: {
    opacity: ({ hover }) => (hover ? 0 : 1),
    transition: transitions.create(["opacity"]),
  },
  paper: {
    maxHeight: `calc(100vh - ${spacing(16)}px)`,
    overflow: "hidden",
  },
  dialogContent: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "absolute",
    width: "100%",
    bottom: 0,
    "& p": {
      margin: 0,
    },
  },
  backdrop: {
    backdropFilter,
    backgroundColor: "transparent",
  },
  fullScreen: {
    position: "absolute",
    inset: 0,
    opacity: ({ hover }) => (hover ? 1 : 0),
    transition: transitions.create(["opacity"]),
  },
  img: {
    width: "auto",
    height: "100%",
    maxHeight: "inherit",
  },
}));
