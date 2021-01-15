import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { findIndex } from "lodash";
import { useContext } from "react";
import NavLabel from "../nav-label";
import NavRule from "../nav-rule";
import { getHeroes } from "../modules";
import { HERO_CONTEXT } from "../constants";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: "auto",
    padding: 0,
  },
}));

function NavDecade({ shortTitle, onClick, index, ...props }) {
  const { hero } = useContext(HERO_CONTEXT);
  const { root } = useStyles();
  const variantLarge = {
    ...(findIndex(getHeroes(), hero) === index && { variant: "large" }),
  };
  const colorPrimary = {
    ...(findIndex(getHeroes(), hero) >= index && { color: "primary" }),
  };

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
      <NavLabel {...variantLarge} htmlFor={shortTitle}>
        {shortTitle}
      </NavLabel>
      <NavRule {...colorPrimary} {...variantLarge} />
      <NavRule
        {...colorPrimary}
        variant="small"
        unrendered={getHeroes().length === 0}
      />
    </Grid>
  );
}

NavDecade.propTypes = {
  onClick: PropTypes.func.isRequired,
  shortTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default NavDecade;
