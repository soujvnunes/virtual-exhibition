import { css, DefaultTheme, ThemeProps } from "styled-components";
import t from "utils/token";

type StyledPropsValueKs = "sm" | "md" | "lg";

type StyledPropsValue<
  K extends string = StyledPropsValueKs,
  V = string | number,
> = Partial<Record<K, V>>;

export type StyledProps<Ks extends keyof React.CSSProperties, T = void> = {
  [K in Ks as `$${K}`]?:
    | React.CSSProperties[K]
    | StyledPropsValue<StyledPropsValueKs, React.CSSProperties[K]>;
};

function getPropValue(key: string, value?: string | number) {
  return {
    [key]: value,
  };
}
function getProp(prop: unknown): StyledPropsValue {
  return prop != null ? (typeof prop === "object" ? prop : { sm: prop }) : {};
}
function getProps<K extends keyof React.CSSProperties>(key: K) {
  return (props: StyledProps<K> & ThemeProps<DefaultTheme>) => {
    const prop = getProp(props[`$${key}`]);

    return Object.keys(prop).reduce((prev, _curr) => {
      const curr = _curr as Exclude<StyledPropsValueKs, "sm">;

      return css`
        ${prev};
        ${t(curr)} {
          ${getPropValue(key, prop[curr])}
        } ;
      `;
    }, {});
  };
}

export default function generateStyledProps<
  K extends keyof React.CSSProperties,
>(array: Array<K>) {
  return array.reduce(
    (prev, curr) =>
      css`
        ${prev};
        ${getProps<K>(curr)};
      `,
    {},
  );
}
