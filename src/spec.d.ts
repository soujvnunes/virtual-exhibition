import { ComponentPropsWithRef } from "react";
import "styled-components";
import { GlobalStyle } from "ui";

type Theme = typeof GlobalStyle.THEME;
type AsC = keyof JSX.IntrinsicElements;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
  export type ComponentPropsWithAs<
    P extends object,
    T extends keyof JSX.IntrinsicElements = void,
  > = T extends keyof JSX.IntrinsicElements
    ? ComponentPropsWithRef<T> &
        P & {
          as?: AsC;
        }
    : {
        $props: P;
        as?: AsC;
      };
}
