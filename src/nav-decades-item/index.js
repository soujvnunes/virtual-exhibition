import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import { findIndex } from "lodash";
import useStyles from "./style";
import NavLabel from "../nav-label";
import NavRule from "../nav-rule";
import { getHeroes, useConsumer } from "../modules";

export default function NavDecadesItem({ shortTitle, index, ...props }) {
  const { hero } = useConsumer();
  const { root } = useStyles();
  const sizeLarge = {
    ...(findIndex(getHeroes(), hero) === index && { size: "large" }),
  };
  const colorPrimary = {
    ...(findIndex(getHeroes(), hero) >= index && { color: "primary" }),
  };
  const renderRule = !getHeroes().length === 0 && (
    <NavRule {...colorPrimary} size="small" />
  );

  return (
    <Grid
      item
      xs
      key={shortTitle}
      component={Button}
      classes={{ root }}
      id={shortTitle}
      {...props}>
      <NavLabel {...sizeLarge} htmlFor={shortTitle}>
        {shortTitle}
      </NavLabel>
      <NavRule {...colorPrimary} {...sizeLarge} />
      {renderRule}
    </Grid>
  );
}
NavDecadesItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  shortTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
