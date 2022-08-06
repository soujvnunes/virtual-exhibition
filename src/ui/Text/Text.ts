import styled from "styled-components";
import { getToken, PropsWithAs } from "utils";
import { mapTextVariant, TextProps, isHeading } from "ui/Text";

const Text = styled.span.attrs((props: PropsWithAs<TextProps>) => ({
  className:
    isHeading(props) &&
    props.$variant !== "inherit" &&
    "tk-freight-display-pro",
  as:
    props.as ||
    (props.$variant !== "inherit" &&
      props.$variant &&
      mapTextVariant[props.$variant]),
}))<TextProps>`
  margin-bottom: ${(props) => props.$gutterBottom && "1em"};
  font-size: ${(props) =>
    props.$variant === "title"
      ? getToken("text.body")
      : props.$variant !== "inherit" &&
        props.$variant &&
        getToken(`text.${props.$variant}`)};
  text-align: ${(props) => props.$centered && "center"};
  font-style: ${(props) => props.$italic && "italic"};
  font-weight: ${(props) => (isHeading(props) ? 400 : props.$weight)};
  line-height: ${(props) =>
    isHeading(props) && props.$variant !== "inherit" && 1};
`;

Text.displayName = "Text";
export default Text;
