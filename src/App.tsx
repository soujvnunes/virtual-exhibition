import { ThemeProvider } from "styled-components";

import { GlobalStyle, Header, Intro } from "app";
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
