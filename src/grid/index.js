import clsx from "clsx";
import PropTypes from "prop-types";
import { cloneElement, forwardRef } from "react";
import cssModules, { root } from "./index.module.css";

const Grid = forwardRef(({ span, children, clone, container, item }, ref) => {
  const className = clsx(root, {
    [cssModules[`span-${span}`]]: !container && span,
    [cssModules.container]: container,
    [cssModules.item]: item,
  });
  const props = { ...{ ref, className } };

  if (clone) {
    return cloneElement(children, { ...props });
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...props}>{children}</div>;
});

Grid.propTypes = {
  clone: PropTypes.bool,
  children: PropTypes.node.isRequired,
  span: PropTypes.number,
  container: PropTypes.bool,
  item: PropTypes.bool,
};

Grid.defaultProps = {
  clone: false,
  span: 1,
  container: false,
  item: false,
};

Grid.displayName = "Grid";

export default Grid;
