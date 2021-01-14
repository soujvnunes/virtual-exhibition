import {
  Grid,
  Toolbar,
  Icon,
  Typography,
  Zoom,
  Slide,
  Container,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Line from "../line";
import IconButton from "../icon-button";
import { useWindowDimension } from "../modules";

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
}));

function Navigation({ heroes }) {
  const [explore, setExplore] = useState(false);
  const {
    root,
    iconButtonExplore,
    typographyExplore,
    lineExplore,
  } = useStyles({ explore });
  const { height, scroll } = useWindowDimension();
  const handleExploreClick = () => window.scrollTo(0, height);
  const minHeight = { style: { minHeight: "inherit" } };

  useEffect(() => {
    setExplore(scroll > height / 2);
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

    return heroes.map(({ shortTitle }) => (
      <Grid
        container
        item
        xs
        alignItems="center"
        direction="column"
        alignContent="center"
        justify="center"
        key={shortTitle}
      >
        <Typography variant="button" classes={{ root: typographyExplore }}>
          {shortTitle}
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          classes={{ root: lineExplore }}
        />
      </Grid>
    ));
  };

  return (
    <Toolbar component="nav" classes={{ root }}>
      <Line value={0} />
      <Container {...(explore && { ...minHeight })}>
        <Grid container justify="center" {...minHeight}>
          {renderExplore()}
        </Grid>
      </Container>
    </Toolbar>
  );
}

Navigation.propTypes = {
  heroes: PropTypes.string.isRequired,
};

export default Navigation;
