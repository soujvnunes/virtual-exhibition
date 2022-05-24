import { forwardRef } from "react";
import styled, { ComponentPropsWithAs, css, token } from "styled-components";
import { isProp } from "utils";

const VARIANT = {
  headline: "h2",
  title: "h3",
  subtitle: "h4",
  body1: "p",
  body2: "span",
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

const Root = styled.span<ComponentPropsWithAs<$Props>>`
  margin-bottom: ${({ $props }) =>
    $props.gutterBottom ? $props.variant === "body2" && "1em" : 0};
  margin-top: ${({ $props }) =>
    !isProp($props.variant, ["body2", undefined]) && 0};
  font-size: ${({ $props }) => $props.variant && token($props.variant)};
  text-align: ${({ $props }) => $props.centered && "center"};
  font-style: ${({ $props }) => $props.italic && "italic"};
  font-weight: ${({ $props }) => $props.weight && WEIGHT[$props.weight]};
  ${({ $props }) =>
    isProp($props.variant, ["headline", "title", "subtitle"]) &&
    css`
      font-weight: 400;
      line-height: 1;
      font-family: ${token("serif")};
    `}
`;
const Typograhy = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithAs<$Props, "span">
>(({ as, variant, weight, centered, italic, gutterBottom, ...props }, ref) => {
  return (
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
  );
});

Typograhy.displayName = "Typograhy";
export default Object.assign(Typograhy, { Root });
