import { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { getHeroes, theme } from "../modules";
import {
  KEY_THEME_DARK,
  SECTION_BACKGROUND_CONTEXT as SectionBackgroundContext,
  HERO_CONTEXT as HeroContext,
} from "../constants";
import Main from "../main";
import Navigation from "../navigation";

function App() {
  const [background, setBackground] = useState("");
  const [hero, setHero] = useState(getHeroes()[0]);

  return (
    <ThemeProvider theme={theme({ type: KEY_THEME_DARK })}>
      <CssBaseline />
      <SectionBackgroundContext.Provider value={{ background, setBackground }}>
        <HeroContext.Provider value={{ hero, setHero }}>
          <Navigation />
          <Main />
        </HeroContext.Provider>
      </SectionBackgroundContext.Provider>
    </ThemeProvider>
  );
}

export default App;
