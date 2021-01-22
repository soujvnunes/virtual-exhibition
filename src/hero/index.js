import { Divider, Grid, Icon, IconButton, Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import Gallery from "../gallery";
import Section from "../section";
import SectionTitle from "../section-title";
import SectionBackground from "../section-background";
import { useConsumer } from "../modules";
import { DISPATCH_UPDATE_HERO_REF } from "../constants";
import SectionParagraph from "../section-paragraph";
import LinearProgress from "../linear-progress";
import Quote from "../quote";
import useStyles from "./style";

function Hero() {
  const { section, h6, progress, overline, control } = useStyles();
  const [descSelector, setDescSelector] = useState(0);
  const [selectorProgress, setSelectorProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef();
  const [{ hero }, dispatch] = useConsumer();
  const { title, gallery, description } = hero;
  const gridOffset = <Grid item sm={3} />;
  const commonProps = { align: "center" };
  const maxDesc = description.length - 1;
  const isDescArray = maxDesc > 0;

  useEffect(() => {
    dispatch({ type: DISPATCH_UPDATE_HERO_REF, payload: heroRef });
  }, [heroRef]);

  useEffect(() => {
    setSelectorProgress(0);
  }, [description, descSelector]);

  useEffect(() => {
    let timer;

    if (isDescArray) {
      timer = setInterval(() => {
        if (!isPaused) {
          setSelectorProgress((prevSelectorProgress) =>
            prevSelectorProgress >= 100 ? 0 : prevSelectorProgress + 10,
          );
        }
      }, 500);
    }

    return () => {
      clearInterval(timer);
    };
  }, [description, isPaused]);

  useEffect(() => {
    if (selectorProgress >= 100) {
      handleSkipClick();
    }
  }, [selectorProgress]);

  function handleSkipClick() {
    setDescSelector((prevDescSelector) =>
      prevDescSelector >= maxDesc ? 0 : prevDescSelector + 1,
    );
  }
  function handlePauseClick() {
    setIsPaused(true);
  }
  function handleResumeClick() {
    setIsPaused(false);
  }
  function renderPlayButton() {
    if (isPaused) {
      return (
        <IconButton onClick={handleResumeClick}>
          <Icon>play_arrow</Icon>
        </IconButton>
      );
    }

    return (
      <IconButton onClick={handlePauseClick}>
        <Icon>pause</Icon>
      </IconButton>
    );
  }

  return (
    <SectionBackground ref={heroRef}>
      <Section id={title} className={section}>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          {gridOffset}
          <Grid item sm={6} xs={12}>
            <SectionTitle {...commonProps}>{title}</SectionTitle>
            <Divider />
          </Grid>
          {gridOffset}
          <Grid item xs={12}>
            {description[descSelector].split("/").map((sentence, index) => {
              const props = {
                key: sentence,
                children: sentence,
              };

              if (index === 0) {
                return (
                  <Typography
                    variant="h6"
                    className={h6}
                    {...props}
                    {...commonProps}
                  />
                );
              }

              if (index === 1) {
                return (
                  <Typography
                    className={overline}
                    variant="overline"
                    {...props}
                    {...commonProps}
                  />
                );
              }

              if (sentence.startsWith("quote")) {
                return (
                  <Quote {...props}>{sentence.replace(/quote/gi, "")}</Quote>
                );
              }

              return <SectionParagraph {...props} />;
            })}
            {isDescArray && (
              <Grid container alignItems="center" classes={{ root: control }}>
                {renderPlayButton()}
                <LinearProgress
                  className={progress}
                  disableAnimation
                  variant="determinate"
                  value={selectorProgress}
                />
                <IconButton onClick={handleSkipClick}>
                  <Icon>skip_next</Icon>
                </IconButton>
              </Grid>
            )}
          </Grid>
          <Gallery {...{ gallery }} />
        </Grid>
      </Section>
    </SectionBackground>
  );
}

export default Hero;
