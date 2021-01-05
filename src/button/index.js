import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { root } from "./index.module.css";
import Typography from "../typography";
import { toKebabCase } from "../modules";

const Button = forwardRef(({ children, onClick, className, type }, ref) => (
  <button
    type="button"
    className={clsx(root, className)}
    id={toKebabCase({ value: children })}
    name={toKebabCase({ value: children })}
    {...{ ref, onClick, type }}
  >
    <Typography variant="label">{children}</Typography>
  </button>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
};

Button.defaultProps = {
  onClick: () => {},
  className: null,
  type: "button",
};

Button.displayName = "Button";

export default Button;
