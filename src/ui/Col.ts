import styled from "styled-components";
import { getResponsiveTheme } from "utils/theme";

export const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export const medias = ["DEFAULT", "md", "lg"] as const;

type Medias = typeof medias[number];

type Cols = typeof cols[number];

type ColKs = "$start" | "$mid" | "$end";

export type ColProps = {
  [K in ColKs]?: Cols | Partial<Record<Medias, Cols>>;
};

export function getColSize(col: number) {
  return `${((100 * col) / 12).toFixed(6)}%`;
}
function getStyles(prop: string, col: number) {
  const value = getColSize(col);

  return {
    // TODO: they're being ignored for some reason
    ...(prop === "$start" && {
      marginLeft: value,
    }),
    ...(prop === "$mid" && {
      flexBasis: value,
      maxWidth: value,
    }),
    ...(prop === "$end" && {
      marginRight: value,
    }),
  };
}

const Col = styled.li<ColProps>`
  flex-grow: ${({ $mid }) => $mid && 0};
  ${getResponsiveTheme({
    paddingLeft: "grid.padding",
    paddingTop: "grid.padding",
  })}
  ${({ theme, ...props }) =>
    ["$start", "$mid", "$end"].reduce((styles, prop) => {
      const value = props[prop as ColKs];

      if (!value) return styles;

      if (typeof value === "number") {
        return {
          ...styles,
          ...getStyles(prop, value),
        };
      }

      return {
        ...styles,
        ...Object.keys(value).reduce((mediaStyles, _media) => {
          const media = _media as Medias;
          const mediaValue = value[media];

          if (!mediaValue) return mediaStyles;

          return {
            ...mediaStyles,
            [theme.media[media]]: {
              // @ts-expect-error Media types cannot be used to destruct object
              ...mediaStyles[theme.media[media]],
              ...getStyles(prop, mediaValue),
            },
          };
        }, {}),
      };
    }, {})}
`;

Col.displayName = "Col";
export default Col;
