import { findIndex } from "lodash";
import PropTypes from "prop-types";
import LinearProgress from "../linear-progress";
import { getHeroes, useConsumer } from "../modules";
import useStyles from "./style";

export default function NavProgress({ onIntro, ...props }) {
  const { root } = useStyles();
  const { hero } = useConsumer();
  const progress = 100 / getHeroes().length;
  const progressFragment = findIndex(getHeroes(), hero);
  const progressOnFragment =
    progressFragment === 0
      ? progress - progress / 2
      : progress * progressFragment + progress / 2;

  return (
    <LinearProgress
      classes={{ root }}
      variant="determinate"
      value={onIntro ? progressOnFragment : 0}
      {...props}
    />
  );
}
NavProgress.propTypes = {
  onIntro: PropTypes.bool.isRequired,
};
