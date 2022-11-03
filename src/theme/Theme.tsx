import { useState } from "react";
import { ThemeProvider } from "styled-components";
import generateCssVarsSize from "./generateCssVarsSize";
import ThemeTokens from "./ThemeVariables";
import { ThemeProps } from "./types";

export default function Theme({ children, factory }: ThemeProps) {
  const [tokens] = useState(() => {
    return generateCssVarsSize(factory.size);
  });

  return (
    <ThemeProvider>
      <ThemeTokens tokens={tokens} />
      {children}
    </ThemeProvider>
  );
}
