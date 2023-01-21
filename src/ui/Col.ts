import styled, { css } from "styled-components";
import type { ThemeProps, DefaultTheme } from "styled-components";
import { getResponsiveTheme } from "utils/theme";

const colKs = ["$start", "$mid", "$end"] as const;

export const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export const medias = ["DEFAULT", "md", "lg"] as const;

type Medias = typeof medias[number];

type Cols = typeof cols[number];

type ColKs = typeof colKs[number];

export type ColProps<
  P extends ColKs = ColKs,
  V extends Cols = Cols,
  M extends Medias = Medias,
> = {
  [K in P]?: V | Partial<Record<M, V>>;
};

export function getColSize(col?: number) {
  return col ? `${((100 * col) / 12).toFixed(2)}%` : "";
}
function toObj(prop: unknown) {
  return (
    prop != null
      ? typeof prop === "object"
        ? prop
        : { [medias[0]]: prop }
      : {}
  ) as Partial<Record<Medias, Cols>>;
}

const getColStyles = css((props: ThemeProps<DefaultTheme> & ColProps) => {
  let styles: Record<string, Record<string, string>> = {};

  for (const prop of colKs) {
    const value = toObj(props[prop]);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    for (const _media in value) {
      const media = _media as Medias;
      const mediaKey = props.theme.media[media];
      const colSize = getColSize(value[media]);

      styles = {
        ...styles,
        [mediaKey]: {
          ...styles[mediaKey],
          ...(prop === "$start" && {
            marginLeft: colSize,
          }),
          ...(prop === "$mid" && {
            flexBasis: colSize,
            maxWidth: colSize,
          }),
          ...(prop === "$end" && {
            marginRight: colSize,
          }),
        },
      };
    }
  }

  return styles;
});

const Col = styled.li<ColProps>`
  flex-grow: ${({ $mid }) => $mid && 0};
  ${getResponsiveTheme({
    paddingLeft: "grid.padding",
    paddingTop: "grid.padding",
  })}
  ${getColStyles}
`;

Col.displayName = "Col";
export default Col;
