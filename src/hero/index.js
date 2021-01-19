import { Grid } from "@material-ui/core";
import Gallery from "../gallery";
import Section from "../section";
import SectionTitle from "../section-title";
import SectionParagraph from "../section-paragraph";
import SectionBackground from "../section-background";
import { useConsumer } from "../modules";

function Hero() {
  const [{ hero }] = useConsumer();
  const { title, description, gallery } = hero;
  const gridOffset = <Grid item xs={3} />;
  const commonProps = { align: "center" };

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
            <SectionTitle {...commonProps}>{title}</SectionTitle>
            <SectionParagraph {...commonProps}>{description}</SectionParagraph>
          </Grid>
          {gridOffset}
          <Gallery {...{ gallery }} />
        </Grid>
      </Section>
    </SectionBackground>
  );
}

export default Hero;
