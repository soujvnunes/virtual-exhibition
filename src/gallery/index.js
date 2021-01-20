import { Grid, Icon } from "@material-ui/core";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useStyles from "./style";
import GalleryItem from "../gallery-item";
import IconButton from "../icon-button";
import { _ } from "../modules";
import GalleryController from "../gallery-controller";

function Gallery({ gallery }) {
  const [slice, setSlice] = useState(0);
  const [deltaSliceAmount, setDeltaSliceAmount] = useState(0);
  const { root } = useStyles();
  const deltaSlice = _("sm down") ? 1 : 5;
  const maxAmount = gallery.length;
  const sliceAmount = slice + deltaSlice;

  useEffect(() => {
    onReset();
  }, [deltaSlice, gallery]);

  function onReset() {
    setSlice(0);
    setDeltaSliceAmount(0);
  }
  function handlePreviousClick() {
    setSlice((prevSlice) => Math.max(0, prevSlice - deltaSlice));
    setDeltaSliceAmount((prevDeltaSliceAmount) => prevDeltaSliceAmount - 1);
  }
  function handleNextClick() {
    setSlice((prevSlice) => Math.min(maxAmount, prevSlice + deltaSlice));
    setDeltaSliceAmount((prevDeltaSliceAmount) => prevDeltaSliceAmount + 1);
  }

  return (
    <Grid container item xs={12} classes={{ root }} spacing={2}>
      <GalleryController unrendered={slice === 0}>
        <IconButton onClick={handlePreviousClick}>
          <Icon>chevron_left</Icon>
        </IconButton>
      </GalleryController>
      {gallery.slice(slice, sliceAmount).map(({ img, figcaption }, index) => (
        <Grid item xs md={2} key={figcaption}>
          <GalleryItem
            image={img}
            alt={figcaption}
            index={index + deltaSlice * deltaSliceAmount}
            {...{ gallery, onReset }}
          />
        </Grid>
      ))}
      <GalleryController unrendered={sliceAmount >= maxAmount}>
        <IconButton onClick={handleNextClick}>
          <Icon>chevron_right</Icon>
        </IconButton>
      </GalleryController>
    </Grid>
  );
}

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
