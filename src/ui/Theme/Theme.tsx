import { useState } from "react";
import { ThemeProvider, ThemeProviderProps } from "styled-components";
import { INITIAL_THEME } from "./initialTheme";
import ThemeRoot from "./ThemeRoot";

function Theme({
  children,
}: Omit<ThemeProviderProps<typeof INITIAL_THEME>, "theme">) {
  const [theme] = useState(() => INITIAL_THEME);

  return (
    <ThemeProvider theme={theme}>
      <ThemeRoot />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
