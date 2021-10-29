import { ComponentPropsWithRef } from "react";
import { Typography } from "ui";

export interface ButtonRef extends HTMLButtonElement {}
export interface ButtonProps extends ComponentPropsWithRef<typeof Typography> {
  base?: "top" | "right" | "bottom" | "left";
}
