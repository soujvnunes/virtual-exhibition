import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

const Base = forwardRef<
  HTMLDivElement,
  ComponentPropsWithRef<"div"> & {
    component?: ElementType;
  }
>(({ component: Component = "div", ...props }, ref) => (
  <Component ref={ref} {...props} />
));

Base.displayName = "Base";
export default Base;
