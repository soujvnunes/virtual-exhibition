import { Grid, Icon, Zoom } from "@material-ui/core";
import useStyles from "./style";
import IconButton from "../icon-button";
import NavLabel from "../nav-label";
import { useWindowDimension } from "../modules";

function NavIntro() {
  const { iconButton } = useStyles();
  const { height } = useWindowDimension();

  function handleExploreClick() {
    window.scrollTo(0, height);
  }

  return (
    <Grid container justify="center">
      <Zoom>
        <NavLabel htmlFor="expand_more">Explore por década</NavLabel>
      </Zoom>
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

export default NavIntro;
