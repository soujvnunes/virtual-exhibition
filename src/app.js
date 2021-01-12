import { useMemo } from "react";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./modules";
import Main from "./main";
import { KEY_THEME_DARK, KEY_THEME_LIGHT } from "./constants";
import Navigation from "./navigation";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const type = prefersDarkMode ? KEY_THEME_DARK : KEY_THEME_LIGHT;
  const memoizedTheme = useMemo(() => theme({ type }), [prefersDarkMode]);

  return (
    <ThemeProvider theme={memoizedTheme}>
      <CssBaseline />
      <Navigation />
      <Main />
    </ThemeProvider>
  );
}

export default App;
