import { INITIAL_THEME } from "consts";
import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import {
  Button,
  Container,
  GlobalStyle,
  IconA11y,
  IconExit,
  Logos,
  Text,
} from "ui";

function App() {
  const theme = useMemo(() => INITIAL_THEME, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container as="header">
        <Logos />
        <button className="p-xs border border-main/40 rounded ml-auto text-main-light">
          <IconA11y />
        </button>
        <Button icon={<IconExit />}>Notícias</Button>
      </Container>
      <Container>
        {(["special", "main", "success", "warning", "error"] as const).map(
          (color) => (
            <Text key={color} variant="headline">
              This is the <Text color={color}>{color}</Text> color.
            </Text>
          ),
        )}
        {(
          [
            "normal",
            "normalItalic",
            "medium",
            "mediumItalic",
            "semibold",
            "semiboldItalic",
            "bold",
            "boldItalic",
          ] as const
        ).map((variant) => (
          <Text key={variant} as="p" weight={variant}>
            This is the {variant} variant.
          </Text>
        ))}
      </Container>
    </ThemeProvider>
  );
}
export default App;
