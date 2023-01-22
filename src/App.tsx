import { ThemeProvider } from "styled-components";
import GlobalStyle from "app/GlobalStyle";
import Header from "app/Header";
import Intro from "app/Intro";
import { theme } from "utils/theme";

export default function App({
  children = (
    <>
      <GlobalStyle />
      <Header />
      <Intro />
    </>
  ),
}: React.PropsWithChildren<Record<string, unknown>>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
