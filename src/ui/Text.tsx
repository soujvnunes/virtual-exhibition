import cn from "classnames";
import { TextProps } from "interface";
import { forwardRef, useMemo } from "react";
import { TEXT_VARIANTS, withTextStyle } from "utils";

const Text = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  TextProps
>(({ as, variant, className, weight, color, align, ...props }, ref) => {
  const As = as || (variant && TEXT_VARIANTS[variant]) || "span";
  const renderCn = useMemo(
    () =>
      cn(
        {
          "text-left": align === "start",
          "text-center": align === "center",
          "text-right": align === "end",
          "text-justify": align === "justify",
        },
        withTextStyle({ weight, color, variant }),
        className,
      ),
    [align, className, color, variant, weight],
  );

  return <As ref={ref} className={renderCn} {...props} />;
});

Text.displayName = "Typograhy";
export default Text;
