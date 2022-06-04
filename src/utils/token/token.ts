import { DefaultTheme } from "styled-components";

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
export type Merge<U> = Union<U> extends infer O
  ? { [K in keyof O]: O[K] }
  : never;
/** */

type Token<T extends object> = (
  key: keyof Merge<T[keyof T]>,
) => (props: { theme: T }) => string;

const token: Token<DefaultTheme> = (key) => (props) =>
  Object.assign({}, ...Object.values(props.theme))[key];

export default token;
