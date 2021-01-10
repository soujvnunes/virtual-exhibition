import { useMemo } from "react";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, useWindowSize } from "./modules";
import Container from "./container";
import { KEY_THEME_DARK, KEY_THEME_LIGHT } from "./constants";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const type = prefersDarkMode ? KEY_THEME_DARK : KEY_THEME_LIGHT;
  const memoizedTheme = useMemo(() => theme({ type }), [prefersDarkMode]);

  return (
    <ThemeProvider theme={memoizedTheme}>
      <CssBaseline />
      <Container />
      <div style={{ height: useWindowSize("height") * 8 }} />
    </ThemeProvider>
  );
}

export default App;
