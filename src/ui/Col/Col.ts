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
  flex-grow: ${(props) => props.$mid && 0};
  ${(props) => {
    let styles: { [key: string]: { [key: string]: string | number } } = {};

    for (const Nprop of ["$start", "$mid", "$end"]) {
      const prop = Nprop as keyof ColProps;
      const valueResponsive = convertToObj(props[prop]);

      for (const Nmedia in valueResponsive) {
        const media = props.theme.media[Nmedia as "md" | "lg"] || "";
        const value = getColSize(
          valueResponsive[Nmedia as "DEFAULT" | "md" | "lg"] as Cols,
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
