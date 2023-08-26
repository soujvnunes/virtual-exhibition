import styled from "styled-components";
import type { DefaultTheme } from "styled-components";
import { PropsWithAs } from "utils/types";

const VARIANTS_ELEMENTS = {
  title: "h1",
  headline: "h2",
  subhead: "h3",
  subtitle: "h4",
  body: "p",
  label: "button",
  overline: "span",
};
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

const Text = styled.span.attrs<PropsWithAs<TextProps>>(({ $variant, as }) => ({
  className: isHeading($variant) && "tk-freight-display-pro",
  as: as || (!isInherit($variant) && VARIANTS_ELEMENTS[$variant]),
}))<TextProps>`
  margin-bottom: ${({ $gutterBottom }) => $gutterBottom && "1em"};
  text-align: ${({ $center }) => $center && "center"};
  text-transform: ${({ $variant }) => $variant === "label" && "uppercase"};
  letter-spacing: ${({ $variant }) =>
    ($variant === "label" || $variant === "title") && "0.1em"};
  line-height: ${({ $variant, theme }) =>
    ($variant === "title" && theme.kerning.tighter) ||
    ((isHeading($variant) || $variant === "label") && theme.kerning.tight)};
  font-size: ${({ $variant, theme }) =>
    $variant === "body"
      ? "1rem"
      : isSmall($variant)
      ? "0.75rem"
      : isHeading($variant) && theme.size[VARIANTS_SIZING[$variant]]};
  font-weight: ${({ $variant, $weight, theme }) =>
    $variant === "label" || $variant === "title"
      ? theme.weight.heavy
      : isHeading($variant)
      ? theme.weight.regular
      : $weight && theme.weight[$weight]};
`;

Text.displayName = "Text";
export default Text;
