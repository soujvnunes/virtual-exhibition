import { Grid } from "@material-ui/core";
import { Fragment } from "react";
import useStyles from "./style";
import Logos from "../../components/logos";
import { _ } from "../../libs/Modules";
import Section from "../../components/section";
import SectionTitle from "../../components/section-title";
import SectionParagraph from "../../components/section-paragraph";
import { Texts } from "libs";

export default function Intro() {
  const { logos, grid } = useStyles();
  const gridOffset = _("xs down") && <Grid item xs={2} />;

  return (
    <Section id="intro">
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        classes={{ root: grid }}>
        {gridOffset}
        <Grid item sm={7} xs={8}>
          <Logos classes={{ root: logos }} />
        </Grid>
        {gridOffset}
        <Grid item sm={5} xs={12}>
          <SectionTitle>
            {Texts.intro.title.split("/").map((sentence, index) => {
              const Component = index === 1 ? "span" : Fragment;

              return <Component key={sentence}>{sentence}</Component>;
            })}
          </SectionTitle>
          <SectionParagraph>{Texts.intro.description}</SectionParagraph>
        </Grid>
      </Grid>
    </Section>
  );
}
