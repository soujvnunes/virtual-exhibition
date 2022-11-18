import { useContext, createContext } from "react";
import colors from "theme/Color.module.scss";

const ThemeContext = createContext<Partial<typeof colors>>({});

export const useTheme = () => useContext(ThemeContext);
export default function ThemeProvider({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) {
  return (
    <ThemeContext.Provider value={colors}>{children}</ThemeContext.Provider>
  );
}
