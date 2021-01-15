import { CssBaseline } from "@material-ui/core";
import { toKebabCase } from "../modules";
import {
  HERO_CAPTION,
  HERO_DESCRIPTION,
  HERO_GALLERY,
  HERO_SLOTS,
  HERO_TITLE,
} from "../constants";
import Navigation from "../navigation";
import AppBar from "../app-bar";
import Intro from "../intro";
import HeroScroll from "../hero-scroll";
import Provider from "../provider";

function App() {
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

  const commonProps = { heroes };

  return (
    <Provider>
      <CssBaseline />
      <Navigation {...commonProps} />
      <AppBar />
      <Intro />
      <HeroScroll {...commonProps} />
    </Provider>
  );
}

export default App;
