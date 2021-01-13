import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: ({ backgroundImage }) => `url(${backgroundImage})`,
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

function SectionBackground({ children, backgroundImage }) {
  const { root } = useStyles({ backgroundImage });

  return <div className={root} {...{ children }} />;
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default SectionBackground;
