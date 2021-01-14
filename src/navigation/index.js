import { Grid, Toolbar, Icon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Line from "../line";
import IconButton from "../icon-button";

const useStyles = makeStyles(({ palette, spacing, zIndex }) => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: zIndex.drawer,
  },
  gridExplore: {
    position: "absolute",
  },
  iconButtonExpand: {
    backgroundColor: `${palette.background.default}!important`,
  },
  typographyExplore: {
    position: "absolute",
    marginTop: spacing(-3),
  },
}));

function Navigation() {
  const {
    root,
    gridExplore,
    iconButtonExpand,
    typographyExplore,
  } = useStyles();
  const handleExpandMoreClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 900);
    }, 0);
  };

  return (
    <Toolbar component="nav" classes={{ root }}>
      <Line value={0} />
      <Grid container justify="center" classes={{ root: gridExplore }}>
        <Typography
          variant="button"
          color="textSecondary"
          classes={{ root: typographyExplore }}
          htmlFor="expand_more"
          component="label"
        >
          Explore por década
        </Typography>
        <IconButton
          onClick={handleExpandMoreClick}
          id="expand_more"
          classes={{ root: iconButtonExpand }}
        >
          <Icon>expand_more</Icon>
        </IconButton>
      </Grid>
    </Toolbar>
  );
}

export default Navigation;
