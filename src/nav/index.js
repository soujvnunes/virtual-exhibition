import { Toolbar, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useEffect, useState } from "react";
import { findIndex } from "lodash";
import NavProgress from "../nav-progress";
import { getHeroes, useWindowDimension } from "../modules";
import { HERO_CONTEXT } from "../constants";
import NavDecade from "../nav-decade";
import NavExplore from "../nav-explore";

const useStyles = makeStyles(() => ({
  root: {
    top: "auto",
    bottom: 0,
    justifyContent: "center",
  },
}));

function Nav() {
  const { hero: heroContext, setHero } = useContext(HERO_CONTEXT);
  const [explore, setExplore] = useState(false);
  const { root } = useStyles({ explore });
  const { height, scroll } = useWindowDimension();
  const handleDecadeClick = (value) => {
    setHero(value);
  };
  const exploreScroll = scroll > height / 2;
  const processPreCompleted = 100 / getHeroes().length;
  const process = exploreScroll
    ? Math.abs(
        ((100 - processPreCompleted) / getHeroes().length + 1) *
          findIndex(getHeroes(), heroContext + 1),
      )
    : 0;

  useEffect(() => {
    setExplore(exploreScroll);

    if (scroll > height / 2) {
      setHero(getHeroes()[0]);
    }
  }, [scroll]);

  const renderExplore = () => {
    if (!explore) {
      return <NavExplore />;
    }

    return getHeroes().map(({ shortTitle, ...hero }, index) => (
      <NavDecade
        key={shortTitle}
        onClick={() => handleDecadeClick(hero)}
        {...{ shortTitle, index }}
      />
    ));
  };

  return (
    <AppBar classes={{ root }} component="nav">
      <NavProgress value={process} />
      <Toolbar>{renderExplore()}</Toolbar>
    </AppBar>
  );
}

export default Nav;
