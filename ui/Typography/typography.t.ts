import { ComponentPropsWithRef, ElementType } from "react";

export interface TypographyRef extends HTMLElement {}
export interface TypographyProps extends ComponentPropsWithRef<"span"> {
  noGutters?: boolean;
  gutterBottom?: boolean;
  variant?: "h2" | "h3" | "p" | "span";
  weight?: "bold";
  element?: ElementType;
  color?: "main" | "accent" | "success" | "warning" | "error" | "text";
  state?: "focused" | "disabled";
  href?: string;
}
