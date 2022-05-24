import { ComponentPropsWithRef } from "react";
import "styled-components";
import { GlobalStyle } from "ui";

/**
 * Thanks to [jcalz](https://stackoverflow.com/users/2887218/jcalz) at question [Merge discriminated union of object types in Typescript](https://stackoverflow.com/questions/63542526/merge-discriminated-union-of-object-types-in-typescript)
 */
type Union<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type Merge<U> = Union<U> extends infer O ? { [K in keyof O]: O[K] } : never;

type Theme = typeof GlobalStyle.THEME;
type AsC = keyof JSX.IntrinsicElements;
type Token<T> = (
  key: keyof Merge<T[keyof T]>,
) => ({ theme }: { theme: T }) => string;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
  const token: Token<Theme> =
    (key) =>
    ({ theme }) =>
      Object.assign({}, ...Object.values(theme))[key];
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
