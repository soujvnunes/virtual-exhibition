import "styled-components";
import { INITIAL_THEME } from "ui";

type InitialTheme = typeof INITIAL_THEME;

declare module "styled-components" {
  export interface DefaultTheme extends InitialTheme {}
}
