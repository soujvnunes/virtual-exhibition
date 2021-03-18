import { Grid } from "@material-ui/core";
import clsx from "clsx";
import Section from "../section";
import { DEDICATION_DESCRIPTION } from "../constants";
import SectionParagraph from "../section-paragraph";
import useStyles from "./style";
import { getVideos } from "../modules";

export default function Dedication() {
  const {
    paragraphStyle,
    paragraphFirstLine,
    marginTop,
    videosItem,
    root,
  } = useStyles();

  return (
    <Section id="dedication" className={root}>
      <Grid container direction="column">
        <Grid item xs>
          {DEDICATION_DESCRIPTION.map((paragraph, index) => (
            <SectionParagraph
              key={paragraph}
              align="left"
              className={clsx(paragraphStyle, {
                [paragraphFirstLine]: index === 0,
                [marginTop]: index !== 0,
              })}>
              {paragraph}
            </SectionParagraph>
          ))}
        </Grid>
        <Grid container spacing={2} className={marginTop}>
          {getVideos().map(({ src, title }) => (
            <Grid
              item
              xs={12}
              md={6}
              key={title}
              classes={{ root: videosItem }}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                {...{ src, title }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
}
