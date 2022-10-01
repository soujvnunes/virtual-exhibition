import { jointRegExp, unitRem } from "./utils";

export default function generateCssVarsSize(_sizes: number[]) {
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
