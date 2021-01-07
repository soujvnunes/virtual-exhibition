import { cloneElement, forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import cssModules, { root, label } from "./index.module.css";
import Typography from "../typography";
import { toKebabCase } from "../modules";

const Button = forwardRef(
  (
    {
      children,
      onClick,
      className,
      type,
      variant,
      startIcon,
      endIcon,
      name,
      icon,
    },
    ref,
  ) => {
    const renderEndIcon =
      endIcon && cloneElement(endIcon, { className: cssModules["end-icon"] });
    const renderStartIcon =
      startIcon &&
      cloneElement(startIcon, { className: cssModules["start-icon"] });
    const renderId = name && toKebabCase({ value: name });

    return (
      <button
        type="button"
        className={clsx(
          root,
          { [cssModules[variant]]: variant, [cssModules.icon]: icon },
          className,
        )}
        id={renderId}
        {...{ ref, onClick, type, name }}
      >
        <Typography variant="label" className={clsx(label)} htmlFor={renderId}>
          {renderStartIcon}
          {icon || children}
          {renderEndIcon}
        </Typography>
      </button>
    );
  },
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["outlined"]),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  name: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  onClick: null,
  className: null,
  type: "button",
  variant: null,
  startIcon: null,
  endIcon: null,
  name: null,
  icon: null,
};

Button.displayName = "Button";

export default Button;
