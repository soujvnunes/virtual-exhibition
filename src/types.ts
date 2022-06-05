import { ICON_MAP, THEME, VARIANT_MAP } from "consts";
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

export type $FlexProps = {
  $container?: boolean;
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

export type ButtonBaseProps =
  | ({ href?: string } & StyledComponentPropsWithRef<"a">)
  | ({ href?: undefined } & StyledComponentPropsWithRef<"button">);

export type $ButtonProps = {
  $iconStart?: React.FunctionComponent;
  $iconEnd?: React.FunctionComponent;
};

export type ButtonProps = ButtonBaseProps & $ButtonProps;

export type ButtonIconProps = ButtonBaseProps & {
  children: React.FunctionComponent;
};

export type IconProps = StyledComponentPropsWithRef<"svg">;

export type CreateIcon<P extends object> = (
  name: keyof typeof ICON_MAP,
  paths: React.SVGProps<SVGPathElement>,
) => React.FunctionComponent<P>;

export type $TypographyProps = {
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
