import type { DefaultTheme, ThemeProps } from "styled-components";

/**
 * https://stackoverflow.com/questions/63542526/merge-discriminated-union-of-object-types-in-typescript
 */
type Union<U> = (U extends unknown ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type Merge<U> = Union<U> extends infer O ? { [K in keyof O]: O[K] } : never;
/** */

export default function getToken<T extends DefaultTheme = DefaultTheme>(
  key: keyof Merge<T[keyof T]>,
) {
  return (props: ThemeProps<T>): string =>
    Object.assign({}, ...Object.values(props.theme))[key];
}
