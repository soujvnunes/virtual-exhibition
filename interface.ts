import { ComponentPropsWithRef, ElementType, ReactElement } from "react";

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
  ratio?: "16x9" | "1x1" | "3x5";
}
export interface AspectRatioRef extends HTMLDivElement {}

/** Button interface */
type BaseButtonProps = Pick<getTypographyClassesProps, "color"> &
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
type BaseIconProps = Pick<getTypographyClassesProps, "color"> &
  ComponentPropsWithRef<"svg">;
export interface IconProps extends BaseIconProps {
  children?: "menu" | string;
  size?: "smaller" | "small" | "medium" | "large" | "larger";
}
export interface IconRef extends SVGSVGElement {}

/** Typography interface */
type BaseTypographyProps = getTypographyClassesProps &
  ComponentPropsWithRef<"span">;
export interface TypographyProps extends BaseTypographyProps {
  href?: string;
  gutterBottom?: boolean;
}
export interface TypographyRef extends HTMLElement {}

/** YoutubeVideo interface */
export interface YoutubeVideoProps extends ComponentPropsWithRef<"iframe"> {}
export interface YoutubeVideoRef extends HTMLIFrameElement {}
