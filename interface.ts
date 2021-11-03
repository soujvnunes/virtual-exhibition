import { ComponentPropsWithRef, ElementType, ReactElement } from "react";
import { WithTypographyClassesProps } from "type";

/** Utils */
export interface getTypographyClassesProps {
  element?: ElementType;
  variant?: "h1" | "h2" | "h3" | "p" | "span";
  weight?: "bold";
  state?: "focused" | "disabled";
  color?: "main" | "accent" | "success" | "warning" | "error" | "text";
  responsive?: boolean;
}

/** UI */
/** AspectRatio interface */
export interface AspectRatioProps extends ComponentPropsWithRef<"div"> {
  format?: "16x9" | "1x1" | "3x5";
}
export interface AspectRatioRef extends HTMLDivElement {}

/** Button interface */
export interface ButtonProps
  extends WithTypographyClassesProps<"button", "color"> {
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
export interface IconProps extends WithTypographyClassesProps<"svg", "color"> {
  children?: "menu" | string;
  size?: "smaller" | "small" | "medium" | "large" | "larger";
}
export interface IconRef extends SVGSVGElement {}

/** Typography interface */
export interface TypographyProps extends WithTypographyClassesProps<"span"> {
  href?: string;
  gutterBottom?: boolean;
}
export interface TypographyRef extends HTMLElement {}

/** YoutubeVideo interface */
export interface YoutubeVideoProps extends ComponentPropsWithRef<"iframe"> {}
export interface YoutubeVideoRef extends HTMLIFrameElement {}
