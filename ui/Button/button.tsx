import cn from "classnames";
import { cloneElement } from "react";
import { Typography } from "ui";
import { isProp } from "utils";
import { ButtonProps } from "./button.t";

function Button({
  className,
  children,
  base = "bottom",
  adornmentEnd,
  ...props
}: ButtonProps) {
  const { color } = props;
  const isBaseX = isProp(base, ["bottom", "top"]);
  const isBaseY = isProp(base, ["bottom", "left"]);
  const rounded = {
    "rounded-b": base === "top",
    "rounded-l": base === "right",
    "rounded-t": base === "bottom",
    "rounded-r": base === "left",
  };
  const renderAdornmentEnd =
    adornmentEnd &&
    cloneElement(adornmentEnd, {
      className: "ml-3",
    });

  return (
    <Typography
      element="button"
      variant="p"
      weight="bold"
      className={cn(
        "relative max-w-min h-12 px-4 bg-opacity-0 active:bg-opacity-20 focus:bg-opacity-20 rounded-t flex items-center",
        {
          "bg-main": color === "main",
          "bg-accent": color === "accent",
          "bg-success": color === "success",
          "bg-warning": color === "warning",
          "bg-error": color === "error",
          "bg-black dark:bg-white": color === "text",
          "bg-inherit": !color,
        },
        rounded,
        className,
      )}
      {...props}
    >
      {children}
      {renderAdornmentEnd}
      <div
        className={cn(
          "absolute bg-current",
          {
            "w-full h-1": isBaseX,
            "h-full w-1": !isBaseX,
          },
          {
            "bottom-0 left-0": isBaseY,
            "top-0 right-0": !isBaseY,
          },
          rounded,
        )}
      />
    </Typography>
  );
}

Button.displayName = "Button";
export default Button;
