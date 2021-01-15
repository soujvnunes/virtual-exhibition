import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { SECTION_BACKGROUND_CONTEXT } from "../constants";

const useStyles = makeStyles(({ transitions }) => ({
  root: {
    backgroundImage: ({ background }) => `url(${background})`,
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: transitions.create(["background-image"]),
    "&:before": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      content: "''",
      position: "absolute",
      inset: 0,
    },
  },
}));

function SectionBackground({ children }) {
  const { background } = useContext(SECTION_BACKGROUND_CONTEXT);
  const { root } = useStyles({ background });

  return <div className={root} {...{ children }} />;
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionBackground;
