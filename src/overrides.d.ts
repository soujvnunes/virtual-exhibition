import "styled-components";
import { Theme } from "types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}

  export interface PropsWithAs<P extends object = Record<string, unknown>>
    extends P {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<P>;
  }
}
