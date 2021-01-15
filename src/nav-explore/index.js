import React from "react";
import { Grid, Icon } from "@material-ui/core";
import IconButton from "../icon-button";
import NavLabel from "../nav-label";
import { useWindowDimension } from "../modules";

function NavExplore() {
  const { height } = useWindowDimension();
  const handleExploreClick = () => window.scrollTo(0, height);

  return (
    <Grid container justify="center">
      <NavLabel htmlFor="expand_more">Explore por década</NavLabel>
      <IconButton
        onClick={handleExploreClick}
        style={{
          backgroundColor: ({ palette }) =>
            `${palette.background.default}!important`,
        }}
        id="expand_more"
      >
        <Icon>expand_more</Icon>
      </IconButton>
    </Grid>
  );
}

export default NavExplore;
