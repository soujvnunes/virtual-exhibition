import cn from "classnames";
import { memo } from "react";
import { Typography } from "ui";
import paths from "./icon-paths";
import { IconProps } from "./icon.t";

function Icon({ children, size = "small", className, ...props }: IconProps) {
  return (
    <Typography
      element="svg"
      role="figure"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      className={cn(
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
      <path d={paths[children]} />
    </Typography>
  );
}

Icon.displayName = "Icon";
export default memo(Icon, (prev, next) => prev.children === next.children);
