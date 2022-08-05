import { Cols } from "./Col.type";

export const mapMediaQueries = ["sm", "md", "lg"];
export const mapCols = Array.from(new Array(12)).map((_, index) => index + 1);
export const getColSize = (col: Cols) => `${(100 * col) / 12}%`;
export const convertToObj = (
  prop: unknown,
): Partial<Record<"sm" | "md" | "lg", Cols>> =>
  prop != null ? (typeof prop === "object" ? prop : { sm: prop }) : {};
