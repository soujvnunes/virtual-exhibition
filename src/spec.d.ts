import { INITIAL_THEME } from "consts";
import {} from "styled-components";

type InitialTheme = typeof INITIAL_THEME;

declare module "styled-components" {
  export interface DefaultTheme extends InitialTheme {}
}
