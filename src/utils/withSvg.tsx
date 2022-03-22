import cn from "classnames";
import { ComponentPropsWithRef, forwardRef, memo, useMemo } from "react";
import { isEqual } from "lodash";

type P = {
  name: string;
  paths: string | ({ [key: string]: string } | string)[];
};

function withSvg({ name, paths }: P) {
  const WithSvg = forwardRef<
    SVGSVGElement,
    ComponentPropsWithRef<"svg"> & { size?: "sm" | "md" | "lg" }
  >(({ className, size = "md", ...props }, ref) => {
    const renderPath = useMemo(
      () =>
        Array.isArray(paths) ? (
          paths.map((path) =>
            typeof path === "string" ? <path d={path} /> : <path {...path} />,
          )
        ) : (
          <path d={paths} />
        ),
      [],
    );
    const renderCn = useMemo(
      () =>
        cn(
          "fill-current",
          {
            "w-md h-md": size === "sm",
            "w-lg h-lg": size === "md",
            "w-x2l h-x2l": size === "lg",
          },
          className,
        ),
      [className, size],
    );

    return (
      <svg
        ref={ref}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={renderCn}
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
