import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logos from "../logos";

const useStyles = makeStyles(({ palette }) => ({
  container: {
    margin: "0 auto",
    minHeight: "100vh",
  },
  typographyTitle: {
    color: palette.text.secondary,
    letterSpacing: 6.853924,
  },
  logos: {
    width: "inherit",
    height: "inherit",
  },
}));

function Content() {
  const { container, typographyTitle, logos } = useStyles();
  const mdDown = useMediaQuery(({ breakpoints }) => breakpoints.down("md"));

  return (
    <Grid
      className={container}
      component={Container}
      container
      alignItems="center"
      spacing={mdDown ? 0 : 4}
    >
      <Grid item md={7} xs={12}>
        <Logos className={logos} />
      </Grid>
      <Grid item md={5} xs={12}>
        <Typography
          className={typographyTitle}
          variant="h2"
          gutterBottom
          {...(mdDown && { align: "center" })}
        >
          Veja o quanto evoluímos juntos.
        </Typography>
        <Typography {...(mdDown && { align: "center" })}>
          Já passaram 60 anos! Explore através do decorrer das décadas o valor e
          prestígio da nossa Universidade Federal de Alagoas expandindo-se.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Content;
