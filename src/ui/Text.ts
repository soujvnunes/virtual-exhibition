import styled, { DefaultTheme } from "styled-components";
import type { PropsWithAs } from "styled-components";
import { getResponsiveTheme } from "utils/theme";

const textEls = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body1: "p",
  body2: "span",
};
const textVars = {
  h1: "x7l",
  h2: "x6l",
  h3: "x5l",
  h4: "x4l",
  body1: "md",
  body2: "sm",
} as const;

export type TextProps = Partial<
  Record<"$gutterBottom" | "$centered" | "$italic" | "$heading", boolean>
> & {
  $variant?: keyof typeof textEls | "inherit";
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

const Text = styled.span.attrs(
  ({ $variant, $heading, as }: PropsWithAs<TextProps>) => ({
    className: (isHeading($variant) || $heading) && "tk-freight-display-pro",
    as: as || (!isInherit($variant) && textEls[$variant]),
  }),
)<TextProps>`
  margin-bottom: ${({ $gutterBottom }) => $gutterBottom && "1em"};
  text-align: ${({ $centered }) => $centered && "center"};
  font-style: ${({ $italic }) => $italic && "italic"};
  line-height: ${({ $variant, $heading, theme }) =>
    (isHeading($variant) || $heading) && theme.kerning.heading};
  font-weight: ${({ $variant, theme, $weight, $heading }) =>
    isHeading($variant) || $heading
      ? theme.weight.regular
      : $weight && theme.weight[$weight]};
  ${({ $variant }) =>
    !isInherit($variant) &&
    getResponsiveTheme({
      fontSize: textVars[$variant],
    })}
`;

Text.displayName = "Text";
export default Text;
