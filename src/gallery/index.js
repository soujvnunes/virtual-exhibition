import { Grid, Icon } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./style";
import { DISPATCH_UPDATE_BACKGROUND } from "../constants";
import GalleryItem from "../gallery-item";
import IconButton from "../icon-button";
import { useConsumer, _ } from "../modules";
import GalleryController from "../gallery-controller";

function Gallery() {
  const [{ hero }, dispatch] = useConsumer();
  const { gallery } = hero;
  const [slice, setSlice] = useState(0);
  const { root } = useStyles();
  const deltaSlice = _("sm down") ? 1 : 5;
  const maxAmount = gallery.length;
  const sliceAmount = slice + deltaSlice;

  useEffect(() => {
    setSlice(0);
  }, [deltaSlice]);

  useEffect(() => {
    dispatch({ type: DISPATCH_UPDATE_BACKGROUND, payload: gallery[0].img });
  }, []);

  function handleIncrementClick() {
    setSlice((prevSlice) => Math.min(maxAmount, prevSlice + deltaSlice));
  }
  function handleDecrementClick() {
    setSlice((prevSlice) => Math.max(0, prevSlice - deltaSlice));
  }

  return (
    <Grid container item xs={12} classes={{ root }} spacing={2}>
      <GalleryController unrendered={slice === 0}>
        <IconButton onClick={handleDecrementClick}>
          <Icon>chevron_left</Icon>
        </IconButton>
      </GalleryController>
      {gallery.slice(slice, sliceAmount).map(({ img, figcaption }) => (
        <Grid item xs md={2} key={figcaption}>
          <GalleryItem image={img} alt={figcaption} />
        </Grid>
      ))}
      <GalleryController unrendered={sliceAmount >= maxAmount}>
        <IconButton onClick={handleIncrementClick}>
          <Icon>chevron_right</Icon>
        </IconButton>
      </GalleryController>
    </Grid>
  );
}

export default Gallery;
