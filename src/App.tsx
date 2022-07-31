import { GlobalStyle, Header, Intro } from "app";
import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { dataTheme } from "utils";

export default function App() {
  const theme = useMemo(() => dataTheme, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Intro />
    </ThemeProvider>
  );
}
