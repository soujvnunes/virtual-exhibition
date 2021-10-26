import { ComponentPropsWithRef, ElementType } from "react";

type TypographyVariants = "h1" | "h2" | "h3" | "p" | "span";

export interface TypographyRef extends HTMLElement {}
export interface TypographyProps extends ComponentPropsWithRef<"span"> {
  noGutters?: boolean;
  gutterBottom?: boolean;
  variant?: TypographyVariants;
  weight?: "normal" | "bold";
  size?: "smaller" | "small" | "medium" | "large" | "larger";
  as?: ElementType;
}
