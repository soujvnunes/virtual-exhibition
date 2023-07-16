import { ThemeProvider } from "styled-components";
import CSSGlobalStyles from "ui/CSSGlobalStyles";
import CSSNormalize from "ui/CSSNormalize";
import Header from "app/Header";
import Intro from "app/Intro";
import createMeta from "utils/createMeta";
import { CSSThemeVars, theme } from "utils/theme";
import { ReactComponent as People } from "assets/People.svg";

export default function App({
  children = (
    <>
      <Header />
      <Intro />
      <People />
    </>
  ),
}: React.PropsWithChildren<Record<string, unknown>>) {
  createMeta({
    name: "theme-color",
    content: `rgb(${theme.channel.background})`,
  });

  return (
    <ThemeProvider theme={theme}>
      <CSSThemeVars />
      <CSSNormalize />
      <CSSGlobalStyles />
      {children}
    </ThemeProvider>
  );
}
