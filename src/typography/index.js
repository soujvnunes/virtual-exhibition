import { createElement } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import classes from "./index.module.css";
import { getElementVariant } from "../modules";

function Typography({
  variant = "",
  size = "",
  href = "",
  children = "" || null,
  className = "",
  color = "",
  weight = "",
} = {}) {
  const renderColorClass =
    (href && classes.main) ||
    (variant === "paragraph" && classes.reading) ||
    classes[color];

  if (!children) {
    return null;
  }

  return createElement(
    href ? "a" : getElementVariant({ variant }),
    {
      className: clsx(
        { [classes[getElementVariant({ variant })]]: variant },
        { [classes[size]]: size },
        { [renderColorClass]: color },
        { [classes[weight]]: weight },
        { [className]: className },
      ),
      ...(!(variant === "title") &&
        href && {
          href,
          ...(href.startsWith("http") && {
            target: "_blank",
            rel: "noopener noreferrer",
          }),
        }),
    },
    children,
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf(["title", "paragraph", "label"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["main", "reading", "base", "disabled"]),
  weight: PropTypes.oneOf(["bolder", "normal", "lighter"]),
};

Typography.defaultProps = {
  variant: "paragraph",
  size: "medium",
  href: null,
  className: null,
  color: "base",
  weight: null,
};

export default Typography;
