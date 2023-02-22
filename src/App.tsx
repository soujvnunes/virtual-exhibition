import { ThemeProvider } from "styled-components";
import CSSGlobalStyles from "ui/CSSGlobalStyles";
import CSSNormalize from "ui/CSSNormalize";
import Header from "app/Header";
import Intro from "app/Intro";
import { CSSThemeVars, theme } from "utils/theme";

export default function App({
  children = (
    <>
      <CSSThemeVars />
      <CSSNormalize />
      <CSSGlobalStyles />
      <Header />
      <Intro />
    </>
  ),
}: React.PropsWithChildren<Record<string, unknown>>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
