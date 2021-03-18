import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export default function GalleryController({ unrendered, children }) {
  return (
    <Grid
      container
      item
      xs={2}
      md={1}
      alignContent="center"
      justify="center"
      {...(!unrendered && { children })}
    />
  );
}
GalleryController.propTypes = {
  unrendered: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
