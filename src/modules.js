import { useMediaQuery } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { useContext, useLayoutEffect, useState } from "react";
import {
  BAR_HEIGHT,
  HEADING_TYPE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  HERO_GALLERY,
  HERO_SLOTS,
  HERO_TITLE,
  HERO_CAPTION,
  DISPATCH_UPDATE_HERO,
  DISPATCH_UPDATE_BACKGROUND,
  STATE_CONTEXT,
  DISPATCH_CONTEXT,
  DISPATCH_UPDATE_THEME,
  DISPATCH_UPDATE_HERO_REF,
  DISPATCH_UPDATE_ANIMATE_SCROLL,
  VIDEO_SLOTS,
  VIDEO_SRC,
  VIDEO_TITLE,
  HERO_DESCRIPTION,
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

  return useMediaQuery(({ breakpoints }) =>
    breakpoints[mediaQuery[1]](mediaQuery[0]),
  );
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
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [scroll, setScroll] = useState(0);
  const state = { width, height, scroll };

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setScroll(window.scrollY);
    }
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
      description: HERO_DESCRIPTION[index],
      id: toKebabCase({ value: HERO_TITLE[index] }),
      gallery: generateGallery(index),
    });
  }

  return heroes;
}

export function getReducer(state, { type, payload }) {
  switch (type) {
    case DISPATCH_UPDATE_HERO:
      return {
        ...state,
        hero: payload,
      };
    case DISPATCH_UPDATE_BACKGROUND:
      return {
        ...state,
        background: payload,
      };
    case DISPATCH_UPDATE_THEME:
      return {
        ...state,
        theme: payload,
      };
    case DISPATCH_UPDATE_HERO_REF:
      return {
        ...state,
        heroRef: payload,
      };
    case DISPATCH_UPDATE_ANIMATE_SCROLL:
      return {
        ...state,
        animateScroll: payload,
      };
    default:
      throw new Error("Unexpected action.");
  }
}

export function useConsumer() {
  const state = useContext(STATE_CONTEXT);
  const dispatch = useContext(DISPATCH_CONTEXT);

  return { ...state, dispatch };
}

export function scrollToRef(ref) {
  window.scrollTo(0, ref.current.offsetTop);
}

export function getVideos() {
  const videos = [];

  for (let index = 0; index < VIDEO_SLOTS.length; index += 1) {
    videos.push({
      src: VIDEO_SRC[index],
      title: VIDEO_TITLE[index],
    });
  }

  return videos;
}

export function useCache({ key = "" } = {}) {
  const cachedValue = localStorage.getItem(key);

  function setCache({ setKey = "", cache = null, expires = 1 } = null) {
    try {
      if (!cache) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(setKey, JSON.stringify(cache), { expires });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  return [JSON.parse(cachedValue) || null, setCache];
}
