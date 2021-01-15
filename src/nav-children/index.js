import { useContext } from "react";
import PropTypes from "prop-types";
import { HERO_CONTEXT } from "../constants";
import { getHeroes } from "../modules";
import NavDecade from "../nav-decade";
import NavExplore from "../nav-explore";

function NavChildren({ explore }) {
  const { setHero } = useContext(HERO_CONTEXT);
  const handleDecadeClick = (value) => {
    setHero(value);
  };

  if (explore) {
    return getHeroes().map(({ shortTitle, ...hero }, index) => (
      <NavDecade
        key={shortTitle}
        onClick={() => handleDecadeClick(hero)}
        {...{ shortTitle, index }}
      />
    ));
  }

  return <NavExplore />;
}

NavChildren.propTypes = {
  explore: PropTypes.bool.isRequired,
};

export default NavChildren;
