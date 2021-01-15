import { useMediaQuery } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { useLayoutEffect, useState } from "react";
import {
  BAR_HEIGHT,
  HEADING_TYPE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  HERO_DESCRIPTION,
  HERO_GALLERY,
  HERO_SLOTS,
  HERO_TITLE,
  HERO_CAPTION,
} from "./constants";

export function toKebabCase({ value = null } = {}) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\s|'|.]/g, (match) => ({ " ": "-", "'": "_", ".": "" }[match]))
    .replace(/[\u0300-\u036f]/g, "");
}

export function _(breakpoint = "sm down") {
  const mediaQuery = breakpoint.split(" ").map((media) => media);
  const { media, query } = { media: mediaQuery[0], query: mediaQuery[1] };

  if (query === "up") {
    return useMediaQuery(({ breakpoints }) => breakpoints.up(media));
  }

  return useMediaQuery(({ breakpoints }) => breakpoints.down(media));
}

export function theme({ type } = {}) {
  const typography = {
    fontFamily: [
      "'Lucida Sans Unicode', -apple-system, BlinkMacSystemFont,	'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans'",
    ].join(", "),
    setValue(props, value) {
      while (props.length) {
        this[props.pop()] = value;
      }
    },
  };

  typography.setValue(
    ["h1", "h2", "h3", "h4", "h5", "h6", "button"],
    HEADING_TYPE,
  );

  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type,
        primary: {
          main: PRIMARY_COLOR,
        },
        secondary: {
          main: SECONDARY_COLOR,
        },
      },
      typography,
      mixins: {
        toolbar: {
          minHeight: BAR_HEIGHT,
        },
      },
      props: {
        MuiAppBar: {
          elevation: 0,
          color: "transparent",
        },
      },
    }),
  );
}

export function useWindowDimension(params = "") {
  const [state, setState] = useState({ width: 0, height: 0, scroll: 0 });
  const updateSize = () => {
    setState({
      width: window.innerWidth,
      height: window.innerHeight,
      scroll: window.scrollY,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    window.addEventListener("scroll", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", updateSize);
    };
  }, []);

  if (params) {
    return state[params];
  }

  return state;
}

export function getHeroes() {
  const heroes = [];
  const generateGallery = (index) => {
    const heroGallery = [];

    for (
      let galleryIndex = 0;
      galleryIndex < HERO_GALLERY[index].length;
      galleryIndex += 1
    ) {
      heroGallery.push({
        img: HERO_GALLERY[index][galleryIndex],
        figcaption: HERO_CAPTION[index][galleryIndex],
      });
    }

    return heroGallery;
  };

  for (let index = 0; index < HERO_SLOTS.length; index += 1) {
    heroes.push({
      shortTitle: HERO_TITLE[index].replace(/\D/g, ""),
      title: HERO_TITLE[index],
      id: toKebabCase({ value: HERO_TITLE[index] }),
      description: HERO_DESCRIPTION[index],
      gallery: generateGallery(index),
    });
  }

  return heroes;
}
