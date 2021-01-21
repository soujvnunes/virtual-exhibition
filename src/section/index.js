import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";

function Section({ id, ...props }) {
  const { root } = useStyles();

  return (
    <Container classes={{ root }} component="section" {...{ ...props, id }} />
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Section;
