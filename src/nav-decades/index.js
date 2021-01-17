import React from "react";
import PropTypes from "prop-types";
import { Zoom } from "@material-ui/core";
import { getHeroes, useConsumer } from "../modules";
import NavDecadesItem from "../nav-decades-item";
import { DISPATCH_UPDATE_BACKGROUND, DISPATCH_UPDATE_HERO } from "../constants";

function NavDecades({ onDecades }) {
  const [, dispatch] = useConsumer();

  function handleDecadeClick(value) {
    dispatch({ type: DISPATCH_UPDATE_HERO, payload: value });
    dispatch({
      type: DISPATCH_UPDATE_BACKGROUND,
      payload: value.gallery[0].img,
    });
  }

  return getHeroes().map(({ shortTitle, ...hero }, index) => (
    <Zoom
      key={shortTitle}
      in={onDecades}
      style={{
        transitionDelay: onDecades ? `${166 * ((index + 1) / 2)}ms` : "0ms",
      }}
    >
      <NavDecadesItem
        onClick={() => handleDecadeClick(hero)}
        {...{ shortTitle, index }}
      />
    </Zoom>
  ));
}

NavDecades.propTypes = {
  onDecades: PropTypes.bool.isRequired,
};

export default NavDecades;
