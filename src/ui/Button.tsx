import cn from "classnames";
import {
  cloneElement,
  ComponentPropsWithRef,
  forwardRef,
  ReactElement,
  useCallback,
} from "react";

const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithRef<"button"> & { icon?: ReactElement }
>(({ icon, children, className, ...props }, ref) => {
  const renderIcon = useCallback(() => {
    if (icon) {
      return cloneElement(icon, {
        className: cn({
          children: "ml-sm",
        }),
      });
    }
  }, [icon]);

  return (
    <button
      ref={ref}
      className={cn(
        "p-xs py-xs pl-lg pr-sm border border-main/40 rounded ml-sm text-main-light flex text-sm items-center uppercase font-bold tracking-wider",
        {
          "": !icon,
        },
        className,
      )}
      {...props}
    >
      {children}
      {renderIcon}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
