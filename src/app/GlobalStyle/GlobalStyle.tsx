import { useMemo } from "react";
import {
  DefaultTheme,
  ThemeProvider,
  ThemeProviderProps,
} from "styled-components";
import GlobalStyledFactory from "./GlobalStyleFactory";
import theme from "./theme";

export default function GlobalStyle({
  children,
}: Omit<ThemeProviderProps<DefaultTheme>, "theme">) {
  const themeMemo = useMemo(() => theme, []);

  return (
    <ThemeProvider theme={themeMemo}>
      <GlobalStyledFactory />
      {children}
    </ThemeProvider>
  );
}
