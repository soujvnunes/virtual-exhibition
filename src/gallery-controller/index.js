import { Grid } from "@material-ui/core";

export default function GalleryController(props) {
  return (
    <Grid
      container
      item
      xs={2}
      md={1}
      alignContent="center"
      justify="center"
      {...props}
    />
  );
}
