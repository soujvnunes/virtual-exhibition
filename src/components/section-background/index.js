import PropTypes from "prop-types";
import { forwardRef } from "react";
import useStyles from "./style";
import { useConsumer } from "../../libs/Modules";

const SectionBackground = forwardRef((props, ref) => {
  const { background } = useConsumer();
  const { root } = useStyles({ background });

  return <div ref={ref} className={root} {...props} />;
});

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SectionBackground;
