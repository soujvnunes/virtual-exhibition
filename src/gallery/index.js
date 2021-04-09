import { Grid, Icon } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./style";
import GalleryItem from "../gallery-item";
import IconButton from "../icon-button";
import { useConsumer, _ } from "../modules";
import GalleryController from "../gallery-controller";

export default function Gallery() {
  const [slice, setSlice] = useState(0);
  const [deltaSliceAmount, setDeltaSliceAmount] = useState(0);
  const { root } = useStyles();
  const {
    hero: { gallery },
  } = useConsumer();
  const deltaSlice = _("sm down") ? 1 : 5;
  const maxAmount = gallery.length;
  const sliceAmount = slice + deltaSlice;
  const renderItems = gallery
    .slice(slice, sliceAmount)
    .map(({ img, figcaption }, index) => (
      <Grid item xs md={2} key={figcaption}>
        <GalleryItem
          image={img}
          alt={figcaption}
          index={index + deltaSlice * deltaSliceAmount}
          onReset={handleReset}
          gallery={gallery}
        />
      </Grid>
    ));

  useEffect(() => {
    handleReset();
  }, [deltaSlice, gallery]);
  function handleReset() {
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
      <GalleryController>
        <IconButton onClick={handlePreviousClick} disabled={slice <= 0}>
          <Icon>chevron_left</Icon>
        </IconButton>
      </GalleryController>
      {renderItems}
      <GalleryController>
        <IconButton
          onClick={handleNextClick}
          disabled={sliceAmount >= maxAmount}>
          <Icon>chevron_right</Icon>
        </IconButton>
      </GalleryController>
    </Grid>
  );
}
