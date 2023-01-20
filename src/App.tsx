import { ThemeProvider } from "styled-components";
import GlobalStyle from "app/GlobalStyle";
import Header from "app/Header";
import Intro from "app/Intro";

import { theme } from "utils/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Intro />
    </ThemeProvider>
  );
}
