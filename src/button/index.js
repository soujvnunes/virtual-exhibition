import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import cssModules, { root } from "./index.module.css";
import Typography from "../typography";
import { toKebabCase } from "../modules";

const Button = forwardRef(
  ({ children, onClick, className, type, variant }, ref) => (
    <button
      type="button"
      className={clsx(root, { [cssModules[variant]]: variant }, className)}
      id={toKebabCase({ value: children })}
      name={toKebabCase({ value: children })}
      {...{ ref, onClick, type }}
    >
      <Typography variant="label">{children}</Typography>
    </button>
  ),
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["outlined"]),
};

Button.defaultProps = {
  onClick: null,
  className: null,
  type: "button",
  variant: null,
};

Button.displayName = "Button";

export default Button;
