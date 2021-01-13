import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logos from "../logos";
import { _ } from "../modules";
import Section from "../section";
import SectionTitle from "../section-title";
import SectionParagraph from "../section-paragraph";

const useStyles = makeStyles(() => ({
  logos: {
    width: "inherit",
    height: "inherit",
  },
}));

function Intro() {
  const { logos } = useStyles();
  const gridOffsetIntro = _("xs down") && <Grid item xs={2} />;

  return (
    <Section id="intro">
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="center"
      >
        {gridOffsetIntro}
        <Grid item sm={7} xs={8}>
          <Logos className={logos} />
        </Grid>
        {gridOffsetIntro}
        <Grid item sm={5} xs={12}>
          <SectionTitle>
            Veja o quanto evoluímos <span>juntos</span>.
          </SectionTitle>
          <SectionParagraph>
            Já passaram 60 anos! Explore através do decorrer das décadas o valor
            e prestígio da nossa Universidade Federal de Alagoas expandindo-se.
          </SectionParagraph>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Intro;
