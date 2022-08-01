import styled from "styled-components";
import { getToken as g, isProp, PropsWithAs } from "utils";

const mapTextVariant = {
  title: "h1",
  headline: "h2",
  subhead: "h3",
  subtitle: "subtitle",
  body: "p",
  overline: "span",
};

type TextProps = {
  $gutterBottom?: boolean;
  $centered?: boolean;
  $italic?: boolean;
  $variant?: keyof typeof mapTextVariant | "inherit";
  $weight?: 400 | 500 | 600 | 700;
};

const isHeading = (props: TextProps) =>
  isProp(props.$variant, ["title", "headline", "subhead", "subtitle"]);
const Text = styled.span.attrs((props: PropsWithAs<TextProps>) => ({
  as:
    props.as ||
    (props.$variant !== "inherit" &&
      props.$variant &&
      mapTextVariant[props.$variant]),
}))<TextProps>`
  margin-bottom: ${(props) =>
    props.$gutterBottom
      ? props.$variant === "overline" && "1em"
      : !isProp(props.$variant, ["overline", "inherit"]) && 0};
  margin-top: ${(props) =>
    !isProp(props.$variant, ["overline", "inherit", "body", undefined]) && 0};
  font-size: ${(props) =>
    props.$variant === "title"
      ? g("body")
      : props.$variant !== "inherit" && props.$variant && g(props.$variant)};
  text-align: ${(props) => props.$centered && "center"};
  font-style: ${(props) => props.$italic && "italic"};
  font-weight: ${(props) => (isHeading(props) ? 400 : props.$weight)};
  line-height: ${(props) =>
    isHeading(props) && props.$variant !== "inherit" && 1};
  font-family: ${(props) =>
    isHeading(props) && props.$variant !== "inherit" && g("serif")};
`;

Text.displayName = "Text";
export default Text;
