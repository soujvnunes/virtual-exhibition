import { ComponentPropsWithRef, ElementType } from "react";
import { ColorStates, ColorsWithState, FontStyles, FontWeights } from "type";
import { TEXT_VARIANTS } from "utils";

export interface WithTextStyles {
  variant?: keyof typeof TEXT_VARIANTS;
  weight?: `${FontWeights}${FontStyles}` | "italic";
  color?:
    | "special"
    | "error"
    | "success"
    | "warning"
    | `${ColorsWithState}${ColorStates}`;
}
export type TextProps = ComponentPropsWithRef<
  "h2" | "h3" | "h4" | "p" | "span"
> &
  WithTextStyles & {
    as?: ElementType;
    align?: "start" | "center" | "end" | "justify";
  };
