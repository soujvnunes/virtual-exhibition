import { makeStyles } from "@material-ui/core";

const backdropFilter = "saturate(160%) brightness(32%) blur(8px)";

export default makeStyles(({ spacing, mixins }) => ({
  paper: {
    overflow: "initial",
    backgroundColor: "transparent",
    boxShadow: "none",
    maxHeight: ({ isMobile }) =>
      `calc(100vh - ${isMobile ? spacing(2) : spacing(16)}px)`,
    margin: ({ isMobile }) =>
      isMobile && spacing(2, 2, mixins.toolbar.minHeight / 8, 2),
  },
  backdrop: {
    backdropFilter,
    backgroundColor: "transparent",
  },
}));
