import { GlobalStyle, Header, Intro, theme } from "app";
import { useMemo } from "react";
import { ThemeProvider } from "styled-components";

export default function App() {
  const themeMemo = useMemo(() => theme, []);

  return (
    <ThemeProvider theme={themeMemo}>
      <GlobalStyle />
      <Header />
      <Intro />
    </ThemeProvider>
  );
}
