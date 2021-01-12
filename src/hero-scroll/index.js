import { toKebabCase } from "../modules";
import {
  HERO_DESCRIPTION,
  HERO_GALLERY,
  HERO_SLOTS,
  HERO_TITLE,
} from "../constants";
import Hero from "../hero";

function HeroScroll() {
  const heroes = [];

  for (let index = 0; index < HERO_SLOTS.length; index += 1) {
    heroes.push({
      title: HERO_TITLE[index],
      id: toKebabCase({ value: HERO_TITLE[index] }),
      description: HERO_DESCRIPTION[index],
      gallery: HERO_GALLERY[index],
      intro: index === 0,
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
