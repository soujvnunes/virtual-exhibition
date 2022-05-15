import { FONT_WEIGHTS, TEXT_ALIGNS, TEXT_VARIANTS } from "consts";
import { forwardRef, useMemo } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import { isProp } from "utils";

type TypograhyProps = {
  align?: typeof TEXT_ALIGNS[number];
  variant?: keyof typeof TEXT_VARIANTS;
  weight?: `${typeof FONT_WEIGHTS[number]}${"" | "Italic"}` | "italic";
  color?:
    | "special"
    | "error"
    | "success"
    | "warning"
    | `${"main" | "text"}${"" | "Secondary" | "Tertiary"}`;
};

const Root = styled.span(({ theme, $props }) => ({
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
  ...($props.variant === "overline" && theme.typography.sm),
  ...($props.variant === "paragraph" && theme.typography.md),
  ...($props.variant === "subtitle" && theme.typography.lg),
  ...($props.variant === "title" && {
    ...theme.typography.xl,
    [theme.media.md]: theme.typography.x2l,
    [theme.media.lg]: theme.typography.x3l,
  }),
  ...($props.variant === "headline" && {
    ...theme.typography.x3l,
    [theme.media.md]: theme.typography.x4l,
    [theme.media.lg]: theme.typography.x5l,
  }),
  ...($props.color === "special" && {
    "-webkit-text-fill-color": theme.palette.transparent,
    textFillColor: theme.palette.transparent,
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
}));
const Typograhy = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  StyledComponentPropsWithRef<"span"> & TypograhyProps
>(({ as, variant, weight, color, align, ...inProps }, ref) => {
  const props = { as: as || (variant && TEXT_VARIANTS[variant]), ...inProps };
  const $props = useMemo(
    () => ({
      variant,
      weight,
      color,
      align,
    }),
    [align, color, variant, weight],
  );

  return <Root ref={ref} $props={$props} {...props} />;
});

Typograhy.displayName = "Typograhy";
export default Object.assign(Typograhy, { Root });
