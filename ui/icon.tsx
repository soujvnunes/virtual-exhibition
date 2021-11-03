import cn from "classnames";
import { IconProps, IconRef } from "interface";
import { forwardRef, memo } from "react";
import { getIconPath, getTypographyClasses } from "utils";

const Icon = forwardRef<IconRef, IconProps>(function Icon(
  { children, size = "small", className, color, ...props },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      className={cn(
        getTypographyClasses({ color, element: "svg" }),
        {
          "w-4 h-4": size === "smaller",
          "w-6 h-6": size === "small",
          "w-8 h-8": size === "medium",
          "w-10 h-10": size === "large",
          "w-12 h-12": size === "larger",
        },
        className,
      )}
      {...props}
    >
      <title>{children}</title>
      <path d={getIconPath(children)} />
    </svg>
  );
});

Icon.displayName = "Icon";
export default memo(Icon, (prev, next) => prev.children === next.children);
