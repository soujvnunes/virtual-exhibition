import { ComponentPropsWithoutRef, ReactElement } from "react";
import { TypographyProps } from "ui/Typography/typography.t";

type Props = TypographyProps & ComponentPropsWithoutRef<"button">;
export interface ButtonProps extends Props {
  base?: "top" | "right" | "bottom" | "left";
  adornmentEnd?: ReactElement;
}
