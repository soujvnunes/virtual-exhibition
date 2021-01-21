import { makeStyles } from "@material-ui/core";

const borderColor = (type) => {
  switch (type) {
    case "dark":
      return "255, 255, 255, 0.23";
    default:
      return "0, 0, 0, 0.23";
  }
};

export default makeStyles(({ palette }) => ({
  root: {
    border: ({ variant }) =>
      variant === "outlined" && `2px solid rgba(${borderColor(palette.type)})`,
    padding: 10,
  },
}));
