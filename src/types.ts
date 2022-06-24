import { COLS_MAP, THEME, VARIANT_MAP } from "consts";
import { StyledComponentPropsWithRef } from "styled-components";

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

export type FlexProps = {
  $display?: React.CSSProperties["display"];
  $direction?: React.CSSProperties["flexDirection"];
  $flow?: React.CSSProperties["flexFlow"];
  $justify?: React.CSSProperties["justifyContent"];
  $align?: React.CSSProperties["alignItems"];
  $content?: React.CSSProperties["alignContent"];
  $order?: React.CSSProperties["order"];
  $grow?: React.CSSProperties["flexGrow"];
  $shrink?: React.CSSProperties["flexShrink"];
  $self?: React.CSSProperties["alignSelf"];
};

type ColKs = "$sm" | "$md" | "$lg";

type ColEdgeKs = "start" | "mid" | "end";

type Cols = typeof COLS_MAP[number];

export type ColEdges = Partial<Record<ColEdgeKs, Cols>>;

export type ColProps = Partial<Record<ColKs, ColEdges>>;

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

export type IsProp<P extends string | number | boolean | undefined> = (
  props: P | P[],
  values: P[],
) => boolean;

export type Theme = typeof THEME;

export type Token<T extends object = Theme> = (
  key: keyof Merge<T[keyof T]>,
) => (props: { theme: T }) => string;
