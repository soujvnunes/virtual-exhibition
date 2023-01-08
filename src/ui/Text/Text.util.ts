import { TextProps } from "ui/Text";
import isProp from "utils/isProp";

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
export const isHeading = (props: TextProps) =>
  isProp(props.$variant, ["title", "headline", "subhead", "subtitle"]);
