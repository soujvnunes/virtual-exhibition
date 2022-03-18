import cn from "classnames";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

const Text = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  ComponentPropsWithRef<"h2" | "h3"> & {
    as?: ElementType;
    variant?: "h2" | "h3" | "h4" | "p" | "span";
    weight?: "light" | "bold";
    color?: "special" | "main" | "error" | "success" | "warning";
    state?: "focused" | "disabled";
    transform?: "uppercase" | "lowercase";
  }
>(({ as, variant, className, weight, color, transform, ...props }, ref) => {
  const As = as || variant || "span";

  return (
    <As
      ref={ref}
      className={cn(
        {
          "text-sm": variant === "span",
          "text-md": variant === "p",
          "text-lg font-serif italic": variant === "h4",
          "text-xl md:text-x2l lg:text-x3l font-serif": variant === "h3",
          "text-x3l md:text-x4l lg:text-x5l font-serif": variant === "h2",
        },
        {
          "font-light": weight === "light",
          "font-bold": weight === "bold",
        },
        {
          "text-main-dark dark:text-main-light":
            color === "special" || color === "main",
          "text-fill-transparent bg-clip-text bg-gradient-to-r from-main to-main-dark dark:from-main-light dark:to-main italic":
            color === "special",
          "text-error-dark dark:text-error": color === "error",
          "text-success-dark dark:text-success": color === "success",
          "text-warning-dark dark:text-warning": color === "warning",
          "text-dark dark:text-light": !color,
        },
        {
          "uppercase tracking-wider": transform === "uppercase",
          lowercase: transform === "lowercase",
        },
        // missing `state` classes
        className,
      )}
      {...props}
    />
  );
});

Text.displayName = "Typograhy";
export default Text;
