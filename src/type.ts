import { FONT_WEIGHTS } from "utils";

export type ColorStates = "" | "Secondary" | "Tertiary";
export type ColorsWithState = "main" | "text";
export type FontStyles = "" | "Italic";
export type FontWeights = typeof FONT_WEIGHTS[number];
