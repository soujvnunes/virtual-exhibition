import PropTypes from "prop-types";
import { forwardRef } from "react";
import Button from "../button";
import { root } from "./index.module.css";

const ButtonIcon = forwardRef(({ children, ...props }, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button className={root} ref={ref} {...props}>
    {children}
  </Button>
));

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

ButtonIcon.displayName = "ButtonIcon";

export default ButtonIcon;
