import { ThemeProvider } from "styled-components";
import CSSGlobalStyles from "ui/CSSGlobalStyles";
import CSSNormalize from "ui/CSSNormalize";
import Header from "app/Header";
import Intro from "app/Intro";
import { CSSThemeVars, theme } from "utils/theme";
import { ReactComponent as People } from "assets/People.svg";

export default function App({
  children = (
    <>
      <CSSThemeVars />
      <CSSNormalize />
      <CSSGlobalStyles />
      <Header />
      <Intro />
      <People />
    </>
  ),
}: React.PropsWithChildren<Record<string, unknown>>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
