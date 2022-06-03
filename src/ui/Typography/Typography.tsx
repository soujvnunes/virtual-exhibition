import { PropsWithAs } from "spec";
import styled, { css } from "styled-components";
import { getTheme as g, isProp } from "utils";

const VARIANT = {
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  overline: "span",
} as const;
const WEIGHT = {
  normal: 400,
  semibold: 500,
  bold: 600,
  bolder: 700,
} as const;

type Props = {
  $gutterBottom?: boolean;
  $centered?: boolean;
  $italic?: boolean;
  $variant?: keyof typeof VARIANT;
  $weight?: keyof typeof WEIGHT;
};

const Typography = styled.span.attrs((props: PropsWithAs<Props>) => ({
  as: props.as || props.$variant,
}))<Props>`
  margin-bottom: ${(props) =>
    props.$gutterBottom ? props.$variant === "overline" && "1em" : 0};
  margin-top: ${(props) =>
    !isProp(props.$variant, ["overline", undefined]) && 0};
  font-size: ${(props) => props.$variant && g(props.$variant)};
  text-align: ${(props) => props.$centered && "center"};
  font-style: ${(props) => props.$italic && "italic"};
  font-weight: ${(props) => props.$weight && WEIGHT[props.$weight]};
  ${(props) =>
    isProp(props.$variant, ["h2", "h3", "h4"]) &&
    css`
      font-weight: 400;
      line-height: 1;
      font-family: ${g("serif")};
    `}
`;

Typography.displayName = "Typography";
export default Typography;
