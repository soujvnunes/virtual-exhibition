import { ComponentPropsWithoutRef } from "react";
import { TypographyProps } from "ui/Typography/typography.t";

type Props = TypographyProps & ComponentPropsWithoutRef<"svg">;
export interface IconProps extends Props {
  children?: "menu" | string;
  size?: "smaller" | "small" | "medium" | "large" | "larger";
}
