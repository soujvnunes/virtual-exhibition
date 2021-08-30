import { useMode } from "hooks";
import { theme } from "libs";
import { Home } from "pages";
import { ThemeProvider } from "styled-components";
import "styles/index.scss";

function App() {
  return (
    <useMode.Provider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </useMode.Provider>
  );
}

export default App;
