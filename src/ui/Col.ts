import styled from "styled-components";
import { getTheme } from "app/GlobalStyle";

export const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export const medias = ["DEFAULT", "md", "lg"] as const;

type Medias = typeof medias[number];

type Cols = typeof cols[number];

type ColKs = "$start" | "$mid" | "$end";

export type ColProps = {
  [K in ColKs]?: Cols | Partial<Record<Medias, Cols>>;
};

export function getColSize(col: number) {
  return `${(100 * col) / 12}%`;
}
function getStyles(prop: string, col: number) {
  const value = getColSize(col);

  return {
    ...(prop === "$start" && {
      marginLeft: value,
    }),
    ...(prop === "$end" && {
      marginRight: value,
    }),
    ...(prop === "$mid" && {
      flexBasis: value,
      maxWidth: value,
    }),
  };
}

const Col = styled.li<ColProps>`
  ${getTheme({
    paddingLeft: "sm",
    paddingTop: "sm",
  })}
  flex-grow: ${(props) => props.$mid && props.theme.size.x6s};
  ${(props) =>
    Object.keys(["$start", "$mid", "$end"]).reduce((styles, prop) => {
      const value = props[prop as ColKs];

      if (!value) return {};

      if (typeof value === "number") return getStyles(prop, value);

      return {
        ...styles,
        ...Object.keys(value).reduce((mediaStyles, _media) => {
          const media = _media as Medias;
          const mediaValue = value[media];

          if (!mediaValue) return {};

          return {
            ...mediaStyles,
            [props.theme.media[media]]: getStyles(prop, mediaValue),
          };
        }, {}),
      };
    }, {})}
`;

Col.displayName = "Col";
export default Col;
