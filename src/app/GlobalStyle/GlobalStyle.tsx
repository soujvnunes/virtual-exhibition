import { useMemo } from "react";
import {
  DefaultTheme,
  ThemeProvider,
  ThemeProviderProps,
} from "styled-components";
import { CssReset, CssVars, GlobalStyleFactory } from "./GlobalStyle.jss";
import { GlobalStyleProps } from "./GlobalStyle.type";
import { generateCssVarsSize } from "./GlobalStyle.util";

export default function GlobalStyle({
  children,
  themeFactory,
}: GlobalStyleProps) {
  const sizes = generateCssVarsSize(themeFactory.size);

  return (
    <ThemeProvider>
      <CssReset />
      <CssVars cssVars={sizes} />
      {children}
    </ThemeProvider>
  );
}
