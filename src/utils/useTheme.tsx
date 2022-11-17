import { useContext, createContext } from "react";
import theme from "./useTheme.module.css";

const ThemeContext = createContext<Partial<typeof theme>>({});

export const useTheme = () => useContext(ThemeContext);
export default function ThemeProvider({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
