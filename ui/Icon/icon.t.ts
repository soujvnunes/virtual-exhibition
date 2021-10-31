import { ComponentPropsWithoutRef } from "react";
import { getTypographyProps } from "utils/get-typography";

type Props = Pick<getTypographyProps, "color"> &
  ComponentPropsWithoutRef<"svg">;
export interface IconProps extends Props {
  children?: "menu" | string;
  size?: "smaller" | "small" | "medium" | "large" | "larger";
}
export interface IconRef extends SVGSVGElement {}
