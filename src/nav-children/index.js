import PropTypes from "prop-types";
import { DISPATCH_UPDATE_BACKGROUND, DISPATCH_UPDATE_HERO } from "../constants";
import { getHeroes, useConsumer } from "../modules";
import NavDecade from "../nav-decade";
import NavIntro from "../nav-intro";

function NavChildren({ explore }) {
  const [, dispatch] = useConsumer();

  function handleDecadeClick(value) {
    dispatch({ type: DISPATCH_UPDATE_HERO, payload: value });
    dispatch({
      type: DISPATCH_UPDATE_BACKGROUND,
      payload: value.gallery[0].img,
    });
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

  return <NavIntro />;
}

NavChildren.propTypes = {
  explore: PropTypes.bool.isRequired,
};

export default NavChildren;
