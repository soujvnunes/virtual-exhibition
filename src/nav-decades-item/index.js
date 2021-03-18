import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import { findIndex } from "lodash";
import useStyles from "./style";
import NavLabel from "../nav-label";
import NavRule from "../nav-rule";
import { getHeroes, useConsumer } from "../modules";

export default function NavDecadesItem({
  shortTitle,
  onClick,
  index,
  ...props
}) {
  const [{ hero }] = useConsumer();
  const { root } = useStyles();
  const sizeLarge = {
    ...(findIndex(getHeroes(), hero) === index && { size: "large" }),
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
      {...{ onClick, ...props }}>
      <NavLabel {...sizeLarge} htmlFor={shortTitle}>
        {shortTitle}
      </NavLabel>
      <NavRule {...colorPrimary} {...sizeLarge} />
      <NavRule
        {...colorPrimary}
        size="small"
        unrendered={getHeroes().length === 0}
      />
    </Grid>
  );
}
NavDecadesItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  shortTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
