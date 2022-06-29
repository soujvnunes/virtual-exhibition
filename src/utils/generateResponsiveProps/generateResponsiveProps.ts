import { css, DefaultTheme, ThemeProps } from "styled-components";
import t from "utils/token";

type ResponsiveValueKs = "sm" | "md" | "lg";

type ResponsiveValue<
  V = string | number,
  K extends string = ResponsiveValueKs,
> = Partial<Record<K, V>>;

export type ResponsiveProps<Ks extends keyof React.CSSProperties> = {
  [K in Ks as `$${K}`]?:
    | React.CSSProperties[K]
    | ResponsiveValue<React.CSSProperties[K]>;
};

function valueResolver(key: string, value?: string | number) {
  return {
    [key]: value,
  };
}
function propResolver(prop: unknown): ResponsiveValue {
  return prop != null ? (typeof prop === "object" ? prop : { sm: prop }) : {};
}
function propsResolver<K extends keyof React.CSSProperties>(key: K) {
  return (props: ResponsiveProps<K> & ThemeProps<DefaultTheme>) => {
    const prop = propResolver(props[`$${key}`]);

    return Object.keys(prop).reduce((prev, _curr) => {
      const curr = _curr as Exclude<ResponsiveValueKs, "sm">;

      return css`
        ${prev};
        ${t(curr)} {
          ${valueResolver(key, prop[curr])}
        } ;
      `;
    }, {});
  };
}
export default function generateResponsiveProps<
  K extends keyof React.CSSProperties,
>(array: Array<K>) {
  return array.reduce(
    (prev, curr) =>
      css`
        ${prev};
        ${propsResolver<K>(curr)};
      `,
    {},
  );
}
