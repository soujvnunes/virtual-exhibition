import { useMemo } from "react";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./modules";
import Container from "./container";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const type = prefersDarkMode ? "dark" : "light";
  const memoizedTheme = useMemo(() => theme({ type }), [prefersDarkMode]);

  return (
    <ThemeProvider theme={memoizedTheme}>
      <CssBaseline />
      <Container />
    </ThemeProvider>
  );
}

export default App;
