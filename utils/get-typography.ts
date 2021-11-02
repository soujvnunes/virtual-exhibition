import cn from "classnames";
import { getTypographyProps } from "interface";
import isProp from "./is-prop";

export default function getTypography({
  element,
  variant,
  weight,
  state,
  color,
  responsive = true,
  gutterBottom,
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
      "text-200": variant === "h3",
      "text-225": variant === "h2",
    },
    {
      "md:text-100 xl:text-125": responsive && variant === "span",
      "md:text-125 xl:text-150": responsive && variant === "p",
      "md:text-250 xl:text-300": responsive && variant === "h3",
      "md:text-275 xl:text-325": responsive && variant === "h2",
    },
    {
      "font-bold": weight === "bold" || isHeading,
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
      "mb-gutter": gutterBottom,
    },
    {
      underline: isLink,
    },
    {
      "uppercase tracking-widest": isHeading,
    },
    {
      "hover:text-opacity-100 outline-none": isLink || isButton,
      "uppercase tracking-widest": isButton || isHeading,
    },
  );
}
