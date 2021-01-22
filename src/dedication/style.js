import { makeStyles } from "@material-ui/core";

export default makeStyles(({ typography }) => ({
  root: {
    paddingTop: 0,
  },
  paragraphStyle: {
    lineHeight: 2.618,
  },
  paragraphFirstLine: {
    "&::first-letter": {
      ...typography.h2,
    },
  },
  marginTop: {
    marginTop: 16,
  },
  videosItem: {
    height: 340,
  },
}));
