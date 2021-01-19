import {
  CardActionArea,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  Icon,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import useStyles from "./style";
import { DISPATCH_UPDATE_BACKGROUND } from "../constants";
import { useConsumer } from "../modules";
import { Rapport } from "../asset";

function GalleryItem({ image, alt }) {
  const [, dispatch] = useConsumer();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const {
    root,
    paper,
    dialogContent,
    backdrop,
    fullScreen,
    cardMedia,
    img,
  } = useStyles({
    hover,
    image,
  });

  function handleClick() {
    setOpen((prevState) => !prevState);
  }
  function handleMouseEnter() {
    dispatch({ type: DISPATCH_UPDATE_BACKGROUND, payload: image });
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  function handleLoad() {
    setLoading(false);
  }

  return (
    <>
      <CardActionArea
        classes={{ root }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Grid
          container
          alignItems="center"
          justify="center"
          classes={{ root: fullScreen }}
        >
          <Icon>fullscreen</Icon>
        </Grid>
        {loading && (
          <img
            src={Rapport}
            alt="carregando"
            style={{ position: "absolute", inset: 0 }}
          />
        )}
        <CardMedia
          classes={{ root: cardMedia }}
          component="img"
          height="112"
          onLoad={handleLoad}
          {...{ image, alt }}
        />
      </CardActionArea>
      <Dialog
        maxWidth="lg"
        onClose={handleClick}
        open={open}
        classes={{ paper }}
        BackdropProps={{ classes: { root: backdrop } }}
      >
        <img className={img} src={image} {...{ alt }} />
        <DialogContent classes={{ root: dialogContent }}>
          <DialogContentText align="center">{alt}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GalleryItem;
