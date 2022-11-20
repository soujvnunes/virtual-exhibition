import { useContext, createContext } from "react";
import useMedia from "ui/useMedia";
import ColorClasses from "./Color.module.scss";
import GridClasses from "./Grid.module.scss";
import "./Theme.scss";

type Theme = Partial<{
  state: Record<"isDark" | "isDesktop", boolean>;
  color: typeof ColorClasses;
  grid: typeof GridClasses;
}>;
type ThemeProviderProps = Omit<
  React.ProviderProps<Record<string, never>>,
  "value"
>;

const ThemeContext = createContext<Theme>({});

export const useTheme = () => useContext(ThemeContext);
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const isDark = useMedia("(prefers-color-scheme: dark)");
  const isDesktop = useMedia("(min-width: 1024px)");

  return (
    <ThemeContext.Provider
      value={
        /** No need to memoize this, since this Provider is defined in App, I guess 👀 */
        {
          state: {
            isDark,
            isDesktop,
          },
          color: ColorClasses,
          grid: GridClasses,
        }
      }
    >
      {children}
    </ThemeContext.Provider>
  );
}
