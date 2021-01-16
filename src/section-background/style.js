import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    backgroundImage: ({ background }) => `url(${background})`,
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "&:before": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      content: "''",
      position: "absolute",
      inset: 0,
    },
  },
}));
