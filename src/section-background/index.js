import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useConsumer } from "../modules";

const useStyles = makeStyles(() => ({
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

function SectionBackground({ children }) {
  const [{ background }] = useConsumer();
  const { root } = useStyles({ background });

  return <div className={root} {...{ children }} />;
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionBackground;
