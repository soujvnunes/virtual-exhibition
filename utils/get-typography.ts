import cn from "classnames";
import { getTypographyProps } from "interface";
import isProp from "./is-prop";

export default function getTypography({
  element,
  variant,
  weight,
  state,
  color,
}: getTypographyProps): string {
  const isHeading = isProp(variant, ["h2", "h3"]);
  const isSvg = element === "svg";
  const isButton = element === "button";
  const isLink = element === "a";

  return cn(
    "transition-colors",
    {
      "text-075": variant === "span",
      "text-100": variant === "p",
      "text-200 md:text-300 xl:text-400": variant === "h3",
      "text-225 md:text-325 xl:text-425": variant === "h2",
    },
    {
      "font-bold": weight === "bold",
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
      "text-inherit": !color && !isSvg,
      "fill-current": !color && isSvg,
    },
    {
      underline: isLink,
    },
    {
      "uppercase tracking-widest": isHeading,
    },
    {
      "hover:text-opacity-100 focus:text-opacity-100 outline-none":
        isLink || isButton,
      "uppercase tracking-widest": isButton || isHeading,
    },
  );
}
