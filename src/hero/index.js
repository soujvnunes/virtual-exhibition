import { Divider, Grid, Icon, IconButton, Typography } from "@material-ui/core";
import { useCallback, useEffect, useRef, useState } from "react";
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

export default function Hero() {
  const { h6, progress, overline, control } = useStyles();
  const [descSelector, setDescSelector] = useState(0);
  const [selectorProgress, setSelectorProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef();
  const { hero, dispatch } = useConsumer();
  const { title, gallery, description } = hero;
  const gridOffset = <Grid item sm={3} />;
  const commonProps = { align: "center" };
  const maxDesc = description.length - 1;
  const isDescArray = maxDesc > 0;
  const handleSkipClick = useCallback(() => {
    setDescSelector((prevDescSelector) =>
      prevDescSelector >= maxDesc ? 0 : prevDescSelector + 1,
    );
  }, [maxDesc]);
  const renderControl = isDescArray && (
    <Grid container alignItems="center" classes={{ root: control }}>
      <IconButton onClick={handleControlClick}>
        <Icon>{isPaused ? "play_arrow" : "pause"}</Icon>
      </IconButton>
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
  );
  const renderText = description[descSelector]
    ?.split("/")
    .map((sentence, index) => {
      const Component =
        ((index === 0 || index === 1) && Typography) ||
        (sentence.startsWith("quote") && Quote) ||
        SectionParagraph;

      return (
        <Component
          key={sentence}
          {...((index === 0 || index === 1) && {
            classes: index === 1 ? { overline } : { h6 },
            variant: index === 1 ? "overline" : "h6",
            align: "center",
          })}>
          {sentence.replace(/quote/gi, "")}
        </Component>
      );
    });

  useEffect(() => {
    dispatch({ type: DISPATCH_UPDATE_HERO_REF, payload: heroRef });
  }, [dispatch, heroRef]);
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
  }, [description, isDescArray, isPaused]);
  useEffect(() => {
    if (selectorProgress >= 100) {
      handleSkipClick();
    }
  }, [maxDesc, selectorProgress, handleSkipClick]);
  function handleControlClick() {
    setIsPaused((preState) => !preState);
  }

  return (
    <SectionBackground ref={heroRef}>
      <Section id={title}>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center">
          {gridOffset}
          <Grid item sm={6} xs={12}>
            <SectionTitle {...commonProps}>{title}</SectionTitle>
            <Divider />
          </Grid>
          {gridOffset}
          <Grid item xs={12}>
            {renderText}
            {renderControl}
          </Grid>
          <Gallery gallery={gallery} />
        </Grid>
      </Section>
    </SectionBackground>
  );
}
