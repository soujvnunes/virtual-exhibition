import "styled-components";
import { Theme } from "app";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
  export type PropsWithAs<P extends Record<string, unknown>> = {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<P>;
  } & P;
}
