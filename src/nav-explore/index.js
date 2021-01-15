import { Grid, Icon, makeStyles } from "@material-ui/core";
import IconButton from "../icon-button";
import NavLabel from "../nav-label";
import { useWindowDimension } from "../modules";

const useStyles = makeStyles(({ palette }) => ({
  iconButton: {
    backgroundColor: palette.background.default,
  },
}));

function NavExplore() {
  const { iconButton } = useStyles();
  const { height } = useWindowDimension();
  const handleExploreClick = () => window.scrollTo(0, height);

  return (
    <Grid container justify="center">
      <NavLabel htmlFor="expand_more">Explore por década</NavLabel>
      <IconButton
        classes={{ root: iconButton }}
        onClick={handleExploreClick}
        id="expand_more"
      >
        <Icon>expand_more</Icon>
      </IconButton>
    </Grid>
  );
}

export default NavExplore;
