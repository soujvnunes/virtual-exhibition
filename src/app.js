import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./modules";
import Main from "./main";
import { KEY_THEME_DARK } from "./constants";
import Navigation from "./navigation";

function App() {
  return (
    <ThemeProvider theme={theme({ type: KEY_THEME_DARK })}>
      <CssBaseline />
      <Navigation />
      <Main />
    </ThemeProvider>
  );
}

export default App;
