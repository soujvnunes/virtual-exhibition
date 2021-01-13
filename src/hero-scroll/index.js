import { toKebabCase } from "../modules";
import {
  HERO_CAPTION,
  HERO_DESCRIPTION,
  HERO_GALLERY,
  HERO_SLOTS,
  HERO_TITLE,
} from "../constants";
import Hero from "../hero";

function HeroScroll() {
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
      title: HERO_TITLE[index],
      id: toKebabCase({ value: HERO_TITLE[index] }),
      description: HERO_DESCRIPTION[index],
      gallery: generateGallery(index),
    });
  }

  return (
    <>
      {heroes.map(({ id, ...hero }) => (
        <Hero key={id} {...hero} />
      ))}
    </>
  );
}

export default HeroScroll;
