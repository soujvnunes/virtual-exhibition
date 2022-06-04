import "styled-components";
import { Theme } from "types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}

  export type PropsWithAs<P extends object = Record<string, unknown>> = P & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<P>;
  };
}
