import { ComponentPropsWithRef, ComponentType } from "react";
import "styled-components";
import { GlobalStyle } from "ui";

type Theme = typeof GlobalStyle.THEME;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
  export type AsC = { as?: keyof JSX.IntrinsicElements | ComponentType<any> };
  export type ComponentPropsWithAs<P extends object, T = void> = AsC &
    (T extends keyof JSX.IntrinsicElements
      ? ComponentPropsWithRef<T> & P
      : {
          $props: P;
        });
}
