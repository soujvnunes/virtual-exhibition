import { Grid } from "@material-ui/core";
import { useContext } from "react";
import Gallery from "../gallery";
import Section from "../section";
import SectionTitle from "../section-title";
import SectionParagraph from "../section-paragraph";
import SectionBackground from "../section-background";
import { HERO_CONTEXT } from "../constants";

function Hero() {
  const { hero } = useContext(HERO_CONTEXT);
  const { title, description } = hero;
  const gridOffset = <Grid item xs={3} />;
  const alignCenter = { align: "center" };

  return (
    <SectionBackground>
      <Section id={title}>
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
          <Gallery />
        </Grid>
      </Section>
    </SectionBackground>
  );
}

export default Hero;
