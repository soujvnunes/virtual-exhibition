import type React from "react";
import Colors from "./Color.module.scss";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) {
  return (
    <ThemeContext.Provider
      value={{
        color: {
          background: Colors.background,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
