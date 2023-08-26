import getMedia from "ui/getMedia";
import Header from "app/Header";
import Intro from "app/Intro";
import { DataProvider } from "utils/useData";
import useMeta from "utils/useMeta";

export default function App({
  children = (
    <>
      <Header />
      <Intro />
    </>
  ),
}: React.PropsWithChildren) {
  const isThemeDark = getMedia("(prefers-color-scheme: dark)");

  useMeta("theme-color", isThemeDark ? "#000" : "#fff");

  return <DataProvider>{children}</DataProvider>;
}
