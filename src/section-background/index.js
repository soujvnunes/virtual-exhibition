import PropTypes from "prop-types";
import { forwardRef } from "react";
import useStyles from "./style";
import { useConsumer } from "../modules";

const SectionBackground = forwardRef(({ children }, ref) => {
  const [{ background }] = useConsumer();
  const { root } = useStyles({ background });

  return <div className={root} {...{ children, ref }} />;
});

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionBackground;
