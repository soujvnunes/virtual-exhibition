import "styled-components";
import { GlobalStyle } from "ui";

type Theme = typeof GlobalStyle.THEME;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}

  export type PropsWithAs<P extends object = Record<string, unknown>> = P & {
    as?: string | React.ComponentType<P>;
  };
}
