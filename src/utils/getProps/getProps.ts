import { css, DefaultTheme } from "styled-components";
import { Props } from "types";
import t from "utils/token";

const getPropPair = (key: string, value?: string | number) => ({
  [key]: value,
});
const getProp = (prop: unknown): Props =>
  prop != null ? (typeof prop === "object" ? prop : { sm: prop }) : {};

export default function getProps<
  K extends string,
  P extends Record<string, (string | number) | Props>,
>(key: K) {
  return (props: P & { theme: DefaultTheme }) => {
    const prop = getProp(props[`$${key}`]);

    return Object.keys(prop).reduce((prev, _curr) => {
      const curr = _curr as "md" | "lg";

      return css`
        ${prev};
        ${t(curr)} {
          ${getPropPair(key, prop[curr])}
        } ;
      `;
    }, {});
  };
}
