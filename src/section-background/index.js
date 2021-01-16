import PropTypes from "prop-types";
import useStyles from "./style";
import { useConsumer } from "../modules";

function SectionBackground({ children }) {
  const [{ background }] = useConsumer();
  const { root } = useStyles({ background });

  return <div className={root} {...{ children }} />;
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionBackground;
