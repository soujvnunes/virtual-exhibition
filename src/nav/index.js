import { Toolbar, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useEffect, useState } from "react";
import { findIndex } from "lodash";
import NavProgress from "../nav-progress";
import { getHeroes, useWindowDimension } from "../modules";
import { HERO_CONTEXT } from "../constants";
import NavChildren from "../nav-children";

const useStyles = makeStyles(() => ({
  root: {
    top: "auto",
    bottom: 0,
    justifyContent: "center",
  },
}));

function Nav() {
  const { hero: heroContext, setHero } = useContext(HERO_CONTEXT);
  const [explore, setExplore] = useState(true);
  const { root } = useStyles();
  const { height, scroll } = useWindowDimension();
  const exploreScroll = scroll > height / 2;
  const progressFragment = 100 / getHeroes().length;
  const progressOnFragment =
    findIndex(getHeroes(), heroContext) === 0
      ? progressFragment - progressFragment / 2
      : progressFragment * findIndex(getHeroes(), heroContext) +
        progressFragment / 2;
  const progreess = exploreScroll ? progressOnFragment : 0;

  useEffect(() => {
    setExplore(exploreScroll);

    if (exploreScroll) {
      setHero(getHeroes()[0]);
    }
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

export default Nav;
