import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import Gallery from "../gallery";
import Section from "../section";
import SectionTitle from "../section-title";
import SectionParagraph from "../section-paragraph";

function Hero({ title, description, gallery }) {
  const gridOffset = <Grid item xs={3} />;
  const alignCenter = { align: "center" };

  return (
    <Section>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="center"
      >
        {gridOffset}
        <Grid item sm={6} xs={12}>
          <SectionTitle {...alignCenter}>{title}</SectionTitle>
          <SectionParagraph {...alignCenter}>{description}</SectionParagraph>
        </Grid>
        {gridOffset}
        <Gallery photos={gallery} />
      </Grid>
    </Section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

Hero.defaultProps = {
  gallery: null,
};

export default Hero;
