import { AspectRatioProps, AspectRatioRef } from "interface";
import { forwardRef } from "react";

const AspectRatio = forwardRef<AspectRatioRef, AspectRatioProps>(
  function AspectRatio({ ratio, ...props }, ref) {
    const ratios = ratio.split("x");

    return (
      <div
        ref={ref}
        className={`aspect-w-${ratios[0]} aspect-h-${ratios[1]}`}
        {...props}
      />
    );
  },
);

AspectRatio.displayName = "AspectRatio";
export default AspectRatio;
