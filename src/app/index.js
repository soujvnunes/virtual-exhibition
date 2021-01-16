import { useReducer } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { getHeroes, getReducer, theme as initialTheme } from "../modules";
import {
  STATE_CONTEXT as StateContext,
  DISPATCH_CONTEXT as DispatchContext,
  KEY_THEME_DARK,
} from "../constants";
import Main from "../main";
import Nav from "../nav";

function App() {
  const [{ theme, ...state }, dispatch] = useReducer(getReducer, {
    hero: getHeroes()[0],
    background: getHeroes()[0].gallery[0].img,
    theme: initialTheme({
      type: KEY_THEME_DARK,
    }),
  });

  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Nav />
          <Main />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

export default App;
