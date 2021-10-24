import { ComponentProps, ComponentPropsWithRef } from "react";

export interface ButtonRef extends HTMLButtonElement {}
export interface ButtonProps extends ComponentPropsWithRef<"button"> {}
export interface LayoutProps extends ComponentProps<"div"> {
  title?: string;
}
