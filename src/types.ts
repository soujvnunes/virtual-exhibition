import { ICON_MAP, VARIANT_MAP } from "consts";
import React from "react";
import {
  DefaultTheme,
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

export type $ButtonProps = {
  $iconStart?: React.ReactNode;
  $iconEnd?: React.ReactNode;
};

export type ButtonProps = StyledComponentPropsWithRef<"button"> & $ButtonProps;

export type GlobalStyleProps = Omit<ThemeProviderProps<DefaultTheme>, "theme">;

export type IconProps = StyledComponentPropsWithRef<"svg">;

export type CreateIcon = (
  name: keyof typeof ICON_MAP,
  paths: React.SVGProps<SVGPathElement>,
) => unknown;

export type $TypographyProps = {
  $gutterBottom?: boolean;
  $centered?: boolean;
  $italic?: boolean;
  $variant?: keyof typeof VARIANT_MAP | "inherit";
  $weight?: 400 | 500 | 600 | 700;
};

type P = string | number | boolean | undefined;

export type IsProp = (props: P | P[], values: P[]) => boolean;

export type Token<T extends object> = (
  key: keyof Merge<T[keyof T]>,
) => (props: { theme: T }) => string;
