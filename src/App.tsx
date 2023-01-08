import { ThemeProvider } from "styled-components";

import { GlobalStyle, Header, Intro, theme } from "app";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <span className="color-main">test</span>
      <Header />
      <Intro />
    </ThemeProvider>
  );
}
