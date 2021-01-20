import { makeStyles } from "@material-ui/core";

export default makeStyles(({ transitions }) => ({
  main: {
    transform: ({ scroll }) => `translateY(-${scroll}px)`,
    transition: ({ animateScroll }) =>
      animateScroll && transitions.create(["transform"]),
  },
}));
