import type {
  GlobalStyleColorProps,
  GlobalStyleSizeProps,
} from "app/GlobalStyle";
import { mix, parseToRgb } from "polished";
import type { RgbColor } from "polished/lib/types/color";
import { isProp } from "utils";

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
export function generateCssVarsSize(_sizes: GlobalStyleSizeProps) {
  let sizes: Array<string> = [];

  for (const size of _sizes) {
    sizes = [
      ...sizes,
      `--size-${size}px: ${size}px`,
      `--size-${size}${unitRem}: ${size / 16}rem`,
    ];
  }

  return sizes.join(jointRegExp);
}
export function generateCssVarsColor(value: GlobalStyleColorProps) {
  Object.keys(value.base)
    .reduce((colors, color) => {
      const colorValue = value.base[color];
      const colorTones = Object.keys(value.tone).reduce((tones, tone) => {
        const toneValue = value.tone[tone];

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
}
export function generateCssVarsState(value: GlobalStyleColorProps) {
  return Object.keys(value.state)
    .reduce(
      (states, state) => [...states, `--state-${state}: ${value.state[state]}`],
      [] as string[],
    )
    .join(jointRegExp);
}
/**
 *
 *
 * END CSS VARIABLES GENERATION
 *
 *
 */

// TODO: get it like is being specified on the issue
export function getColor(
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
export function getSize(
  _size: CSSVarsSize,
  options?: Partial<Record<typeof unitRem | "negative", boolean>>,
) {
  const unit = options?.[unitRem] ? unitRem : "px";
  const size = `var(--size-${_size}${unit})`;

  return options?.negative ? `calc(${size} * -1)` : size;
}

export const theme = {
  color: getColor,
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
