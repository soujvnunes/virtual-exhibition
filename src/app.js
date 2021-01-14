import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, toKebabCase } from "./modules";
import {
  HERO_CAPTION,
  HERO_DESCRIPTION,
  HERO_GALLERY,
  HERO_SHORT_TITLE,
  HERO_SLOTS,
  HERO_TITLE,
  KEY_THEME_DARK,
} from "./constants";
import Navigation from "./navigation";
import AppBar from "./app-bar";
import Intro from "./intro";
import HeroScroll from "./hero-scroll";

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
      shortTitle: HERO_SHORT_TITLE[index],
      title: HERO_TITLE[index],
      id: toKebabCase({ value: HERO_TITLE[index] }),
      description: HERO_DESCRIPTION[index],
      gallery: generateGallery(index),
    });
  }

  const commonProps = { heroes };

  return (
    <ThemeProvider theme={theme({ type: KEY_THEME_DARK })}>
      <CssBaseline />
      <Navigation {...commonProps} />
      <AppBar />
      <Intro />
      <HeroScroll {...commonProps} />
    </ThemeProvider>
  );
}

export default App;
