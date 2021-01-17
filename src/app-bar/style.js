import { makeStyles } from "@material-ui/core";

export default makeStyles(({ spacing, palette, transitions }) => ({
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
  iconButtonLogos: ({ showLogos }) => ({
    padding: 0,
    marginTop: showLogos ? spacing(0) : spacing(-16),
    transition: transitions.create(["margin-top"]),
  }),
  logos: {
    width: "auto",
    height: spacing(6),
  },
}));
