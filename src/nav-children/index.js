import PropTypes from "prop-types";
import { DISPATCH_UPDATE_HERO } from "../constants";
import { getHeroes, useConsumer } from "../modules";
import NavDecade from "../nav-decade";
import NavExplore from "../nav-explore";

function NavChildren({ explore }) {
  const [, dispatch] = useConsumer();

  function handleDecadeClick(value) {
    dispatch({ type: DISPATCH_UPDATE_HERO, payload: value });
  }

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
