import cn from "classnames";
import { forwardRef } from "react";
import { isProp } from "utils";
import { TypographyProps, TypographyRef } from "./typography.t";

const Typography = forwardRef<TypographyRef, TypographyProps>(
  function Typography(
    { variant = "span", color, state, element, weight, className, ...props },
    ref,
  ) {
    const ElementType = element || variant;
    const isButton = element === "button";
    const isHeading = isProp(variant, ["h2", "h3"]);

    return (
      <ElementType
        ref={ref}
        className={cn(
          "transition-colors",
          {
            "text-075": variant === "span",
            "text-100": variant === "p",
            "text-200 md:text-300 xl:text-400": variant === "h3",
            "text-225 md:text-325 xl:text-425": variant === "h2",
          },
          {
            "font-bold": weight === "bold" || isButton || isHeading,
          },
          {
            "text-opacity-100": state === "focused",
            "text-opacity-20": state === "disabled",
            "text-opacity-60": !state,
          },
          {
            "text-main": color === "main",
            "text-accent": color === "accent",
            "text-success": color === "success",
            "text-warning": color === "warning",
            "text-error": color === "error",
            "text-black dark:text-white": color === "text",
            "text-inherit": !color,
          },
          {
            "hover:text-opacity-100 uppercase": isButton,
            "uppercase tracking-widest": isButton || isHeading,
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
