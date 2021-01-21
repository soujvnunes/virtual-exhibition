import { makeStyles } from "@material-ui/core";

export default makeStyles(({ spacing, palette }) => {
  const disabledColor = { color: palette.text.disabled };

  return {
    root: {
      margin: spacing(2, 0),
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
  };
});
