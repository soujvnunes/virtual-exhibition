import { COLS_MAP, THEME, VARIANT_MAP } from "consts";
import {
  StyledComponentPropsWithRef,
  ThemeProviderProps,
} from "styled-components";

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

export type Theme = typeof THEME;

export type GlobalStyleProps = Omit<ThemeProviderProps<Theme>, "theme">;

export type IsProp<P extends string | number | boolean | undefined> = (
  props: P | P[],
  values: P[],
) => boolean;

export type Token<T extends object = Theme> = (
  key: keyof Merge<T[keyof T]>,
) => (props: { theme: T }) => string;

export type UseMedia = (query: string) => boolean;

export type HandleMedia = (event: MediaQueryListEvent) => void;

export type ColKs = "start" | "mid" | "end";

export type Cols = typeof COLS_MAP[number];

export type ColProps = {
  [K in ColKs as `$${K}`]?:
    | Cols
    | Partial<Record<"DEFAULT" | "md" | "lg", Cols>>;
};

export type AdornmentProps = {
  $edge?: "start" | "end";
};

export type ButtonProps =
  | ({ href?: string } & StyledComponentPropsWithRef<"a">)
  | ({ href?: undefined } & StyledComponentPropsWithRef<"button">);

export type TextProps = {
  $gutterBottom?: boolean;
  $centered?: boolean;
  $italic?: boolean;
  $variant?: keyof typeof VARIANT_MAP | "inherit";
  $weight?: 400 | 500 | 600 | 700;
};
