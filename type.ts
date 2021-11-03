import { getTypographyClassesProps } from "interface";
import { ComponentPropsWithRef, ElementType } from "react";

export type WithTypographyClassesProps<
  E extends ElementType,
  P = void,
> = ComponentPropsWithRef<E> &
  (P extends keyof getTypographyClassesProps
    ? Pick<getTypographyClassesProps, P>
    : getTypographyClassesProps);
