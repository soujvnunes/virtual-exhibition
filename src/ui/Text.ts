import { styled, type DefaultTheme } from "styled-components";

const VARIANTS_ELEMENTS = {
  title: "h1",
  headline: "h2",
  subhead: "h3",
  subtitle: "h4",
  body: "p",
  label: "button",
  overline: "span",
} as const;
const VARIANTS_SIZING = {
  title: "xs",
  headline: "x3l",
  subhead: "x2l",
  subtitle: "xl",
} as const;

export type TextProps = Partial<
  Record<"$gutterBottom" | "$center", boolean>
> & {
  $variant?: keyof typeof VARIANTS_ELEMENTS | "inherit";
  $weight?: keyof DefaultTheme["weight"];
};

const isHeading = (
  variant: TextProps["$variant"],
): variant is "title" | "headline" | "subhead" | "subtitle" =>
  variant === "title" ||
  variant === "headline" ||
  variant === "subhead" ||
  variant === "subtitle";
const isInherit = (
  variant: TextProps["$variant"],
): variant is "inherit" | undefined =>
  variant === "inherit" || typeof variant === "undefined";
const isSmall = (
  variant: TextProps["$variant"],
): variant is "label" | "overline" =>
  variant === "label" || variant === "overline";

export default styled.span.attrs<TextProps>(({ $variant, as }) => ({
  ...(isHeading($variant) && {
    className: "tk-freight-display-pro",
  }),
  as: as || (!isInherit($variant) ? VARIANTS_ELEMENTS[$variant] : undefined),
}))<TextProps>(({ $gutterBottom, $center, $variant, $weight, theme }) => ({
  ...($gutterBottom && {
    marginBottom: "1em",
  }),
  ...($center && {
    textAlign: "center",
  }),
  ...($variant === "label" && {
    textTransform: "uppercase",
  }),
  ...(($variant === "label" || $variant === "title") && {
    fontWeight: theme.weight.heavy,
    letterSpacing: "0.1em",
  }),
  ...($variant === "title" && {
    lineHeight: theme.kerning.tighter,
  }),
  ...((isHeading($variant) || $variant === "label") && {
    lineHeight: theme.kerning.tight,
  }),
  ...($variant === "body" && {
    fontSize: "1rem",
  }),
  ...(isSmall($variant) && {
    fontSize: "0.75rem",
  }),
  ...(isHeading($variant) && {
    fontSize: theme.size[VARIANTS_SIZING[$variant]],
    fontWeight: theme.weight.regular,
  }),
  ...($weight && {
    fontWeight: theme.weight[$weight],
  }),
}));
