import cn from "classnames";
import { ComponentPropsWithRef, ElementType, forwardRef, useMemo } from "react";
import { isProp } from "utils";

type ColorStates = "" | "Secondary" | "Tertiary";
type FontStyles = "" | "Italic";

const VARIANT_MAP = {
  headline: "h2",
  title: "h3",
  subtitle: "h4",
  paragraph: "p",
  overline: "span",
} as const;
const Text = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  ComponentPropsWithRef<"h2" | "h3"> & {
    as?: ElementType;
    variant?: keyof typeof VARIANT_MAP;
    weight?: "italic" | `light${FontStyles}` | `bold${FontStyles}`;
    color?:
      | "special"
      | `main${ColorStates}`
      | "error"
      | "success"
      | "warning"
      | `text${ColorStates}`;
  }
>(({ as, variant, className, weight, color, ...props }, ref) => {
  const As = as || (variant && VARIANT_MAP[variant]) || "span";
  const isSpecial = color === "special";
  const renderCn = useMemo(
    () =>
      cn(
        {
          "font-light": isProp(weight, ["light", "lightItalic"]),
          "font-bold": isProp(weight, ["bold", "boldItalic"]),
          italic:
            isProp(weight, ["italic", "lightItalic", "boldItalic"]) ||
            isSpecial,
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
            isSpecial,
          "text-main-dark dark:text-main-light": isProp(color, [
            "main",
            "special",
          ]),
          "text-main-dark/60 dark:text-main-light/60":
            color === "mainSecondary",
          "text-main-dark/40 dark:text-main-light/40": color === "mainTertiary",
          "text-error-dark dark:text-error": color === "error",
          "text-success-dark dark:text-success": color === "success",
          "text-warning-dark dark:text-warning": color === "warning",
          "text-dark dark:text-light": color === "text",
          "text-dark/60 dark:text-light/60": color === "textSecondary",
          "text-dark/40 dark:text-light/40": color === "textTertiary",
        },
        className,
      ),
    [className, color, variant, weight],
  );

  return <As ref={ref} className={renderCn} {...props} />;
});

Text.displayName = "Typograhy";
export default Text;
