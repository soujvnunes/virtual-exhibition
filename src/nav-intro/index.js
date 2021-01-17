import PropTypes from "prop-types";
import { Grid, Grow, Icon, Zoom } from "@material-ui/core";
import useStyles from "./style";
import IconButton from "../icon-button";
import NavLabel from "../nav-label";
import { useWindowDimension } from "../modules";

function NavIntro({ onDecades }) {
  const { iconButton } = useStyles();
  const { height } = useWindowDimension();
  const commonProps = { in: !onDecades, timeout: onDecades ? 250 : 500 };

  function handleOnDecadesClick() {
    window.scrollTo(0, height);
  }

  return (
    <Grid container justify="center">
      <Grow {...commonProps}>
        <NavLabel htmlFor="expand_more">Explore por década</NavLabel>
      </Grow>
      <Zoom
        {...commonProps}
        style={{ transitionDelay: onDecades ? "125ms" : "250ms" }}
      >
        <IconButton
          classes={{ root: iconButton }}
          onClick={handleOnDecadesClick}
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
  onDecades: PropTypes.bool.isRequired,
};

export default NavIntro;
