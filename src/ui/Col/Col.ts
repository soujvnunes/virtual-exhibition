import styled from "styled-components";
import { getToken, ThemeMediaQuery } from "utils";
import { ColProps, Cols } from "./Col.type";
import { convertToObj, getColSize } from "./Col.util";

const Col = styled.li<ColProps>`
  padding-left: ${getToken("grid.padding")};
  padding-top: ${getToken("grid.padding")};
  flex-grow: ${(props) => props.$mid && 0};
  ${(props) => {
    let styles: { [key: string]: { [key: string]: string | number } } = {};

    for (const Nprop of ["$start", "$mid", "$end"]) {
      const prop = Nprop as keyof ColProps;
      const valueResponsive = convertToObj(props[prop]);

      for (const Nmedia in valueResponsive) {
        const media =
          props.theme.media[Nmedia as Exclude<ThemeMediaQuery, "sm">] || "";
        const value = getColSize(
          valueResponsive[Nmedia as ThemeMediaQuery] as Cols,
        );

        styles = {
          ...styles,
          [media]: {
            ...styles[media],
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
          },
        };
      }
    }

    return styles;
  }}
`;

Col.displayName = "Col";
export default Col;
