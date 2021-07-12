import { useState } from "react";
import { createContext, ReactElement } from "react";

const Context = createContext({
  animatedScroll: false,
  heroRef: null,
  hero: getHeroes()[0],
  background: getHeroes()[0].gallery[0].img,
  theme: initialTheme({
    type: KEY_THEME_DARK,
  }),
});

function Provider({ children }: { children: ReactElement }) {
  const [state, setState] = useState<Object>({
    animatedScroll: false,
    heroRef: null,
    hero: getHeroes()[0],
    background: getHeroes()[0].gallery[0].img,
    theme: initialTheme({
      type: KEY_THEME_DARK,
    }),
  });
}
