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
  margin-bottom: ${({ $gutterBottom }) => {
    if ($gutterBottom) return "1em";
  }};
  text-align: ${({ $center }) => {
    if ($center) return "center";
  }};
  text-transform: ${({ $variant }) => {
    if ($variant === "label") return "uppercase";
  }};
  letter-spacing: ${({ $variant }) => {
    if ($variant === "label") return "0.1em";
  }};
  line-height: ${({ $variant, theme }) => {
    if ($variant === "label") return theme.kerning.wide;

    if (isHeading($variant)) return theme.kerning.tight;
  }};
  font-weight: ${({ $variant, theme, $weight }) => {
    if (isHeading($variant)) return theme.weight.regular;

    if ($variant === "label") return theme.weight.heavy;

    if ($weight) return theme.weight[$weight];
  }};
  font-size: ${({ $variant, theme }) => {
    if (isSmall($variant)) return "0.75rem";

    if (!isInherit($variant)) return theme.sizing[VARIANTS_SIZING[$variant]];
  }};
`;

Text.displayName = "Text";
export default Text;
