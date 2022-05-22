import { forwardRef } from "react";
import styled, { ComponentPropsWithAs, css } from "styled-components";
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
const COLORS = [
  "main",
  "accent",
  "text",
  "error",
  "warning",
  "success",
] as const;
const ACTIONS = ["", ".hover", ".disable"] as const;

type Colors = typeof COLORS[number];
type $Props = {
  gutterBottom?: boolean;
  centered?: boolean;
  italic?: boolean;
  variant?: keyof typeof VARIANT;
  weight?: keyof typeof WEIGHT;
  color?: "special" | `${Colors}${typeof ACTIONS[number]}`;
};

const Root = styled.span<ComponentPropsWithAs<$Props>>`
  margin-bottom: ${({ $props }) =>
    $props.gutterBottom ? $props.variant === "body2" && "1em" : 0};
  margin-top: ${({ $props }) =>
    !isProp($props.variant, ["body2", undefined]) && 0};
  font-size: ${({ $props, theme }) =>
    $props.variant && theme.typography[$props.variant]};
  color: ${({ $props, theme }) => {
    if ($props.color) {
      const handleSpecial = $props.color === "special" ? "main" : $props.color;

      if (handleSpecial.includes(".")) {
        const colorFrag = handleSpecial?.split(".");
        const colorRgb = colorFrag[0] as Colors;
        const colorAlpha = colorFrag[1].replace("\\.", "") as
          | "hover"
          | "disable";

        return `rgb(${theme.palette[colorRgb]} / ${theme.action[colorAlpha]})`;
      }

      return `rgb(${theme.palette[handleSpecial as Colors]})`;
    }
  }};
  text-align: ${({ $props }) => $props.centered && "center"};
  font-style: ${({ $props }) => $props.italic && "italic"};
  font-weight: ${({ $props }) => $props.weight};
  ${({ $props, theme }) =>
    $props.color === "special" &&
    css`
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-image: linear-gradient(
        to right,
        rgb(${theme.palette.main}),
        rgb(${theme.palette.accent})
      );
    `}
  ${({ $props, theme }) =>
    $props.variant &&
    isProp($props.variant, ["headline", "title", "subtitle"]) &&
    css`
      font-weight: 400;
      line-height: 1;
      font-family: ${theme.typography.serif};
    `}
`;
const Typograhy = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithAs<$Props, "span">
>(
  (
    { as, variant, weight, centered, italic, gutterBottom, color, ...props },
    ref,
  ) => {
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
          color,
        }}
        {...props}
      />
    );
  },
);

Typograhy.displayName = "Typograhy";
export default Object.assign(Typograhy, { Root });
