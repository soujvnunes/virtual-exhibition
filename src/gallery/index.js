import { Grid, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { DISPATCH_UPDATE_BACKGROUND } from "../constants";
import GalleryItem from "../gallery-item";
import IconButton from "../icon-button";
import { useConsumer, _ } from "../modules";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(4),
  },
}));

function Gallery() {
  const [{ hero }, dispatch] = useConsumer();
  const { gallery } = hero;
  const [slice, setSlice] = useState(0);
  const { root } = useStyles();
  const deltaSlice = _("sm down") ? 1 : 5;
  const maxAmount = gallery.length;
  const handleIncrementClick = () => {
    setSlice((prevSlice) => Math.min(maxAmount, prevSlice + deltaSlice));
  };
  const handleDecrementClick = () => {
    setSlice((prevSlice) => Math.max(0, prevSlice - deltaSlice));
  };
  const controller = (children) => (
    <Grid
      container
      item
      xs={2}
      md={1}
      alignContent="center"
      justify="center"
      {...{ children }}
    />
  );
  const sliceAmount = slice + deltaSlice;

  useEffect(() => {
    setSlice(0);
  }, [deltaSlice]);

  useEffect(() => {
    dispatch({ type: DISPATCH_UPDATE_BACKGROUND, payload: gallery[0].img });
  }, []);

  return (
    <Grid container item xs={12} classes={{ root }} spacing={2}>
      {controller(
        !(slice === 0) && (
          <IconButton onClick={handleDecrementClick}>
            <Icon>chevron_left</Icon>
          </IconButton>
        ),
      )}
      {gallery.slice(slice, sliceAmount).map(({ img, figcaption }) => (
        <Grid item xs md={2} key={figcaption}>
          <GalleryItem image={img} alt={figcaption} />
        </Grid>
      ))}
      {controller(
        !(sliceAmount >= maxAmount) && (
          <IconButton onClick={handleIncrementClick}>
            <Icon>chevron_right</Icon>
          </IconButton>
        ),
      )}
    </Grid>
  );
}

export default Gallery;
