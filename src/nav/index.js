import { Toolbar, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { memo, useEffect, useState } from "react";
import { findIndex } from "lodash";
import NavProgress from "../nav-progress";
import { getHeroes, useConsumer, useWindowDimension } from "../modules";
import NavChildren from "../nav-children";

const useStyles = makeStyles(() => ({
  root: {
    top: "auto",
    bottom: 0,
    justifyContent: "center",
  },
}));

function Nav() {
  const [{ hero }] = useConsumer();
  const [explore, setExplore] = useState(false);
  const { root } = useStyles();
  const { height, scroll } = useWindowDimension();
  const exploreScroll = scroll > height / 2;
  const progressFragment = 100 / getHeroes().length;
  const progressOnFragment =
    findIndex(getHeroes(), hero) === 0
      ? progressFragment - progressFragment / 2
      : progressFragment * findIndex(getHeroes(), hero) + progressFragment / 2;
  const progreess = exploreScroll ? progressOnFragment : 0;

  useEffect(() => {
    setExplore(exploreScroll);
  }, [scroll]);

  return (
    <AppBar classes={{ root }} component="nav">
      <NavProgress value={progreess} />
      <Toolbar disableGutters={explore}>
        <NavChildren {...{ explore }} />
      </Toolbar>
    </AppBar>
  );
}

export default memo(
  Nav,
  (prevState, nextState) => prevState.explore === nextState.explore,
);
