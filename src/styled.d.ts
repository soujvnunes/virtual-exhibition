import "styled-components";
import { Theme } from "app";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
  export type PropsWithAs<P extends Record<string, unknown>> = {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<P>;
  } & P;
}
