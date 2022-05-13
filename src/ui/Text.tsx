import cn from "classnames";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import { FONT_WEIGHTS, isProp, TEXT_ALIGNS, TEXT_VARIANTS } from "utils";

type Aligns = typeof TEXT_ALIGNS[number];
type Variants = keyof typeof TEXT_VARIANTS;
type ColorStates = "" | "Secondary" | "Tertiary";
type ColorsWithState = "main" | "text";
type FontStyles = "" | "Italic";
type FontWeights = typeof FONT_WEIGHTS[number];
type TextProps<E extends ElementType> = ComponentPropsWithRef<E> & {
  as?: ElementType;
  align?: Aligns;
  variant?: Variants;
  weight?: `${FontWeights}${FontStyles}` | "italic";
  color?:
    | "special"
    | "error"
    | "success"
    | "warning"
    | `${ColorsWithState}${ColorStates}`;
};

const Text = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  TextProps<"h2" | "h3" | "h4" | "p" | "span">
>(({ as, variant, className, weight, color, align, ...props }, ref) => {
  const As = as || (variant && TEXT_VARIANTS[variant]) || "span";

  return (
    <As
      ref={ref}
      className={cn(
        {
          "text-left": align === "start",
          "text-center": align === "center",
          "text-right": align === "end",
          "text-justify": align === "justify",
        },
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
      )}
      {...props}
    />
  );
});

Text.displayName = "Typograhy";
export default Text;
