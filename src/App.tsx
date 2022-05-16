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
  Typography,
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
            <Typography key={color} variant="h2">
              This is the <Typography color={color}>{color}</Typography> color.
            </Typography>
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
          <Typography key={variant} as="p" weight={variant}>
            This is the {variant} variant.
          </Typography>
        ))}
      </Container>
    </ThemeProvider>
  );
}
export default App;
