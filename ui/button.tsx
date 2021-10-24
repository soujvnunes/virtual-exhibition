import cn from "classnames";
import { forwardRef } from "react";
import { ButtonProps, ButtonRef } from "types";

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(
  { className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn("relative max-w-min", className)}
      {...props}
    />
  );
});

Button.displayName = "Button";
export default Button;
