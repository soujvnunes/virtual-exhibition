import cn from "classnames";
import { AspectRatioProps, AspectRatioRef } from "interface";
import { forwardRef } from "react";

const AspectRatio = forwardRef<AspectRatioRef, AspectRatioProps>(
  function AspectRatio({ ratio = "16x9", ...props }, ref) {
    const ratios = ratio.split("x");

    return (
      <div
        ref={ref}
        className={cn({
          "aspect-w-16 aspect-h-9": ratios[0] === "16" && ratios[1] === "9",
          "aspect-w-1 aspect-h-1": ratios[0] === "1" && ratios[1] === "1",
          "aspect-w-3 aspect-h-5": ratios[0] === "3" && ratios[1] === "5",
        })}
        {...props}
      />
    );
  },
);

AspectRatio.displayName = "AspectRatio";
export default AspectRatio;
