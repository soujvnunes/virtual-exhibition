import PropTypes from "prop-types";
import Hero from "../hero";

function HeroScroll({ heroes }) {
  console.log(heroes);

  return (
    <>
      {heroes.slice(0, 1).map(({ id, ...hero }) => (
        <Hero key={id} {...hero} />
      ))}
    </>
  );
}

HeroScroll.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.objectOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
        ]),
      ),
    ]),
  ).isRequired,
};

export default HeroScroll;
