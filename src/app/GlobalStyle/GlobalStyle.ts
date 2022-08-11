import { createGlobalStyle } from "styled-components";
import { cssReset, cssVars, cssGlobals } from "./GlobalStyle.jss";

const GlobalStyle = createGlobalStyle`${cssReset}${cssVars}${cssGlobals}`;

export default GlobalStyle;
