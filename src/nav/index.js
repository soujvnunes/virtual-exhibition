import { Toolbar, AppBar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { findIndex } from "lodash";
import useStyles from "./style";
import NavProgress from "../nav-progress";
import { getHeroes, useConsumer, useWindowDimension } from "../modules";
import NavChildren from "../nav-children";

function Nav() {
  const [{ hero }] = useConsumer();
  const [explore, setExplore] = useState(false);
  const { root } = useStyles();
  const { height, scroll } = useWindowDimension();
  const exploreScroll = scroll > height / 2;
  const progress = 100 / getHeroes().length;
  const progressFragment = findIndex(getHeroes(), hero);
  const progressOnFragment =
    progressFragment === 0
      ? progress - progress / 2
      : progress * progressFragment + progress / 2;

  useEffect(() => {
    setExplore(exploreScroll);
  }, [scroll]);

  return (
    <AppBar classes={{ root }} component="nav">
      <NavProgress value={exploreScroll ? progressOnFragment : 0} />
      <Toolbar disableGutters={explore}>
        <NavChildren {...{ explore }} />
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
