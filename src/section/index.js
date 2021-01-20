import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function Section({ id, ...props }) {
  return <Container component="section" {...{ ...props, id }} />;
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
};

export default withStyles(({ spacing, mixins }) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    position: "relative",
    paddingTop: spacing(mixins.toolbar.minHeight / 8),
    paddingBottom: spacing(mixins.toolbar.minHeight / 8),
  },
}))(Section);
