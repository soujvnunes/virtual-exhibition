import clsx from "clsx";
import PropTypes from "prop-types";
import "./index.module.css";

function Icon({ name, className }) {
  return <i className={clsx("material-icons", className)}>{name}</i>;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
