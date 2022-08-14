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
export const PX = "px";
export const REM = "rem";

export function generateSizeObject(
  prop: string | number,
  value: string | number,
) {
  return `--size-${prop}: ${value}`;
}
export function generateSize(sizes: Size[] = [...mapSize]) {
  return sizes
    .reduce((newSizes, size) => {
      const cur = size as Size;
      const sizeInPxProp = `${cur}${PX}`;
      const sizeInPx = generateSizeObject(
        sizeInPxProp,
        cur ? sizeInPxProp : cur,
      );
      const sizeInRem =
        cur >= 12 && cur <= 64
          ? generateSizeObject(`${cur}${REM}`, `${cur / 16}${REM}`)
          : null;

      return [...newSizes, sizeInPx, sizeInRem];
    }, [] as (ReturnType<typeof generateSizeObject> | null)[])
    .join(";\n");
}

export function getColor(color: Color) {
  return (alpha: Alpha = "primary") =>
    `rgba(var(--color-${color}) / var(--alpha-${alpha}))`;
}
export function getSize(
  _size: Size,
  options?: Partial<Record<typeof REM | "negative", boolean>>,
) {
  const unit = options?.rem ? REM : PX;
  const size = `var(--size-${_size}${unit})`;

  return options?.negative ? `calc(${size} * -1)` : size;
}

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
