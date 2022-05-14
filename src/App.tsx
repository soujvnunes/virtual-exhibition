import { Button, Container, IconA11y, IconExit, Logos, Text, Theme } from "ui";

function App() {
  return (
    <Theme>
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
    </Theme>
  );
}
export default App;
