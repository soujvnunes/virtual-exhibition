import styled from "styled-components";
import { ColProps, Cols } from "types";
import { token as t } from "utils";

const getColSize = (col: Cols) => `${(100 * col) / 12}%`;
const convertToObj = (
  prop: unknown,
): Partial<Record<"DEFAULT" | "md" | "lg", Cols>> =>
  prop != null ? (typeof prop === "object" ? prop : { DEFAULT: prop }) : {};
const Col = styled.li<ColProps>`
  padding-left: ${t("padding")};
  padding-top: ${t("padding")};
  ${(props) => {
    let styles: { [key: string]: { [key: string]: string | number } } = {};

    for (const propUntyped of ["$start", "$mid", "$end"]) {
      const prop = propUntyped as keyof ColProps;
      const valueResponsive = convertToObj(props[prop]);

      for (const mediaUntyped in valueResponsive) {
        const media = mediaUntyped as "DEFAULT" | "md" | "lg";
        const value = getColSize(valueResponsive[media] as Cols);

        styles = {
          ...styles,
          [mediaUntyped]: {
            ...styles[mediaUntyped],
            ...(prop === "$start" && {
              marginLeft: value,
            }),
            ...(prop === "$end" && {
              marginRight: value,
            }),
            ...(prop === "$mid" && {
              flexBasis: value,
              flexGrow: 0,
              maxWidth: value,
            }),
          },
        };
      }
    }
    for (const mediaUntyped in styles) {
      const media = mediaUntyped as "md" | "lg";

      styles = {
        ...styles,
        [props.theme.media[media] || ""]: styles[media],
      };
      delete styles[media];
    }

    return styles;
  }}
`;

Col.displayName = "Col";
export default Col;
