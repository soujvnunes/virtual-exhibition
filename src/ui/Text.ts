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
  title: "md",
  headline: "x4l",
  subhead: "x3l",
  subtitle: "x2l",
  body: "md",
  label: "sm",
} as const;

export type TextProps = Partial<
  Record<"$gutterBottom" | "$center", boolean>
> & {
  $variant?: keyof typeof VARIANTS_ELEMENTS | "inherit";
  $weight?: keyof DefaultTheme["weight"];
};

function isHeading(
  variant: TextProps["$variant"],
): variant is "title" | "headline" | "subhead" | "subtitle" {
  return (
    variant === "title" ||
    variant === "headline" ||
    variant === "subhead" ||
    variant === "subtitle"
  );
}
function isInherit(
  variant: TextProps["$variant"],
): variant is "inherit" | undefined {
  return variant === "inherit" || typeof variant === "undefined";
}
function isSmall(
  variant: TextProps["$variant"],
): variant is "label" | "overline" {
  return variant === "label" || variant === "overline";
}

const Text = styled.span.attrs<PropsWithAs<TextProps>>(({ $variant, as }) => ({
  className: isHeading($variant) && "tk-freight-display-pro",
  as: as || (!isInherit($variant) && VARIANTS_ELEMENTS[$variant]),
}))<TextProps>`
  margin-bottom: ${({ $gutterBottom }) => $gutterBottom && "1em"};
  text-align: ${({ $center }) => $center && "center"};
  text-transform: ${({ $variant }) => $variant === "label" && "uppercase"};
  letter-spacing: ${({ $variant }) => $variant === "label" && "0.1em"};
  line-height: ${({ $variant, theme }) =>
    ($variant === "label" && theme.kerning.wide) ||
    (isHeading($variant) && theme.kerning.tight)};
  font-weight: ${({ $variant, theme, $weight }) =>
    (isHeading($variant) && theme.weight.regular) ||
    ($variant === "label" && theme.weight.bolder) ||
    ($weight && theme.weight[$weight])};
  font-size: ${({ $variant, theme }) =>
    isSmall($variant)
      ? "0.75rem"
      : !isInherit($variant) && theme.sizing[VARIANTS_SIZING[$variant]]};
`;

Text.displayName = "Text";
export default Text;
