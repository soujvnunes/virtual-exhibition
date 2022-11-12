import styled from "styled-components";
import type { PropsWithAs } from "styled-components";
import { isProp } from "utils";

export const mapTextVariant = {
  title: "h1",
  headline: "h2",
  subhead: "h3",
  subtitle: "h4",
  body: "p",
  overline: "span",
};
export const mapTextSize = {
  sm: {
    headline: 48,
    subhead: 40,
    subtitle: 20,
    overline: 12,
  },
  md: {
    headline: 56,
    subhead: 44,
  },
  lg: {
    headline: 64,
    subhead: 48,
  },
};

export type TextProps = Partial<
  Record<"$gutterBottom" | "$centered" | "$italic", boolean>
> & {
  $variant?: keyof typeof mapTextVariant | "inherit";
  $weight?: 400 | 500 | 600 | 700;
};

export const isHeading = (props: TextProps) =>
  isProp(props.$variant, ["title", "headline", "subhead", "subtitle"]);

const Text = styled.span.attrs((p: PropsWithAs<TextProps>) => ({
  className:
    isHeading(p) && p.$variant !== "inherit" && "tk-freight-display-pro",
  as:
    p.as ||
    (p.$variant !== "inherit" && p.$variant && mapTextVariant[p.$variant]),
}))<TextProps>`
  margin-bottom: ${(p) => p.$gutterBottom && "1em"};
  text-align: ${(p) => p.$centered && "center"};
  font-style: ${(p) => p.$italic && "italic"};
  font-weight: ${(p) => (isHeading(p) ? 400 : p.$weight)};
  line-height: ${(p) => isHeading(p) && p.$variant !== "inherit" && 1};
  font-size: ${(p) =>
    p.$variant === "headline" ||
    p.$variant === "subhead" ||
    p.$variant === "subtitle" ||
    p.$variant === "overline"
      ? p.theme.size(mapTextSize.sm[p.$variant] as CSSVarsSize, {
          pxInRem: true,
        })
      : (p.$variant === "inherit" || p.$variant === "title") && "inherit"};
  ${(p) => p.theme.media.md} {
    font-size: ${(p) =>
      (p.$variant === "headline" || p.$variant === "subhead") &&
      p.theme.size(mapTextSize.md[p.$variant] as CSSVarsSize, {
        pxInRem: true,
      })};
  }
  ${(p) => p.theme.media.lg} {
    font-size: ${(p) =>
      (p.$variant === "headline" || p.$variant === "subhead") &&
      p.theme.size(mapTextSize.lg[p.$variant] as CSSVarsSize, {
        pxInRem: true,
      })};
  }
`;

Text.displayName = "Text";
export default Text;
