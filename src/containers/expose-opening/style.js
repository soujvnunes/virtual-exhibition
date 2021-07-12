import { makeStyles } from "@material-ui/core";

export default makeStyles(({ typography, spacing, palette }) => {
  const disabledColor = { color: palette.text.disabled };
  const marginTop = { marginTop: spacing(4) };

  return {
    signatureTitle: {
      ...typography.h6,
      marginBottom: 0,
    },
    signatureOverline: {
      ...typography.overline,
      ...disabledColor,
      marginBottom: spacing(4),
      lineHeight: 1.618,
    },
    note: {
      ...marginTop,
      ...typography.body2,
      paddingLeft: ({ isMobile }) => (isMobile ? spacing(2) : spacing(4)),
      ...disabledColor,
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        height: "100%",
        width: spacing(0.5),
        top: 0,
        left: 0,
        backgroundColor: palette.action.disabled,
        borderRadius: spacing(0.25),
      },
    },
    buttonExplore: {
      marginLeft: "auto",
      borderRadius: spacing(3),
      minHeight: spacing(6),
      borderWidth: spacing(0.25),
      padding: spacing(0, 3),
      color: palette.text.secondary,

      "& .MuiButton-endIcon": {
        marginRight: spacing(-1.5),
      },
    },
    logos: {
      ...marginTop,
      width: "auto",
      height: spacing(16),
    },
    dialogContent: {
      padding: spacing(1, 0),
    },
  };
});
