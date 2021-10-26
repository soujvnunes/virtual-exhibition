import cn from "classnames";
import { forwardRef } from "react";
import { TypographyProps, TypographyRef } from "./typography.t";

const Typography = forwardRef<TypographyRef, TypographyProps>(
  function Typography({ as, variant, className, ...props }, ref) {
    const ElementType = as || variant || "span";

    return (
      <ElementType
        ref={ref}
        variant={variant || as || "span"}
        className={cn(className)}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";
export default Typography;
