import {
  CardActionArea,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useState } from "react";

const useStyles = makeStyles(({ spacing, palette, transitions }) => ({
  root: {
    overflow: "hidden",
    borderRadius: spacing(3),
    borderStyle: "solid",
    borderWidth: spacing(0.25),
    borderColor: ({ hover }) => (hover ? palette.text.primary : "transparent"),
    transition: transitions.create(["border-color"]),
    "&:hover img": {
      opacity: ({ hover }) => (hover ? 0 : 1),
      transition: transitions.create(["opacity"]),
    },
  },
  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

function GalleryItem({ image, alt }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const { root, paper } = useStyles({ hover });
  const handleClick = () => setOpen((prevState) => !prevState);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <>
      <CardActionArea
        classes={{ root }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia component="img" height="112" {...{ image, alt }} />
      </CardActionArea>
      <Dialog
        maxWidth="lg"
        onClose={handleClick}
        open={open}
        classes={{ paper }}
      >
        <CardMedia component="img" {...{ image, alt }} />
        <DialogContent>
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
