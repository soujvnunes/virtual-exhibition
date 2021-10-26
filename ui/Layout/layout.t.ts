import { ComponentPropsWithRef } from "react";

export interface LayoutRef extends HTMLElement {}
export interface LayoutProps extends ComponentPropsWithRef<"main"> {
  title?: string;
}
