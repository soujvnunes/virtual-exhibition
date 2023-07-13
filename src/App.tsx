import getMedia from "ui/getMedia";
import Header from "app/Header";
import Intro from "app/Intro";
import { ReactComponent as People } from "assets/People.svg";

export default () => {
  const isThemeDark = getMedia("(prefers-color-scheme: dark)");

  document.documentElement.dataset.mode = isThemeDark ? "dark" : "light";

  return (
    <>
      <Header />
      <Intro />
      <People />
    </>
  );
};
