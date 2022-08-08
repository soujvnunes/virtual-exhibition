import { createGlobalStyle } from "styled-components";
import { cssGlobals, cssReset, cssVars } from "app/GlobalStyle";

export default createGlobalStyle`${cssReset}${cssVars}${cssGlobals}`;
