import cn from "classnames";
import { ComponentPropsWithRef, forwardRef, memo, useMemo } from "react";
import { isEqual } from "lodash";

function withSvgStyles({
  name,
  paths,
}: {
  name: string;
  paths: string | ({ [key: string]: string } | string)[];
}) {
  const WithSvgStyles = forwardRef<
    SVGSVGElement,
    ComponentPropsWithRef<"svg"> & { size?: "sm" | "md" | "lg" }
  >(({ className, size = "md", ...props }, ref) => {
    const renderPath = useMemo(() => {
      if (Array.isArray(paths)) {
        return paths.map((path) => (
          <path
            key={JSON.stringify(path)}
            {...(typeof path === "string" ? { d: path } : path)}
          />
        ));
      }

      return <path d={paths} />;
    }, []);
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

  WithSvgStyles.displayName = `${name}WithSvgStyles`;

  return memo(WithSvgStyles, isEqual);
}

export default withSvgStyles;
