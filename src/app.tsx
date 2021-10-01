import { GlobalStyle } from "components";
import { useMode } from "hooks";
import { theme } from "libs";
import { Home } from "pages";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <useMode.Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </useMode.Provider>
  );
}

export default App;
