import styled, { css } from "styled-components";
import type { ThemeProps, DefaultTheme } from "styled-components";

const colKs = ["$start", "$mid", "$end"] as const;

export const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export const medias = ["_", "desktop"] as const;

type Medias = Exclude<keyof DefaultTheme["media"], "dark" | "reduce"> | "_";

type Cols = typeof cols[number];

type ColKs = typeof colKs[number];

export type ColProps<
  P extends ColKs = ColKs,
  V extends Cols = Cols,
  M extends Medias = Medias,
> = {
  [K in P]?: V | Partial<Record<M, V>>;
};

export const getColSize = (col?: number) =>
  col ? `${((100 * col) / 12).toFixed(7)}%` : "";
const toObj = (prop: unknown) =>
  (prop != null
    ? typeof prop === "object"
      ? prop
      : { _: prop }
    : {}) as Partial<Record<Medias, Cols>>;
const getColStyles = css((props: ThemeProps<DefaultTheme> & ColProps) => {
  let styles: Record<string, Record<string, string>> = {};

  for (const prop of colKs) {
    const value = toObj(props[prop]);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    for (const _media in value) {
      const media = _media as Medias;
      const mediaKey = media === "_" ? "" : props.theme.media[media];
      const colSize = getColSize(value[media]);

      styles = {
        ...styles,
        [mediaKey]: {
          ...styles[mediaKey],
          ...(prop === "$start" && {
            "--columns-start": colSize,
          }),
          ...(prop === "$mid" && {
            "--columns-mid": colSize,
          }),
          ...(prop === "$end" && {
            "--columns-end": colSize,
          }),
        },
      };
    }
  }

  return styles;
});

const Col = styled.li<ColProps>`
  ${getColStyles}
  padding-left: ${({ theme }) => theme.size.x2s};
  padding-top: ${({ theme }) => theme.size.x2s};
  margin-left: ${({ $start }) => $start && "var(--columns-start)"};
  margin-right: ${({ $end }) => $end && "var(--columns-end)"};
  ${({ $mid }) =>
    $mid &&
    css`
      flex-grow: 0;
      flex-basis: var(--columns-mid);
      max-width: var(--columns-mid);
    `}
`;

Col.displayName = "Col";
export default Col;
