import cn from "classnames";
import { ComponentPropsWithRef, forwardRef, memo } from "react";

type Props = ComponentPropsWithRef<"svg"> & { size?: "sm" | "md" | "lg" };

function createGrx(path: string) {
  const Icon = forwardRef<SVGSVGElement, Props>(
    ({ className, size = "md", ...props }, ref) => (
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
        <path path={path} />
      </svg>
    ),
  );

  Icon.displayName = "Icon";

  return memo(Icon, (prev, next) => prev === next);
}

export default createGrx;
