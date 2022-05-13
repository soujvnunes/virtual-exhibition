import cn from "classnames";
import { ComponentPropsWithRef, forwardRef, memo, SVGProps } from "react";
import { isEqual } from "lodash";

function withSvgStyles(name: string, paths: SVGProps<SVGPathElement>) {
  const WithSvgStyles = forwardRef<
    SVGSVGElement,
    ComponentPropsWithRef<"svg"> & { size?: "sm" | "md" | "lg" }
  >(({ className, size = "md", ...props }, ref) => (
    <svg
      ref={ref}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn(
        "fill-current",
        {
          "w-md h-md": size === "sm",
          "w-lg h-lg": size === "md",
          "w-x2l h-x2l": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {paths}
    </svg>
  ));

  WithSvgStyles.displayName = `${name}WithSvgStyles`;

  return memo(WithSvgStyles, isEqual);
}

export default withSvgStyles;
