import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logos from "../logos";
import { _ } from "../modules";
import rapport from "../rapport.jpg";

const useStyles = makeStyles(({ palette }) => ({
  typographyTitle: {
    color: palette.text.secondary,
    letterSpacing: 6.853924,
    "& > span": {
      WebkitBackgroundClip: "text",
      textFillColor: "transparent",
      backgroundImage: `url(${rapport})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  logos: {
    width: "inherit",
    height: "inherit",
  },
}));

function Content() {
  const classes = useStyles();
  const alignCenter = _("sm down") && { align: "center" };
  const heading6 = _("sm down") && "h6";
  const heading4 = _("md down") && "h4";
  const gridOffset = _("xs down") && <Grid item xs={2} />;

  return (
    <Grid container alignItems="center">
      {gridOffset}
      <Grid item sm={7} xs={8}>
        <Logos className={classes.logos} />
      </Grid>
      {gridOffset}
      <Grid item sm={5} xs={12}>
        <Typography
          className={classes.typographyTitle}
          component="h2"
          variant={heading6 || heading4 || "h2"}
          gutterBottom
          {...alignCenter}
        >
          Veja o quanto evoluímos <span>juntos</span>.
        </Typography>
        <Typography variant={_("sm down") ? "body2" : "body1"} {...alignCenter}>
          Já passaram 60 anos! Explore através do decorrer das décadas o valor e
          prestígio da nossa Universidade Federal de Alagoas expandindo-se.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Content;
