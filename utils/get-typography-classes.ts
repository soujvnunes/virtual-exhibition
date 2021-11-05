import cn from "classnames";
import { getTypographyClassesProps } from "interface";
import isProp from "./is-prop";

export default function getTypographyClasses({
  element,
  variant,
  weight,
  state,
  color,
  responsive = true,
}: getTypographyClassesProps): string {
  const isHeading = isProp(variant, ["h2", "h3"]);
  const isSvg = element === "svg";
  const isButton = element === "button";
  const isLink = element === "a";

  return cn(
    {
      "transition-colors": element !== "svg",
    },
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
    /** Do not concate it like `[`text-${color}]: color` since it can damage client-side runtime. */
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
      "hover:text-opacity-100 outline-none": isLink || isButton,
      "uppercase tracking-widest": isButton || isHeading,
    },
  );
}