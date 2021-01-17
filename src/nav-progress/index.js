import { LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { findIndex } from "lodash";
import PropTypes from "prop-types";
import { getHeroes, useConsumer } from "../modules";

function NavProgress({ onIntro, ...props }) {
  const [{ hero }] = useConsumer();
  const progress = 100 / getHeroes().length;
  const progressFragment = findIndex(getHeroes(), hero);
  const progressOnFragment =
    progressFragment === 0
      ? progress - progress / 2
      : progress * progressFragment + progress / 2;

  return (
    <LinearProgress
      variant="determinate"
      value={onIntro ? progressOnFragment : 0}
      {...{ ...props }}
    />
  );
}

NavProgress.propTypes = {
  onIntro: PropTypes.bool.isRequired,
};

export default withStyles(({ palette, spacing }) => ({
  root: {
    height: spacing(0.25),
    width: "100%",
    position: "absolute",
  },
  colorPrimary: {
    backgroundColor: palette.action.disabled,
  },
  bar: {
    backgroundColor: palette.text.primary,
  },
}))(NavProgress);
