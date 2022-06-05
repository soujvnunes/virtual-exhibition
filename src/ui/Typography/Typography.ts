import { VARIANT_MAP } from "consts";
import styled, { PropsWithAs } from "styled-components";
import { $TypographyProps } from "types";
import { token as g, isProp } from "utils";

const isHeading = (props: $TypographyProps) =>
  isProp(props.$variant, ["title", "headline", "subhead", "subtitle"]);
const Typography = styled.span.attrs(
  (props: PropsWithAs<$TypographyProps>) => ({
    as:
      props.as ||
      (props.$variant !== "inherit" &&
        props.$variant &&
        VARIANT_MAP[props.$variant]),
  }),
)<$TypographyProps>`
  margin-bottom: ${(props) =>
    props.$gutterBottom
      ? props.$variant === "overline" && "1em"
      : props.$variant !== "inherit" && 0};
  margin-top: ${(props) =>
    !isProp(props.$variant, ["overline", "inherit", undefined]) && 0};
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

Typography.displayName = "Typography";
export default Typography;
