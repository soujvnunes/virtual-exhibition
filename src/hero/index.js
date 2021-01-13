import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Fragment } from "react";
import Logos from "../logos";
import { useWindowDimension, _ } from "../modules";
import { Rapport } from "../asset";
import Gallery from "../gallery";

const useStyles = makeStyles(({ palette, transitions }) => ({
  root: ({ image }) =>
    image && {
      backgroundImage: `url(${image})`,
      position: "relative",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transition: transitions.create(["background-position-y"], {
        duration: transitions.duration.short,
      }),
      "&:before": {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        content: "''",
        position: "absolute",
        inset: 0,
      },
    },
  container: {
    position: "relative",
  },
  grid: {
    minHeight: ({ minHeight }) => minHeight,
  },
  typographyTitle: {
    color: palette.text.secondary,
    letterSpacing: 6.853924,
    "& > span": {
      WebkitBackgroundClip: "text",
      textFillColor: "transparent",
      backgroundImage: `url(${Rapport})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  logos: {
    width: "inherit",
    height: "inherit",
  },
}));

function Hero({ title, description, gallery, intro }) {
  const classes = useStyles({
    minHeight: useWindowDimension("height"),
    image: gallery && gallery[0].img,
  });
  const alignCenter = intro
    ? _("sm down") && { align: "center" }
    : { align: "center" };
  const heading6 = _("sm down") && "h6";
  const heading4 = _("md down") && "h4";
  const gridOffsetIntro = _("xs down") && <Grid item xs={2} />;
  const gridOffsetContent = !intro && <Grid item xs={3} />;
  const renderTitle = title.split("/").map((sentence, index) => {
    const commonProps = {
      key: sentence,
      children: sentence,
    };

    if (index === 1) {
      return <span {...commonProps} />;
    }

    return <Fragment {...commonProps} />;
  });
  const renderIntro = intro && (
    <>
      {gridOffsetIntro}
      <Grid item sm={7} xs={8}>
        <Logos className={classes.logos} />
      </Grid>
      {gridOffsetIntro}
    </>
  );
  const renderContent = (
    <>
      {gridOffsetContent}
      <Grid item sm={intro ? 5 : 6} xs={12}>
        <Typography
          className={classes.typographyTitle}
          component="h2"
          variant={heading6 || heading4 || "h2"}
          gutterBottom
          {...alignCenter}
        >
          {renderTitle}
        </Typography>
        <Typography variant={_("sm down") ? "body2" : "body1"} {...alignCenter}>
          {description}
        </Typography>
      </Grid>
      {gridOffsetContent}
    </>
  );

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid
          className={classes.grid}
          container
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          {renderIntro}
          {renderContent}
          {!intro && <Gallery photos={gallery} />}
        </Grid>
      </Container>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  intro: PropTypes.bool.isRequired,
};

Hero.defaultProps = {
  gallery: null,
};

export default Hero;
