import { Grid } from "@material-ui/core";
import useStyles from "./style";
import Logos from "../logos";
import { _ } from "../modules";
import Section from "../section";
import SectionTitle from "../section-title";
import SectionParagraph from "../section-paragraph";

function Intro() {
  const { logos, grid } = useStyles();
  const gridOffset = _("xs down") && <Grid item xs={2} />;

  return (
    <Section id="intro">
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        classes={{ root: grid }}
      >
        {gridOffset}
        <Grid item sm={7} xs={8}>
          <Logos classes={{ root: logos }} />
        </Grid>
        {gridOffset}
        <Grid item sm={5} xs={12}>
          <SectionTitle>
            Veja o quanto evoluímos <span>juntos</span>
          </SectionTitle>
          <SectionParagraph>
            Já se passaram 60 anos! De lá para cá são muitas conquistas e
            histórias. Então, embarque nessa viagem e explore os acontecimentos
            no decorrer das seis décadas, o valor e o prestígio da nossa
            Universidade Federal de Alagoas.
          </SectionParagraph>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Intro;
