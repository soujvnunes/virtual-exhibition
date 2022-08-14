import type { Alpha, Color, Colors, Size } from "app/GlobalStyle";

export const mapColor = [
  "text",
  "background",
  "main",
  "accent",
  "success",
  "info",
  "alert",
  "error",
] as const;
export const mapAlpha = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "quinary",
] as const;
export const mapSize = [
  1280, 640, 320, 160, 80, 74, 72, 68, 64, 60, 56, 52, 48, 44, 40, 36, 32, 28,
  24, 20, 16, 12, 8, 4, 2, 1, 0,
] as const;
export const REM = "pxToRem";

export function generateSizeObject(
  prop: string | number,
  value: string | number,
) {
  return `--size-${prop}: ${value}`;
}
export function generateSize(newSizes: (string | null)[], size: Size) {
  const sizeInPx = generateSizeObject(size, size ? `${size}px` : size);
  const sizeInRem =
    size >= 12 && size <= 64
      ? generateSizeObject(`${size}${REM}`, `${size / 16}rem`)
      : null;

  return [...newSizes, sizeInPx, sizeInRem];
}

export function getColor(color: Color) {
  return (alpha: Alpha = "primary") =>
    `rgba(var(--color-${color}) / var(--alpha-${alpha}))`;
}
export function getSize(
  _size: Size,
  options?: Partial<Record<typeof REM | "negative", boolean>>,
) {
  const unit = options?.[REM] ? REM : "";
  const size = `var(--size-${_size}${unit})`;

  return options?.negative ? `calc(${size} * -1)` : size;
}

export const CSSVarsSize = mapSize
  .reduce(generateSize, [] as (ReturnType<typeof generateSizeObject> | null)[])
  .join(";\n");
export const theme = {
  color: mapColor.reduce(
    (newColors, color) => ({
      ...newColors,
      [color]: getColor(color),
    }),
    {} as Colors,
  ),
  size: getSize,
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
