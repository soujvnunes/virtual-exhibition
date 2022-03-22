import { Container, IconA11y, IconExit, Logos, Text } from "ui";

function App() {
  return (
    <>
      <Container as="header" className="flex items-center h-[64px]">
        <Logos />
        <button className="p-xs border border-main/40 rounded ml-auto text-main-light">
          <IconA11y />
        </button>
        <button className="py-xs pr-sm pl-lg border border-main/40 rounded ml-sm text-main-light flex text-sm items-center uppercase font-bold tracking-wider">
          Notícias
          <IconExit className="ml-sm" />
        </button>
      </Container>
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
    </>
  );
}
export default App;
