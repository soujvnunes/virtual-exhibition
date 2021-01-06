import { createElement } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import cssModules, { root } from "./index.module.css";
import { getElementVariant, toKebabCase } from "../modules";

function Typography({
  variant = "",
  href = "",
  children = "" || null,
  className = "",
} = {}) {
  if (!children) {
    return null;
  }

  return createElement(
    href ? "a" : getElementVariant({ variant }),
    {
      className: clsx(
        root,
        { [cssModules[getElementVariant({ variant })]]: variant },
        className,
      ),
      ...(!(variant === "title") &&
        href && {
          href,
          ...(href.startsWith("http") && {
            target: "_blank",
            rel: "noopener noreferrer",
          }),
        }),
      ...(variant === "label" && { htmlFor: toKebabCase({ value: children }) }),
    },
    children,
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf(["title", "paragraph", "label"]),
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  ]).isRequired,
  className: PropTypes.string,
};

Typography.defaultProps = {
  variant: "paragraph",
  href: null,
  className: null,
};

export default Typography;
