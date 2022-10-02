import { createContext } from "react";

const ThemeContext = createContext({
  color: {
    background: "",
  },
});

export default ThemeContext;
