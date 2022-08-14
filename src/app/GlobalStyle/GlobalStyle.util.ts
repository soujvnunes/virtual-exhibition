import type {
  CSSVarsColorAlpha,
  CSSVarsColorChannel,
  CSSVarsColorsChannel,
  CSSVarsSize,
} from "app/GlobalStyle";

export const cssVarsColorChannelProp = [
  "text",
  "background",
  "main",
  "accent",
  "success",
  "info",
  "alert",
  "error",
] as const;
export const cssVarsColorAlphaProp = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "quinary",
] as const;
export const cssVarsSizeProp = [
  1280, 640, 320, 160, 80, 74, 72, 68, 64, 60, 56, 52, 48, 44, 40, 36, 32, 28,
  24, 20, 16, 12, 8, 4, 2, 1, 0,
] as const;
export const UNIT_REM = "pxToRem";

export function generateCSSVarsSizeObject(
  prop: string | number,
  value: string | number,
) {
  return `--size-${prop}: ${value}`;
}
export function generateCSSVarsSize(
  newSizes: (string | null)[],
  size: CSSVarsSize,
) {
  const sizeInPx = generateCSSVarsSizeObject(size, size ? `${size}px` : size);
  const sizeInRem =
    size >= 12 && size <= 64
      ? generateCSSVarsSizeObject(`${size}${UNIT_REM}`, `${size / 16}rem`)
      : null;

  return [...newSizes, sizeInPx, sizeInRem];
}

export function getCSSVarsColorChannel(color: CSSVarsColorChannel) {
  return (alpha: CSSVarsColorAlpha = "primary") =>
    `rgba(var(--color-${color}) / var(--alpha-${alpha}))`;
}
export function getCSSVarsSize(
  _size: CSSVarsSize,
  options?: Partial<Record<typeof UNIT_REM | "negative", boolean>>,
) {
  const unit = options?.[UNIT_REM] ? UNIT_REM : "";
  const size = `var(--size-${_size}${unit})`;

  return options?.negative ? `calc(${size} * -1)` : size;
}

export const CSSVarsSizes = cssVarsSizeProp
  .reduce(generateCSSVarsSize, [] as ReturnType<typeof generateCSSVarsSize>)
  .join(";\n");
export const theme = {
  color: cssVarsColorChannelProp.reduce(
    (newColors, color) => ({
      ...newColors,
      [color]: getCSSVarsColorChannel(color),
    }),
    {} as CSSVarsColorsChannel,
  ),
  size: getCSSVarsSize,
  media: {
    sm: "@media (min-width: 0rem) or (max-width: 640px)",
    md: "@media (min-width: 640px)",
    lg: "@media (min-width: 1280px)",
    light:
      "@media (prefers-color-scheme: no-preference) or (prefers-color-scheme: light)",
    dark: "@media (prefers-color-scheme: dark)",
    idle: "@media (prefers-reduced-motion: reduce)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
} as const;
