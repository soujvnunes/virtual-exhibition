import "styled-components";
import { Theme } from "utils";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
