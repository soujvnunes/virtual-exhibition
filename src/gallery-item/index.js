import { CardActionArea, CardMedia, Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useState } from "react";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    borderRadius: spacing(3),
    overflow: "hidden",
  },
}));

// eslint-disable-next-line react/prop-types
function GalleryItem({ image }) {
  const [{ open }, setState] = useState({ open: false });
  const classes = useStyles();
  const media = ({ height } = {}) => (
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      title="Contemplative Reptile"
      {...{ image, ...(height && { height }) }}
    />
  );
  const handleClick = () => {
    setState((state) => ({
      open: !state.open,
    }));
  };

  return (
    <>
      <CardActionArea className={classes.root} onClick={handleClick}>
        {media({ height: "112" })}
      </CardActionArea>
      <Dialog
        maxWidth="lg"
        onClose={handleClick}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {media()}
      </Dialog>
    </>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default GalleryItem;
