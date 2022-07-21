import styled from "styled-components";
import { ColKs, ColProps, Cols } from "types";
import { token as t } from "utils";

const getColSize = (col: Cols) => `${(100 * col) / 12}%`;
const convertToObj = (
  prop: unknown,
): Partial<Record<ColKs, Partial<Record<"DEFAULT" | "md" | "lg", Cols>>>> =>
  prop != null ? (typeof prop === "object" ? prop : { DEFAULT: prop }) : {};

const Col = styled.li<ColProps>`
  padding-left: ${t("padding")};
  padding-top: ${t("padding")};
  ${(props) => {
    const ref = {
      styles: {},
    };

    for (const edgeUntype of ["start", "mid", "end"]) {
      const edge = edgeUntype as "start" | "mid" | "end";

      if (typeof props[edge] !== "undefined") {
        const edgeKeys = convertToObj(props[edge]) as Partial<
          Record<"DEFAULT" | "md" | "lg", Cols>
        >;

        for (const keyUntyped in edgeKeys) {
          if (Object.prototype.hasOwnProperty.call(edgeKeys, keyUntyped)) {
            const key = keyUntyped as "md" | "lg";
            const col = edgeKeys[key];

            if (col) {
              const colSize = getColSize(col);

              ref.styles = {
                ...ref.styles,
                [props.theme.media[key] || ""]: {
                  marginLeft: edge === "start" && colSize,
                  marginRight: edge === "end" && colSize,
                  flexBasis: edge === "mid" && colSize,
                  flexGrow: edge === "mid" && 0,
                  maxWidth: edge === "mid" && colSize,
                },
              };
            }
          }
        }
      }
    }

    return ref.styles;
  }}
`;

Col.displayName = "Col";
export default Col;
