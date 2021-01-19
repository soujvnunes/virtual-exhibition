import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function Section({ id, ...props }) {
  return <Container component="section" {...{ ...props, id }} />;
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
};

export default withStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    position: "relative",
  },
}))(Section);
