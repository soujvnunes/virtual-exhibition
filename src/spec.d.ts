import "styled-components";
import { GlobalStyle } from "ui";

type Theme = typeof GlobalStyle.THEME;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
