import { isProp } from "utils";
import { TextProps } from "ui/Text";

export const mapTextVariant = {
  title: "h1",
  headline: "h2",
  subhead: "h3",
  subtitle: "subtitle",
  body: "p",
  overline: "span",
};
export const isHeading = (props: TextProps) =>
  isProp(props.$variant, ["title", "headline", "subhead", "subtitle"]);
