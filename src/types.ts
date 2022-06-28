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

export type MediaKs = "sm" | "md" | "lg";

export type UseMedia = (query: string) => boolean;

export type HandleMedia = (event: MediaQueryListEvent) => void;

export type FlexKs =
  | "display"
  | "flexDirection"
  | "flexWrap"
  | "justifyContent"
  | "alignItems"
  | "alignContent"
  | "order"
  | "flexGrow"
  | "flexShrink"
  | "flexBasis"
  | "alignSelf";

export type FlexProps<Ks extends FlexKs = FlexKs> = {
  [K in Ks as `$${K}`]?:
    | React.CSSProperties[K]
    | Partial<Record<MediaKs, React.CSSProperties[K]>>;
};

type ColKs = "start" | "mid" | "end";

type Cols = typeof COLS_MAP[number];

export type ColEdges = Partial<Record<ColKs, Cols>>;

export type ColProps = Omit<FlexProps, keyof FlexProps> &
  Partial<Record<MediaKs, ColEdges>>;

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
