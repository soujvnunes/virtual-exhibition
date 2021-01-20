import { Grid } from "@material-ui/core";
import { useEffect, useRef } from "react";
import Gallery from "../gallery";
import Section from "../section";
import SectionTitle from "../section-title";
import SectionBackground from "../section-background";
import { useConsumer } from "../modules";
import { DISPATCH_UPDATE_HERO_REF } from "../constants";

function Hero() {
  const heroRef = useRef();
  const [{ hero }, dispatch] = useConsumer();
  const { title, gallery } = hero;
  const gridOffset = <Grid item xs={3} />;
  const commonProps = { align: "center" };

  useEffect(() => {
    dispatch({ type: DISPATCH_UPDATE_HERO_REF, payload: heroRef });
  }, [heroRef]);

  return (
    <SectionBackground ref={heroRef}>
      <Section id={title}>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          {gridOffset}
          <Grid item sm={6} xs={12}>
            <SectionTitle {...commonProps}>{title}</SectionTitle>
          </Grid>
          {gridOffset}
          <Gallery {...{ gallery }} />
        </Grid>
      </Section>
    </SectionBackground>
  );
}

export default Hero;
