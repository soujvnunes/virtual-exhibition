import cn from "classnames";
import { AspectRatioProps, AspectRatioRef } from "interface";
import { forwardRef } from "react";

const AspectRatio = forwardRef<AspectRatioRef, AspectRatioProps>(
  function AspectRatio({ format = "16x9", ...props }, ref) {
    const ratio = format.split("x");

    return (
      <div
        ref={ref}
        className={cn({
          "aspect-w-16 aspect-h-9": ratio[0] === "16" && ratio[1] === "9",
          "aspect-w-1 aspect-h-1": ratio[0] === "1" && ratio[1] === "1",
          "aspect-w-3 aspect-h-5": ratio[0] === "3" && ratio[1] === "5",
        })}
        {...props}
      />
    );
  },
);

AspectRatio.displayName = "AspectRatio";
export default AspectRatio;
