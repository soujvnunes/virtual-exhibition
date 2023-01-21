import styled, { DefaultTheme } from "styled-components";
import type { PropsWithAs } from "styled-components";
import { getResponsiveTheme } from "utils/theme";

const mapTextVariant = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body2: "p",
  body1: "span",
};

export type TextProps = Partial<
  Record<"$gutterBottom" | "$centered" | "$italic", boolean>
> & {
  $variant?: keyof typeof mapTextVariant | "inherit";
  $weight?: keyof DefaultTheme["weight"];
};

function isHeading(
  variant: TextProps["$variant"],
): variant is "h1" | "h2" | "h3" | "h4" {
  return (
    variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4"
  );
}
function isInherit(
  variant: TextProps["$variant"],
): variant is "inherit" | undefined {
  return variant === "inherit" || typeof variant === "undefined";
}

const Text = styled.span.attrs(({ $variant, as }: PropsWithAs<TextProps>) => ({
  className: isHeading($variant) && "tk-freight-display-pro",
  as: as || (!isInherit($variant) && mapTextVariant[$variant]),
}))<TextProps>`
  margin-bottom: ${({ $gutterBottom }) => $gutterBottom && "1em"};
  text-align: ${({ $centered }) => $centered && "center"};
  font-style: ${({ $italic }) => $italic && "italic"};
  line-height: ${({ $variant, theme }) =>
    isHeading($variant) && theme.kerning.heading};
  font-weight: ${({ $variant, theme, $weight }) =>
    isHeading($variant)
      ? theme.weight.regular
      : $weight && theme.weight[$weight]};
  ${({ $variant }) =>
    !isInherit($variant) &&
    getResponsiveTheme({
      fontSize: `typography.${$variant}`,
    })}
`;

Text.displayName = "Text";
export default Text;
