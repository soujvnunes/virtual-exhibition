import cn from "classnames";
import {
  ComponentPropsWithRef,
  forwardRef,
  memo,
  ReactNode,
  useMemo,
} from "react";
import { isEqual } from "lodash";

function withSvg(path: string | ReactNode | string[]) {
  const Icon = forwardRef<
    SVGSVGElement,
    ComponentPropsWithRef<"svg"> & { size?: "sm" | "md" | "lg" }
  >(({ className, size = "md", ...props }, ref) => {
    const renderPath = useMemo(() => {
      if (Array.isArray(path)) {
        return path.map((pt) => <path key={pt} d={pt} />);
      }

      if (path?.toString() === "[object Object]") {
        return path;
      }

      if (typeof path === "string") {
        return <path d={path} />;
      }
    }, [path]);

    return (
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
        {renderPath}
      </svg>
    );
  });

  Icon.displayName = "Icon";

  return memo(Icon, (prev, next) => isEqual(prev, next));
}

export default withSvg;
