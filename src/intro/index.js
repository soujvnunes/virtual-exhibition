import { Grid } from "@material-ui/core";
import { Fragment } from "react";
import useStyles from "./style";
import Logos from "../logos";
import { _ } from "../modules";
import Section from "../section";
import SectionTitle from "../section-title";
import SectionParagraph from "../section-paragraph";
import { INTRO_DESCRIPTION, INTRO_TITLE } from "../constants";

export default function Intro() {
  const { logos, grid } = useStyles();
  const gridOffset = _("xs down") && <Grid item xs={2} />;
  const renderTitle = INTRO_TITLE.split("/").map((sentence, index) => {
    const Component = index === 1 ? "span" : Fragment;

    return <Component key={sentence}>{sentence}</Component>;
  });

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
          <SectionTitle>{renderTitle}</SectionTitle>
          <SectionParagraph>{INTRO_DESCRIPTION}</SectionParagraph>
        </Grid>
      </Grid>
    </Section>
  );
}
