import { Grid, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useEffect, useState } from "react";
import { HERO_CONTEXT, SECTION_BACKGROUND_CONTEXT } from "../constants";
import GalleryItem from "../gallery-item";
import IconButton from "../icon-button";
import { _ } from "../modules";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(4),
  },
}));

function Gallery() {
  const { hero } = useContext(HERO_CONTEXT);
  const { gallery } = hero;
  const { setBackground } = useContext(SECTION_BACKGROUND_CONTEXT);
  const [slice, setSlice] = useState(0);
  const { root } = useStyles();
  const deltaSlice = _("sm down") ? 1 : 4;
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
    setBackground(gallery[0].img);
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
      <Grid container item xs={8} md={10}>
        {gallery.slice(slice, sliceAmount).map(({ img, figcaption }) => (
          <Grid item xs md={3} key={figcaption} style={{ padding: "0 8px" }}>
            <GalleryItem image={img} alt={figcaption} />
          </Grid>
        ))}
      </Grid>
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
