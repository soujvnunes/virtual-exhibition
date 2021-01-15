import React from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavLabel from "../nav-label";
import NavRule from "../nav-rule";
import { getHeroes } from "../modules";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: "auto",
  },
}));

function NavDecade({ shortTitle, onClick, index, ...props }) {
  const { root } = useStyles();

  return (
    <Grid
      item
      xs
      key={shortTitle}
      component={Button}
      classes={{ root }}
      id={shortTitle}
      {...{ onClick, ...props }}
    >
      <NavLabel htmlFor={shortTitle}>{shortTitle}</NavLabel>
      <NavRule />
      <NavRule variant="small" unrendered={getHeroes().length === index + 1} />
    </Grid>
  );
}

NavDecade.propTypes = {
  onClick: PropTypes.func.isRequired,
  shortTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default NavDecade;
