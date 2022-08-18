import type {
  CSSVarState,
  CSSVarColor,
  CSSVarTone,
  CSSVarsSize,
  CSSVarsSizes,
} from "app/GlobalStyle";
import { mix, parseToRgb } from "polished";
import type { RgbColor } from "polished/lib/types/color";
import { isProp } from "utils";

export const cssVarColor = {
  main: "#ff99ff",
  success: "#66ff33",
  info: "#3399ff",
  warning: "#ffcc00",
  error: "#ff3333",
} as const;
export const cssVarState = {
  primary: 1,
  secondary: 0.6,
  tertiary: 0.4,
  quaternary: 0.2,
  quinary: 0.16,
  senary: 0.09,
} as const;
export const cssVarTone = {
  lighter: 0.1,
  light: 0.4,
  dark: 0.8,
  darker: 0.1,
} as const;
export const cssVarsSizeProp = [
  1280, 640, 320, 160, 80, 74, 72, 68, 64, 60, 56, 52, 48, 44, 40, 36, 32, 28,
  24, 20, 16, 12, 8, 4, 2, 1, 0,
] as const;
export const unitRem = "pxInRem";
export const jointRegExp = ";\n";

function getColorChannel(color: string) {
  const rgb = parseToRgb(color);

  return Object.keys(rgb)
    .reduce(
      (channels, channel) => [...channels, rgb[channel as keyof RgbColor]],
      [] as number[],
    )
    .join(" ");
}
/**
 *
 *
 * START CSS VARIABLES GENERATION
 *
 *
 */
export const cssVarsSizes = cssVarsSizeProp
  .reduce((newSizes, size: CSSVarsSize) => {
    const sizeInPx = `--size-${size}px: ${size}px`;
    const sizeInRem = `--size-${size}${unitRem}: ${size / 16}rem`;
    const renderInRem = size >= 12 && size <= 64 ? sizeInRem : null;

    return [...newSizes, sizeInPx, renderInRem];
  }, [] as CSSVarsSizes)
  .join(jointRegExp);
export const cssVarColors = Object.keys(cssVarColor)
  .reduce((colors, color) => {
    const colorValue = cssVarColor[color as CSSVarColor];
    const colorTones = Object.keys(cssVarTone).reduce((tones, tone) => {
      const toneValue = cssVarTone[tone as CSSVarTone];

      return [
        ...tones,
        `--color-${color}-${tone}: ${getColorChannel(
          mix(
            toneValue,
            colorValue,
            isProp(tone, ["lighter", "light"]) ? "#fff" : "#000",
          ),
        )}`,
      ];
    }, [] as string[]);

    return [
      ...colors,
      ...colorTones,
      `--color-${color}: ${getColorChannel(colorValue)}`,
    ];
  }, [] as string[])
  .join(jointRegExp);
export const cssVarStates = Object.keys(cssVarState)
  .reduce(
    (states, state) => [
      ...states,
      `--state-${state}: ${cssVarState[state as CSSVarState]}`,
    ],
    [] as string[],
  )
  .join(jointRegExp);
/**
 *
 *
 * END CSS VARIABLES GENERATION
 *
 *
 */

// TODO: get it like is being specified on the issue
export function getCSSVarsColorChannel(
  color: CSSVarColor,
  options?: {
    tone?: CSSVarTone;
    state?: CSSVarState;
  },
) {
  const state = options?.state ?? "default";

  return `rgba(var(--color-${color}) / var(--alpha-${state}))`;
}
// TODO: get it like is being specified on the issue
export function getCSSVarsSize(
  _size: CSSVarsSize,
  options?: Partial<Record<typeof unitRem | "negative", boolean>>,
) {
  const unit = options?.[unitRem] ? unitRem : "px";
  const size = `var(--size-${_size}${unit})`;

  return options?.negative ? `calc(${size} * -1)` : size;
}

export const theme = {
  color: getCSSVarsColorChannel,
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
