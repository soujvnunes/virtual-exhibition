import { makeStyles } from "@material-ui/core/styles";
import { useWindowDimension } from "../modules";
import {
  HERO_AMOUNT,
  HERO_DESCRIPTION,
  HERO_PHOTOS,
  HERO_SLOTS,
  HERO_TITLE,
} from "../constants";

const useStyles = makeStyles(() => ({
  root: {
    height: ({ height }) => height * HERO_AMOUNT,
  },
  hero: {
    height: ({ height }) => height,
  },
}));

function HeroScroll() {
  const classes = useStyles({ height: useWindowDimension("height") });
  const heroes = [];

  for (let index = 0; index < HERO_SLOTS.length; index += 1) {
    heroes.push({
      title: HERO_TITLE[index],
      description: HERO_DESCRIPTION[index],
      photos: HERO_PHOTOS[index],
    });
  }

  return (
    <div className={classes.root}>
      {heroes.map((hero) => (
        <div
          key={hero.title}
          style={hero.photos && { background: `url(${hero.photos[0]})` }}
          className={classes.hero}
        />
      ))}
    </div>
  );
}

export default HeroScroll;
