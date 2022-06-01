import { forwardRef } from "react";
import { PropsWithAs } from "spec";
import styled, { css } from "styled-components";
import { getTheme as g, isProp } from "utils";

const VARIANT = {
  headline: "h2",
  title: "h3",
  subtitle: "h4",
  body: "p",
  overline: "span",
} as const;
const WEIGHT = {
  normal: 400,
  semibold: 500,
  bold: 600,
  bolder: 700,
} as const;

type $Props = {
  gutterBottom?: boolean;
  centered?: boolean;
  italic?: boolean;
  variant?: keyof typeof VARIANT;
  weight?: keyof typeof WEIGHT;
};

const Root = styled.span<PropsWithAs<$Props>>`
  margin-bottom: ${({ $props }) =>
    $props.gutterBottom ? $props.variant === "overline" && "1em" : 0};
  margin-top: ${({ $props }) =>
    !isProp($props.variant, ["overline", undefined]) && 0};
  font-size: ${({ $props }) => $props.variant && g($props.variant)};
  text-align: ${({ $props }) => $props.centered && "center"};
  font-style: ${({ $props }) => $props.italic && "italic"};
  font-weight: ${({ $props }) => $props.weight && WEIGHT[$props.weight]};
  ${({ $props }) =>
    isProp($props.variant, ["headline", "title", "subtitle"]) &&
    css`
      font-weight: 400;
      line-height: 1;
      font-family: ${g("serif")};
    `}
`;
const Typograhy = forwardRef<HTMLSpanElement, PropsWithAs<$Props, "span">>(
  ({ as, variant, weight, centered, italic, gutterBottom, ...props }, ref) => (
    <Root
      ref={ref}
      as={as || (variant && VARIANT[variant])}
      $props={{
        variant,
        weight,
        centered,
        italic,
        gutterBottom,
      }}
      {...props}
    />
  ),
);

Typograhy.displayName = "Typograhy";
export default Object.assign(Typograhy, { Root });
