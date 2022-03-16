import cn from "classnames";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

const Container = forwardRef<
  HTMLDivElement,
  ComponentPropsWithRef<"div"> & { as?: ElementType }
>(({ as: As = "div", className, ...props }, ref) => (
  <As
    ref={ref}
    className={cn("max-w-7xl mx-auto px-md md:px-lg lg:px-xl", className)}
    {...props}
  />
));

export default Container;
