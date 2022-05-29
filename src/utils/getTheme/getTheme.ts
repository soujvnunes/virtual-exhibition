// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { DefaultTheme } from "styled-components";

/**
 * Thanks to [jcalz](https://stackoverflow.com/users/2887218/jcalz) at question [Merge discriminated union of object types in Typescript](https://stackoverflow.com/questions/63542526/merge-discriminated-union-of-object-types-in-typescript)
 */
type Union<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type Merge<U> = Union<U> extends infer O
  ? { -readonly [K in keyof O]: O[K] }
  : never;

function getTheme<T extends DefaultTheme = DefaultTheme>(
  pair:
    | `color.${keyof T["color"]}`
    | `action.${keyof T["action"]}`
    | `text.${keyof T["text"]}`
    | `media.${keyof T["media"]}`
    | `size.${keyof T["size"]}`
    | `grid.${keyof T["grid"]}`,
) {
  const [key, subkey] = pair?.split(".") as [keyof T, keyof Merge<T[keyof T]>];

  return ({ theme }: { theme: T }) => theme[key][subkey];
}

export default getTheme;
