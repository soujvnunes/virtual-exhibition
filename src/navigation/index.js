import {
  Grid,
  Toolbar,
  Icon,
  Typography,
  Zoom,
  Slide,
  Divider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { findIndex } from "lodash";
import Line from "../line";
import IconButton from "../icon-button";
import { getHeroes, useWindowDimension } from "../modules";
import { HERO_CONTEXT } from "../constants";

const useStyles = makeStyles(({ palette, spacing, zIndex }) => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: zIndex.drawer,
  },
  iconButtonExplore: {
    backgroundColor: `${palette.background.default}!important`,
  },
  typographyExplore: {
    position: "absolute",
    marginTop: spacing(-3),
    top: 0,
  },
  lineExplore: {
    height: 32,
    width: 4,
  },
  lineSmallExplore: {
    position: "absolute",
    right: -2,
    height: 16,
    top: "calc(50% - 8px)",
  },
  gridItem: {
    minWidth: "auto",
  },
}));

function Navigation() {
  const { hero: heroContext, setHero } = useContext(HERO_CONTEXT);
  const [explore, setExplore] = useState(false);
  const {
    root,
    iconButtonExplore,
    typographyExplore,
    lineExplore,
    gridItem,
    lineSmallExplore,
  } = useStyles({ explore });
  const { height, scroll } = useWindowDimension();
  const handleExploreClick = () => window.scrollTo(0, height);
  const handleDecadeClick = (value) => {
    setHero(value);
  };
  const minHeight = { style: { minHeight: "inherit" } };
  const exploreScroll = scroll > height / 2;
  const processPreCompleted = 100 / getHeroes().length;
  const process = exploreScroll
    ? Math.abs(
        ((100 - processPreCompleted) / getHeroes().length + 1) *
          findIndex(getHeroes(), heroContext + 1),
      )
    : 0;

  console.log(
    process,
    getHeroes().length,
    findIndex(getHeroes(), heroContext) + 1,
  );

  useEffect(() => {
    setExplore(exploreScroll);

    if (scroll > height / 2) {
      setHero(getHeroes()[0]);
    }
  }, [scroll]);

  const renderExplore = () => {
    if (!explore) {
      return (
        <>
          <Slide in={!explore} direction="up" unmountOnExit>
            <Typography
              variant="button"
              color="textSecondary"
              classes={{ root: typographyExplore }}
              htmlFor="expand_more"
              component="label"
            >
              Explore por década
            </Typography>
          </Slide>
          <Zoom in={!explore} unmountOnExit>
            <IconButton
              onClick={handleExploreClick}
              classes={{ root: iconButtonExplore }}
            >
              <Icon>expand_more</Icon>
            </IconButton>
          </Zoom>
        </>
      );
    }

    return (
      <>
        <Grid xs />
        {getHeroes().map(({ shortTitle, ...hero }, index) => {
          const renderSmallDivider = getHeroes().length !== index + 1 && (
            <Divider className={clsx(lineExplore, lineSmallExplore)} />
          );

          return (
            <Grid
              xs
              key={shortTitle}
              component={Button}
              classes={{ root: gridItem }}
              id={shortTitle}
              onClick={() => handleDecadeClick(hero)}
            >
              <label htmlFor={shortTitle} className={typographyExplore}>
                {shortTitle}
              </label>
              <Divider classes={{ root: lineExplore }} />
              {renderSmallDivider}
            </Grid>
          );
        })}
        <Grid xs />
      </>
    );
  };

  return (
    <Toolbar component="nav" classes={{ root }}>
      <Line value={process} />
      <Grid container justify="center" {...(explore && { ...minHeight })}>
        {renderExplore()}
      </Grid>
    </Toolbar>
  );
}

export default Navigation;
