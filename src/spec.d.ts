import { ComponentPropsWithRef, ElementType } from "react";
import "styled-components";
import { GlobalStyle } from "ui";

type Theme = typeof GlobalStyle.THEME;
type Component = ElementType;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
  export type ComponentPropsWithAs<
    P extends object,
    T extends keyof JSX.IntrinsicElements = void,
  > = T extends keyof JSX.IntrinsicElements
    ? ComponentPropsWithRef<T> &
        P & {
          as?: keyof JSX.IntrinsicElements;
        }
    : {
        $props: P;
        as?: keyof JSX.IntrinsicElements;
      };
}
