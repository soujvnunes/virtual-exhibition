import cn from "classnames";
import { WithTextStyles } from "interface";
import { isProp } from "utils";

function withTextStyle({ weight, color, variant }: WithTextStyles) {
  return cn(
    {
      "font-normal": isProp(weight, ["normal", "normalItalic"]),
      "font-medium": isProp(weight, ["medium", "mediumItalic"]),
      "font-semibold": isProp(weight, ["semibold", "semiboldItalic"]),
      "font-bold": isProp(weight, ["bold", "boldItalic"]),
      italic: isProp(weight, [
        "italic",
        "normalItalic",
        "mediumItalic",
        "semiboldItalic",
        "boldItalic",
      ]),
    },
    {
      "text-sm": variant === "overline",
      "text-md": variant === "paragraph",
      "text-lg": variant === "subtitle",
      "text-xl md:text-x2l lg:text-x3l": variant === "title",
      "text-x3l md:text-x4l lg:text-x5l": variant === "headline",
      "font-serif": isProp(variant, ["headline", "title", "subtitle"]),
    },
    {
      "text-fill-transparent bg-clip-text bg-gradient-to-r from-main to-main-dark dark:from-main-light dark:to-main":
        color === "special",
      "text-main-dark dark:text-main-light": isProp(color, ["main", "special"]),
      "text-main-dark/60 dark:text-main-light/60": color === "mainSecondary",
      "text-main-dark/40 dark:text-main-light/40": color === "mainTertiary",
      "text-error-dark dark:text-error": color === "error",
      "text-success-dark dark:text-success": color === "success",
      "text-warning-dark dark:text-warning": color === "warning",
      "text-dark dark:text-light": color === "text",
      "text-dark/60 dark:text-light/60": color === "textSecondary",
      "text-dark/40 dark:text-light/40": color === "textTertiary",
    },
  );
}

export default withTextStyle;
