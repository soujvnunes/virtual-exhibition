import "styled-components";
import { GlobalStyle } from "ui";

/**
 * Thanks to [jcalz](https://stackoverflow.com/users/2887218/jcalz)
 * at question [Merge discriminated union of object types in
 * Typescript](https://stackoverflow.com/questions/63542526/merge-discriminated-union-of-object-types-in-typescript)
 */
type Union<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type Merge<U> = Union<U> extends infer O ? { [K in keyof O]: O[K] } : never;
/** */

type Theme = typeof GlobalStyle.THEME;

export type PropsWithAs<P extends object = Record<string, unknown>> = P & {
  as?: string | React.ComponentType<Record<string, unknown>>;
};
export type GetTheme<T extends Theme = Theme> = (
  token: keyof Merge<T[keyof T]>,
) => (props: { theme: T }) => string;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
