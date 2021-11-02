import { ContainerProps, ContainerRef } from "interface";
import { forwardRef } from "react";

const Container = forwardRef<ContainerRef, ContainerProps>(function Container(
  { element: ElementType = "section", ...props },
  ref,
) {
  return (
    <ElementType
      ref={ref}
      className={
        "flex flex-col min-h-screen mx-auto px-4 w-full sm:px-5 md:max-w-screen-sm md:px-6 lg:max-w-screen-md lg:px-7 xl:max-w-screen-lg xl:px-8"
      }
      {...props}
    />
  );
});

Container.displayName = "Container";
export default Container;
