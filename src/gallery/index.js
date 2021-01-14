import { Grid, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import GalleryItem from "../gallery-item";
import IconButton from "../icon-button";
import { _ } from "../modules";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(4),
  },
}));

function Gallery({ photos }) {
  const { root } = useStyles();
  const deltaSlice = _("sm down") ? 1 : 4;
  const maxAmount = photos.length;
  const [slice, setSlice] = useState(0);
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
      xs={3}
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

  return (
    <Grid container item xs={12} spacing={2} classes={{ root }}>
      {controller(
        !(slice === 0) && (
          <IconButton onClick={handleDecrementClick}>
            <Icon>chevron_left</Icon>
          </IconButton>
        ),
      )}
      <Grid container item xs={6} md={10} spacing={2}>
        {photos.slice(slice, sliceAmount).map(({ img, figcaption }) => (
          <Grid item xs md={3} key={figcaption}>
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

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};

export default Gallery;
