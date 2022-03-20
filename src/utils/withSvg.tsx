import cn from "classnames";
import {
  ComponentPropsWithRef,
  forwardRef,
  memo,
  ReactNode,
  useMemo,
} from "react";
import { isEqual } from "lodash";

function withSvg(paths: string | string[] | ReactNode, name: string) {
  const WithSvg = forwardRef<
    SVGSVGElement,
    ComponentPropsWithRef<"svg"> & { size?: "sm" | "md" | "lg" }
  >(({ className, size = "md", ...props }, ref) => {
    const renderPath = useMemo(() => {
      if (Array.isArray(paths)) {
        return paths.map((path) => <path key={path} d={path} />);
      }

      if (typeof paths === "string") {
        return <path d={paths} />;
      }

      return paths;
    }, []);

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

  WithSvg.displayName = `${name}WithSvg`;

  return memo(WithSvg, isEqual);
}

export default withSvg;
