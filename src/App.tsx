import { Container, IconA11y, IconExit, IconLogos, Text } from "ui";

function App() {
  return (
    <>
      <Container as="header" className="flex items-center h-[64px]">
        <div className="flex items-center">
          <IconLogos size="lg" />
          <h1 className="font-serif leading-none italic">
            Exposição <span className="block -ml-sm">Virtual</span>
          </h1>
        </div>
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
        ["headline", "title", "subtitle", "paragraph", "overline"] as const
      ).map((variant) => (
        <Text key={variant} variant={variant}>
          This is the {variant} variant.
        </Text>
      ))}
      {(
        [
          "main",
          "mainSecondary",
          "mainTertiary",
          "text",
          "textSecondary",
          "textTertiary",
        ] as const
      ).map((color) => (
        <Text key={color} variant="title" color={color}>
          This is the {color} color.
        </Text>
      ))}
    </>
  );
}
export default App;
