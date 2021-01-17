import PropTypes from "prop-types";
import { Grid, Grow, Icon, Zoom } from "@material-ui/core";
import useStyles from "./style";
import IconButton from "../icon-button";
import NavLabel from "../nav-label";
import { useWindowDimension } from "../modules";

function NavIntro({ explore }) {
  const { iconButton } = useStyles();
  const { height } = useWindowDimension();
  const commonProps = { in: !explore, timeout: 500 };

  function handleExploreClick() {
    window.scrollTo(0, height);
  }

  return (
    <Grid container justify="center">
      <Grow {...commonProps}>
        <NavLabel htmlFor="expand_more">Explore por década</NavLabel>
      </Grow>
      <Zoom {...commonProps} style={{ transitionDelay: "250ms" }}>
        <IconButton
          classes={{ root: iconButton }}
          onClick={handleExploreClick}
          id="expand_more"
        >
          <Zoom {...commonProps}>
            <Icon>expand_more</Icon>
          </Zoom>
        </IconButton>
      </Zoom>
    </Grid>
  );
}

NavIntro.propTypes = {
  explore: PropTypes.bool.isRequired,
};

export default NavIntro;
