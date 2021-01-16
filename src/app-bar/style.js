import { makeStyles } from "@material-ui/core";

export default makeStyles(({ spacing, palette }) => ({
  buttonNews: {
    marginLeft: "auto",
    borderRadius: spacing(3),
    minHeight: spacing(6),
    borderWidth: spacing(0.25),
    padding: spacing(0, 3),
    marginRight: spacing(-1.5),
    color: palette.text.secondary,

    "& > *:first-child": {
      fontSize: spacing(0, 3),
    },
  },
  iconButtonLogos: {
    padding: 0,
  },
  logos: {
    width: "auto",
    height: spacing(6),
  },
}));
