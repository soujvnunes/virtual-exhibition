import { ComponentPropsWithRef, ElementType, ReactElement } from "react";

/** Utils */
export interface getTypographyProps {
  element?: ElementType;
  variant?: "h1" | "h2" | "h3" | "p" | "span";
  weight?: "bold";
  state?: "focused" | "disabled";
  color?: "main" | "accent" | "success" | "warning" | "error" | "text";
  responsive?: boolean;
  gutterBottom?: boolean;
}

/** UI */
/** Button interface */
type BaseButtonProps = Pick<getTypographyProps, "color"> &
  ComponentPropsWithRef<"button">;
export interface ButtonProps extends BaseButtonProps {
  base?: "top" | "right" | "bottom" | "left";
  adornmentEnd?: ReactElement;
}
export interface ButtonRef extends HTMLButtonElement {}

/** Container */
export interface ContainerProps extends ComponentPropsWithRef<"div"> {
  element?: ElementType;
}
export interface ContainerRef extends HTMLDivElement {}

/** Icon interface */
type BaseIconProps = Pick<getTypographyProps, "color"> &
  ComponentPropsWithRef<"svg">;
export interface IconProps extends BaseIconProps {
  children?: "menu" | string;
  size?: "smaller" | "small" | "medium" | "large" | "larger";
}
export interface IconRef extends SVGSVGElement {}

/** Typography interface */
type BaseTypographyProps = getTypographyProps & ComponentPropsWithRef<"span">;
export interface TypographyProps extends BaseTypographyProps {
  noGutters?: boolean;
  gutterBottom?: boolean;
  href?: string;
}
export interface TypographyRef extends HTMLElement {}
