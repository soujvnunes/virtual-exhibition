import { makeStyles } from "@material-ui/core";

const backdropFilter = "saturate(160%) brightness(32%) blur(8px)";

export default makeStyles(({ spacing, palette, transitions }) => ({
  root: {
    backdropFilter,
    overflow: "hidden",
    borderRadius: spacing(3),
    borderStyle: "solid",
    borderWidth: spacing(0.25),
    borderColor: ({ onHover }) =>
      onHover ? palette.action.active : palette.action.disabled,
    transition: transitions.create(["border-color"]),
  },
  cardMedia: {
    opacity: ({ onHover }) => (onHover ? 0 : 1),
    transition: transitions.create(["opacity"]),
  },
  fullScreen: {
    position: "absolute",
    inset: 0,
    opacity: ({ onHover }) => (onHover ? 1 : 0),
    transition: transitions.create(["opacity"]),
  },
  img: {
    width: ({ isMobile }) => (isMobile ? "100%" : "auto"),
    maxHeight: "inherit",
  },
  dialogContent: {
    overflow: "initial",
    "& p": {
      margin: 0,
    },
  },
  appBar: ({ isMobile }) =>
    isMobile && {
      top: "auto",
      bottom: 0,
    },
  iconButtonClose: {
    marginRight: ({ isMobile }) => (isMobile ? "auto" : spacing(2)),
  },
}));
