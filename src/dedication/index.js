import { Grid } from "@material-ui/core";
import clsx from "clsx";
import Section from "../section";
import { DEDICATION_DESCRIPTION } from "../constants";
import SectionParagraph from "../section-paragraph";
import useStyles from "./style";

function Dedication() {
  const { paragraphStyle, paragraphFirstLine, marginTop } = useStyles();

  return (
    <Section id="dedication">
      <Grid container alignContent="center" justify="center">
        <Grid item md={6}>
          {DEDICATION_DESCRIPTION.map((paragraph, index) => (
            <SectionParagraph
              key={paragraph}
              gutterBottom
              align="left"
              className={clsx(paragraphStyle, {
                [paragraphFirstLine]: index === 0,
                [marginTop]: index !== 0,
              })}
            >
              {paragraph}
            </SectionParagraph>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
}

export default Dedication;
