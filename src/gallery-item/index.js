import {
  CardActionArea,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  Icon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { DISPATCH_UPDATE_BACKGROUND } from "../constants";
import { useConsumer } from "../modules";

const backdropFilter = "saturate(160%) brightness(32%) blur(8px)";

const useStyles = makeStyles(({ spacing, palette, transitions }) => ({
  root: {
    backdropFilter,
    overflow: "hidden",
    borderRadius: spacing(3),
    borderStyle: "solid",
    borderWidth: spacing(0.25),
    borderColor: ({ hover }) =>
      hover ? palette.action.active : palette.action.disabled,
    transition: transitions.create(["border-color"]),
  },
  cardMedia: {
    opacity: ({ hover }) => (hover ? 0 : 1),
    transition: transitions.create(["opacity"]),
  },
  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    maxHeight: `calc(100vh - ${spacing(16)}px)`,
    backgroundImage: ({ image }) => `url(${image})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  },
  dialogContent: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "absolute",
    width: "100%",
    bottom: 0,
    "& p": {
      margin: 0,
    },
  },
  backdrop: {
    backdropFilter,
    backgroundColor: "transparent",
  },
  fullScreen: {
    position: "absolute",
    inset: 0,
    opacity: ({ hover }) => (hover ? 1 : 0),
    transition: transitions.create(["opacity"]),
  },
}));

function GalleryItem({ image, alt }) {
  const [, dispatch] = useConsumer();
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const {
    root,
    paper,
    dialogContent,
    backdrop,
    fullScreen,
    cardMedia,
  } = useStyles({
    hover,
    image,
  });
  const handleClick = () => setOpen((prevState) => !prevState);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEffect(() => {
    dispatch({ type: DISPATCH_UPDATE_BACKGROUND, payload: image });
  }, [hover]);

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
        <CardMedia
          classes={{ root: cardMedia }}
          component="img"
          height="112"
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
        <div style={{ width: "100vw", height: "100vh" }} />
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
