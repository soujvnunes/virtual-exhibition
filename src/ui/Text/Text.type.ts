import { mapTextVariant } from "ui/Text";

export type TextProps = Partial<
  Record<"$gutterBottom" | "$centered" | "$italic", boolean>
> & {
  $variant?: keyof typeof mapTextVariant | "inherit";
  $weight?: 400 | 500 | 600 | 700;
};
