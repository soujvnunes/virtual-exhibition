import { ComponentProps } from "react";

export interface LayoutRef extends HTMLDivElement {}
export interface LayoutProps extends ComponentProps<"div"> {
  title?: string;
}
