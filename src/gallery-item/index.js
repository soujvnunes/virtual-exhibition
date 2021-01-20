import {
  AppBar,
  CardActionArea,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  Icon,
  Toolbar,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import useStyles from "./style";
import { DISPATCH_UPDATE_BACKGROUND } from "../constants";
import { useConsumer, _ } from "../modules";
import { Rapport } from "../asset";
import IconButton from "../icon-button";

function GalleryItem({ image, gallery, index, onReset }) {
  const [, dispatch] = useConsumer();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [viewImage, setViewImage] = useState(index);
  const maxImages = gallery.length - 1;
  const {
    root,
    paper,
    backdrop,
    fullScreen,
    cardMedia,
    img,
    dialogContent,
    appBar,
    iconButtonClose,
  } = useStyles({
    onHover,
    isMobile: _("sm down"),
  });

  function handleDialogClick() {
    setOpen((prevState) => !prevState);

    if (open) {
      onReset();
    }
  }
  function handleMouseEnter() {
    dispatch({ type: DISPATCH_UPDATE_BACKGROUND, payload: image });
    setOnHover(true);
  }
  function handleMouseLeave() {
    setOnHover(false);
  }
  function handleLoad() {
    setLoading(false);
  }
  function handleDecrementClick() {
    setViewImage((prevViewImage) => prevViewImage - 1);
  }
  function handleIncrementClick() {
    setViewImage((prevViewImage) => prevViewImage + 1);
  }

  return (
    <>
      <CardActionArea
        classes={{ root }}
        onClick={handleDialogClick}
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
          alt={gallery[viewImage].figcaption}
          {...{ image }}
        />
      </CardActionArea>
      <Dialog
        maxWidth="lg"
        onClose={handleDialogClick}
        open={open}
        classes={{ paper }}
        BackdropProps={{ classes: { root: backdrop } }}
      >
        <img
          className={img}
          src={gallery[viewImage].img}
          alt={gallery[viewImage].figcaption}
        />
        <DialogContent classes={{ root: dialogContent }}>
          <DialogContentText align="center">
            {gallery[viewImage].figcaption}
          </DialogContentText>
        </DialogContent>
        <AppBar classes={{ root: appBar }}>
          <Toolbar style={{ justifyContent: "center" }}>
            <IconButton
              onClick={handleDecrementClick}
              disabled={viewImage === 0}
            >
              <Icon>chevron_left</Icon>
            </IconButton>
            <IconButton
              classes={{ root: iconButtonClose }}
              onClick={handleDialogClick}
            >
              <Icon>close</Icon>
            </IconButton>
            <IconButton
              onClick={handleIncrementClick}
              disabled={viewImage >= maxImages}
            >
              <Icon>chevron_right</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Dialog>
    </>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default GalleryItem;
