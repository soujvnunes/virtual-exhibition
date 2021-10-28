import cn from "classnames";
import { forwardRef } from "react";
import { TypographyProps, TypographyRef } from "./typography.t";

const Typography = forwardRef<TypographyRef, TypographyProps>(
  function Typography(
    { variant = "span", color, state, element, weight, className, ...props },
    ref,
  ) {
    const ElementType = element || variant;

    return (
      <ElementType
        ref={ref}
        className={cn(
          {
            "text-075": variant === "span",
            "text-100": variant === "p",
            "text-200 md:text-300 xl:text-400 capitalize font-bold":
              variant === "h3",
            "text-225 md:text-325 xl:text-425 capitalize font-bold":
              variant === "h2",
            "font-bold": weight === "bold",
            "opacity-100": state === "focused",
            "opacity-20": state === "disabled",
            "opacity-60": !state,
            "text-main": color === "main",
            "text-accent": color === "accent",
            "text-success": color === "success",
            "text-warning": color === "warning",
            "text-error": color === "error",
            "text-black dark:text-white": color === "text",
            "text-inherit": !color,
          },
          className,
        )}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";
export default Typography;
