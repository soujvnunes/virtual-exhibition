import { FONT_WEIGHTS, TEXT_ALIGNS } from "consts";
import { ComponentPropsWithRef, forwardRef, useMemo } from "react";
import styled from "styled-components";
import { isProp } from "utils";

type TypograhyProps = {
  gutterBottom?: boolean;
  as?: keyof JSX.IntrinsicElements;
  align?: typeof TEXT_ALIGNS[number];
  variant?: "h2" | "h3" | "h4" | "p" | "span";
  weight?: `${typeof FONT_WEIGHTS[number]}${"" | "Italic"}` | "italic";
  color?:
    | "special"
    | "error"
    | "success"
    | "warning"
    | `${"main" | "text"}${"" | "Secondary" | "Tertiary"}`;
};

const Root = styled.span<{ $props: TypograhyProps }>(
  ({ theme, $props, as }) => ({
    marginTop: 0,
    ...(!$props.gutterBottom && {
      marginBottom: 0,
    }),
    ...($props.align === "start" && {
      textAlign: "left",
    }),
    ...($props.align === "center" && {
      textAlign: "center",
    }),
    ...($props.align === "end" && {
      textAlign: "right",
    }),
    ...($props.align === "justify" && {
      textAlign: "justify",
    }),
    ...(isProp($props.weight, ["normal", "normalItalic"]) && {
      fontWeight: 400,
    }),
    ...(isProp($props.weight, ["medium", "mediumItalic"]) && {
      fontWeight: 500,
    }),
    ...(isProp($props.weight, ["semibold", "semiboldItalic"]) && {
      fontWeight: 600,
    }),
    ...(isProp($props.weight, ["bold", "boldItalic"]) && {
      fontWeight: 700,
    }),
    ...(isProp($props.weight, [
      "italic",
      "normalItalic",
      "mediumItalic",
      "semiboldItalic",
      "boldItalic",
    ]) && {
      fontStyle: "italic",
    }),
    ...((isProp($props.variant, ["h2", "h3", "h4"]) ||
      isProp(as, ["h2", "h3", "h4"])) && {
      fontWeight: "normal",
      lineHeight: "1",
      fontFamily: theme.typography.serif,
    }),
    ...($props.variant === "span" && {
      fontSize: theme.typography.sm,
    }),
    ...($props.variant === "p" && {
      fontSize: theme.typography.md,
    }),
    ...($props.variant === "h4" && {
      fontSize: theme.typography.lg,
    }),
    ...($props.variant === "h3" && {
      fontSize: theme.typography.xl,
      [theme.media.md]: {
        fontSize: theme.typography.x2l,
      },
      [theme.media.lg]: {
        fontSize: theme.typography.x3l,
      },
    }),
    ...($props.variant === "h2" && {
      fontSize: theme.typography.x3l,
      [theme.media.md]: {
        fontSize: theme.typography.x4l,
      },
      [theme.media.lg]: {
        fontSize: theme.typography.x5l,
      },
    }),
    ...($props.color === "special" && {
      "-webkit-text-fill-color": theme.palette.transparent,
      textFillColor: theme.palette.transparent,
      "-webkit-background-clip": "text",
      backgroundClip: "text",
      backgroundImage: `linear-gradient(to right,${theme.palette.main.DEFAULT},${theme.palette.main.dark})`,
      [theme.media.dark]: {
        backgroundImage: `linear-gradient(to right,${theme.palette.main.light},${theme.palette.main.DEFAULT})`,
      },
    }),
    ...(isProp($props.color, [
      "main",
      "mainSecondary",
      "mainTertiary",
      "special",
    ]) && {
      color: theme.palette.main.dark,
      [theme.media.dark]: {
        color: theme.palette.main.light,
      },
    }),
    ...(isProp($props.color, ["text", "textSecondary", "textTertiary"]) && {
      color: theme.palette.dark,
      [theme.media.dark]: {
        color: theme.palette.light,
      },
    }),
    ...($props.color === "error" && {
      color: theme.palette.error.dark,
      [theme.media.dark]: {
        color: theme.palette.error.DEFAULT,
      },
    }),
    ...($props.color === "success" && {
      color: theme.palette.success.dark,
      [theme.media.dark]: {
        color: theme.palette.success.DEFAULT,
      },
    }),
    ...($props.color === "warning" && {
      color: theme.palette.warning.dark,
      [theme.media.dark]: {
        color: theme.palette.warning.DEFAULT,
      },
    }),
    ...(isProp($props.color, ["mainSecondary", "textSecondary"]) && {
      "--color-alpha": 0.6,
    }),
    ...(isProp($props.color, ["mainTertiary", "textTertiary"]) && {
      "--color-alpha": 0.4,
    }),
  }),
);
const Typograhy = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithRef<"span"> & TypograhyProps
>(({ as, variant, weight, color, align, gutterBottom, ...outProps }, ref) => {
  const restProps = useMemo(
    () => ({ as: as || variant, ...outProps }),
    [as, outProps, variant],
  );
  const inProps = useMemo(
    () => ({
      variant,
      weight,
      color,
      align,
      gutterBottom,
    }),
    [align, color, gutterBottom, variant, weight],
  );

  return <Root ref={ref} $props={inProps} {...restProps} />;
});

Typograhy.displayName = "Typograhy";
export default Object.assign(Typograhy, { Root });
