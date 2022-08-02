import type { DefaultTheme, ThemeProps } from "styled-components";

type V = string | number;
type Paths<O extends object, Ks extends V | symbol = keyof O> = {
  [K in Ks]: K extends V
    ? keyof O[K] extends V
      ? `${K}.${keyof O[K]}`
      : never
    : never;
}[Ks];

export default function getToken<
  T extends DefaultTheme = DefaultTheme,
  K extends keyof T = keyof T,
>(key: Paths<T>) {
  return (props: ThemeProps<T>) => {
    try {
      if (typeof key === "string" && key.indexOf(".") > -1) {
        const [prop, value] = key.split(".") as [K, keyof T[K]];

        return props.theme[prop][value];
      }
    } catch (error: unknown) {
      if (error instanceof ErrorEvent) {
        throw new Error(error.message);
      }
    }
  };
}
