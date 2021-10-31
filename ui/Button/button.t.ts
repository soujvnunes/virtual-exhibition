import { ComponentPropsWithoutRef, ReactElement } from "react";
import { getTypographyProps } from "utils/get-typography";

type Props = Pick<getTypographyProps, "color"> &
  ComponentPropsWithoutRef<"button">;

export interface ButtonProps extends Props {
  base?: "top" | "right" | "bottom" | "left";
  adornmentEnd?: ReactElement;
}
export interface ButtonRef extends HTMLButtonElement {}
