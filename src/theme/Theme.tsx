import { ThemeProvider } from "styled-components";
import generateCssVarsSize from "./generateCssVarsSize";
import ThemeReset from "./ThemeReset";
import ThemeTokens from "./ThemeVariables";
import { ThemeProps } from "./types";

const theme = {
  color: {
    main: {
      light: "#456",
    },
  },
};

export default function Theme({ children, factory }: ThemeProps) {
  const sizes = generateCssVarsSize(factory.size);

  console.log(theme.color.main);

  return (
    <ThemeProvider>
      <ThemeReset />
      <ThemeTokens tokens={sizes} />
      {children}
    </ThemeProvider>
  );
}
