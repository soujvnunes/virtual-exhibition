import { Header, Intro } from "app";
import { THEME } from "consts";
import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "ui";

export default function App() {
  const theme = useMemo(() => THEME, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Intro />
    </ThemeProvider>
  );
}
