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
  const classes = useStyles();
  const deltaAmount = _("sm down") ? 1 : 5;
  const maxAmount = photos.length;
  const initialState = {
    prevAmount: 0,
    amount: deltaAmount,
  };
  const [{ prevAmount, amount }, setState] = useState(initialState);
  const handleIncrementClick = () => {
    setState((state) => ({
      prevAmount: state.amount,
      amount:
        amount + deltaAmount > maxAmount ? maxAmount : amount + deltaAmount,
    }));
  };
  const handleDecrementClick = () => {
    setState((state) => ({
      prevAmount: amount - deltaAmount * 2 < 0 ? 0 : amount - deltaAmount * 2,
      amount: state.amount - deltaAmount,
    }));
  };

  useEffect(() => {
    setState(initialState);
  }, [deltaAmount]);

  return (
    <Grid container item xs={12} spacing={2} className={classes.root}>
      <Grid container item xs={3} md={1} alignContent="center" justify="center">
        <IconButton disabled={prevAmount === 0} onClick={handleDecrementClick}>
          <Icon>chevron_left</Icon>
        </IconButton>
      </Grid>
      {photos.slice(prevAmount, amount).map(({ img, figcaption }) => (
        <Grid item xs={6} md={2} key={figcaption}>
          <GalleryItem image={img} alt={figcaption} />
        </Grid>
      ))}
      <Grid container item xs={3} md={1} alignContent="center" justify="center">
        <IconButton
          disabled={amount === maxAmount}
          onClick={handleIncrementClick}
        >
          <Icon>chevron_right</Icon>
        </IconButton>
      </Grid>
    </Grid>
  );
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};

export default Gallery;
