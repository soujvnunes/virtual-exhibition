import { Grid, Toolbar, Icon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Line from "../line";
import IconButton from "../icon-button";

const useStyles = makeStyles(({ palette, spacing }) => ({
  lineWrapper: {
    width: "100vw",
    position: "fixed",
    left: 0,
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
  const classes = useStyles();

  return (
    <Toolbar component="nav">
      <div className={classes.lineWrapper}>
        <Line value={0} />
      </div>
      <Grid container justify="center" className={classes.gridExplore}>
        <Typography
          variant="button"
          color="textSecondary"
          className={classes.typographyExplore}
        >
          Explore por década
        </Typography>
        <IconButton className={classes.iconButtonExpand}>
          <Icon>expand_more</Icon>
        </IconButton>
      </Grid>
      <Grid container>
        <Grid item>
          <div />
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Navigation;
