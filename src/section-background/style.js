import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    position: "relative",
    backgroundImage: ({ background }) =>
      `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
