import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import CSSGlobalStyles from "ui/CSSGlobalStyles";
import CSSNormalize from "ui/CSSNormalize";
import Header from "app/Header";
import Intro from "app/Intro";
import type { Data } from "utils/getData";
import { CSSThemeVars, theme } from "utils/theme";
import { DataContext } from "utils/useData";
import useMeta from "utils/useMeta";

export default function App({
  children = (
    <>
      <Header />
      <Intro />
    </>
  ),
}: React.PropsWithChildren) {
  const [data, setData] = useState<Data>({});

  useMeta({
    name: "theme-color",
    content: `rgb(${theme.channel.background})`,
  });
  useEffect(() => {
    (async function handleData() {
      const { default: getData } = await import("utils/getData");

      setData(await getData());
    })();
  }, []);

  return (
    <DataContext.Provider value={data}>
      <ThemeProvider theme={theme}>
        <CSSThemeVars />
        <CSSNormalize />
        <CSSGlobalStyles />
        {children}
      </ThemeProvider>
    </DataContext.Provider>
  );
}
